// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

/**
 * @title CarbonChainToken
 * @dev ERC-1155 carbon credit marketplace with:
 *   - Milestone-based escrow: 30% upfront, 70% locked until NDVI growth verified
 *   - Anti-Monoculture Guardrails & Soil IoT Telemetry (Task 1)
 *   - Parametric Emergency Irrigation Escrow (Task 2)
 *   - Hyperlocal Caretaker Micro-Staking / Adopt-a-Tree (Task 3)
 *   - Crowd-proof auditor bounty payout
 */
contract CarbonChainToken is ERC1155, Ownable, ReentrancyGuard {

    // ─── CONSTANTS ────────────────────────────────────────────────
    uint256 public constant PROTOCOL_FEE_BPS  = 250;   // 2.5 %
    uint256 public constant CARETAKER_FEE_BPS = 500;   // 5.0 % (Task 3 Caretaker Pool)
    uint256 public constant UPFRONT_BPS       = 3000;  // 30 % released immediately
    uint256 public constant ESCROW_BPS        = 7000;  // 70 % held in escrow
    uint256 public constant AUDITOR_BOUNTY    = 0.005 ether;
    uint256 public constant MOISTURE_SAFETY_THRESHOLD = 20; // 20% soil moisture safety threshold

    // ─── STRUCTS ──────────────────────────────────────────────────

    /// @notice Tracks a carbon project listing
    struct Listing {
        address payable seller;
        uint256 pricePerCredit;   // in wei
        uint256 available;
        bool    active;
        uint256 speciesCount;       // Task 1: Native species blueprint count
        uint256 urgencyMultiplier;  // Task 1: BPS multiplier (10000 = 1.0x, 5000 = 0.5x if monoculture)
    }

    /// @notice Escrow record per corporate purchase
    struct EscrowRecord {
        address payable seller;
        uint256 amount;           // total ETH locked
        bool    released;
        uint256 createdAt;
        string  parcelId;         // Copernicus parcel ID for NDVI check
        uint256 tokenId;
    }

    // ─── STATE ────────────────────────────────────────────────────

    uint256 public nextTokenId = 1;

    /// tokenId → Listing
    mapping(uint256 => Listing) public listings;

    /// escrowId → EscrowRecord
    mapping(uint256 => EscrowRecord) public escrows;
    uint256 public nextEscrowId = 1;

    /// tokenId → total burned quantity (anti-double-count)
    mapping(uint256 => uint256) public burnedAmount;

    /// Task 1: tokenId → soilMoistureLevel (0 to 100 %)
    mapping(uint256 => uint256) public soilMoistureLevel;

    /// Task 2: escrowId → emergencyIrrigationTriggered
    mapping(uint256 => bool) public emergencyIrrigationTriggered;
    mapping(uint256 => address payable) public localWaterTanker;

    /// Task 3: tokenId → caretaker yield pool accumulation & registered caretakers
    mapping(uint256 => uint256) public caretakerPool;
    mapping(uint256 => address payable) public registeredCaretakers;

    address payable public treasury;

    // ─── EVENTS ───────────────────────────────────────────────────

    event CreditsMinted(uint256 indexed tokenId, address indexed seller, uint256 amount, uint256 pricePerCredit, uint256 speciesCount, uint256 urgencyMultiplier);
    event CreditsPurchased(uint256 indexed tokenId, address indexed buyer, uint256 qty, uint256 upfront, uint256 escrowed, uint256 escrowId, uint256 caretakerFee);
    event EscrowReleased(uint256 indexed escrowId, address indexed seller, uint256 amount);
    event CreditsRetired(uint256 indexed tokenId, address indexed owner, uint256 qty, bytes32 burnTx);
    event AuditorBountyPaid(address indexed auditor, uint256 amount, string parcelId);

    // Task 1, 2, 3 Events
    event SoilMoistureUpdated(uint256 indexed tokenId, uint256 level, bool isPaused);
    event EmergencyIrrigationActivated(uint256 indexed escrowId, address indexed tankerWallet, uint256 amount);
    event CaretakerRegistered(uint256 indexed tokenId, address indexed caretaker);
    event CaretakerYieldClaimed(uint256 indexed tokenId, address indexed caretaker, uint256 amount);

    // ─── CONSTRUCTOR ──────────────────────────────────────────────

    constructor(address payable _treasury)
        ERC1155("https://api.carbonchain.io/token/{id}.json")
        Ownable(msg.sender)
    {
        treasury = _treasury;
    }

    // ══════════════════════════════════════════════════════════════
    // TASK 1 — ANTI-MONOCULTURE GUARDRAILS & SOIL IOT TELEMETRY
    // ══════════════════════════════════════════════════════════════

    /**
     * @notice Seller lists carbon credits with species blueprint count.
     *         If speciesCount < 8 (monoculture), slash urgencyMultiplier by 50%.
     */
    function mintCarbonCreditAdvanced(
        uint256 qty,
        uint256 pricePerCredit,
        uint256 speciesCount,
        address payable tankerWallet
    )
        public
        onlyOwner
        returns (uint256 tokenId)
    {
        tokenId = nextTokenId++;
        _mint(msg.sender, tokenId, qty, "");

        // If speciesCount < 8, slash multiplier by 50% (5000 bps vs 10000 bps)
        uint256 multiplier = (speciesCount >= 8) ? 10000 : 5000;

        listings[tokenId] = Listing({
            seller: payable(msg.sender),
            pricePerCredit: pricePerCredit,
            available: qty,
            active: true,
            speciesCount: speciesCount,
            urgencyMultiplier: multiplier
        });

        // Initialize baseline soil moisture (50%)
        soilMoistureLevel[tokenId] = 50;

        if (tankerWallet != address(0)) {
            localWaterTanker[tokenId] = tankerWallet;
        }

        emit CreditsMinted(tokenId, msg.sender, qty, pricePerCredit, speciesCount, multiplier);
    }

    /// Backward compatible mint call
    function mintCarbonCredit(uint256 qty, uint256 pricePerCredit) external onlyOwner returns (uint256 tokenId) {
        return mintCarbonCreditAdvanced(qty, pricePerCredit, 10, payable(address(0)));
    }

    /**
     * @notice Oracle updates live soil moisture level for a parcel.
     *         If soil moisture drops below 20%, pause transactions for that parcel.
     */
    function updateSoilMoisture(uint256 tokenId, uint256 moisture) external onlyOwner {
        soilMoistureLevel[tokenId] = moisture;
        bool isPaused = (moisture < MOISTURE_SAFETY_THRESHOLD);
        emit SoilMoistureUpdated(tokenId, moisture, isPaused);
    }

    // ══════════════════════════════════════════════════════════════
    // PURCHASE WITH ESCROW & CARETAKER MICRO-STAKING (TASK 3)
    // ══════════════════════════════════════════════════════════════

    function purchaseWithEscrow(
        uint256 tokenId,
        uint256 qty,
        string calldata parcelId
    )
        external
        payable
        nonReentrant
        returns (uint256 escrowId)
    {
        Listing storage listing = listings[tokenId];
        require(listing.active, "Listing not active");
        require(listing.available >= qty, "Insufficient credits");
        require(soilMoistureLevel[tokenId] >= MOISTURE_SAFETY_THRESHOLD, "Soil moisture critical (<20%): Parcel minting paused");

        uint256 totalCost = listing.pricePerCredit * qty;
        require(msg.value >= totalCost, "Insufficient ETH sent");

        // Protocol fee (2.5%) & Caretaker pool (5.0%)
        uint256 protocolFee = (totalCost * PROTOCOL_FEE_BPS) / 10000;
        uint256 caretakerFee = (totalCost * CARETAKER_FEE_BPS) / 10000;
        uint256 sellerTotal  = totalCost - protocolFee - caretakerFee;

        // Accumulate caretaker yield
        caretakerPool[tokenId] += caretakerFee;

        // Split seller share: 30% now, 70% escrow
        uint256 upfront = (sellerTotal * UPFRONT_BPS) / 10000;
        uint256 escrowed = sellerTotal - upfront;

        // Transfer upfront to seller & protocol fee to treasury
        (bool s1,) = listing.seller.call{value: upfront}("");
        require(s1, "Seller transfer failed");
        (bool s2,) = treasury.call{value: protocolFee}("");
        require(s2, "Treasury transfer failed");

        // Lock escrow
        escrowId = nextEscrowId++;
        escrows[escrowId] = EscrowRecord({
            seller:    listing.seller,
            amount:    escrowed,
            released:  false,
            createdAt: block.timestamp,
            parcelId:  parcelId,
            tokenId:   tokenId
        });

        // Reduce available supply & transfer tokens to buyer
        listing.available -= qty;
        _safeTransferFrom(listing.seller, msg.sender, tokenId, qty, "");

        // Refund excess ETH
        if (msg.value > totalCost) {
            payable(msg.sender).transfer(msg.value - totalCost);
        }

        emit CreditsPurchased(tokenId, msg.sender, qty, upfront, escrowed, escrowId, caretakerFee);
    }

    function releaseEscrow(uint256 escrowId) external onlyOwner nonReentrant {
        EscrowRecord storage record = escrows[escrowId];
        require(!record.released, "Already released");
        require(record.amount > 0, "Nothing to release");
        require(address(this).balance >= record.amount, "Insufficient contract balance");

        record.released = true;
        (bool success,) = record.seller.call{value: record.amount}("");
        require(success, "Escrow release transfer failed");

        emit EscrowReleased(escrowId, record.seller, record.amount);
    }

    // ══════════════════════════════════════════════════════════════
    // TASK 2 — PARAMETRIC EMERGENCY IRRIGATION ESCROW
    // ══════════════════════════════════════════════════════════════

    /**
     * @notice Triggered by drought oracle when temperature > 40°C with 0mm rainfall.
     *         Releases 5% of project escrowed funds to registered water tanker.
     */
    function emergencyIrrigate(uint256 escrowId, address payable waterTanker) external onlyOwner nonReentrant {
        EscrowRecord storage record = escrows[escrowId];
        require(!record.released, "Escrow already released");
        require(!emergencyIrrigationTriggered[escrowId], "Emergency irrigation already triggered");
        
        address payable tanker = waterTanker != address(0) ? waterTanker : localWaterTanker[record.tokenId];
        require(tanker != address(0), "No water tanker registered");

        // 5% emergency release from escrow
        uint256 emergencyAmount = (record.amount * 500) / 10000;
        require(record.amount >= emergencyAmount, "Insufficient escrow remaining");

        record.amount -= emergencyAmount;
        emergencyIrrigationTriggered[escrowId] = true;

        (bool success,) = tanker.call{value: emergencyAmount}("");
        require(success, "Emergency irrigation transfer failed");
        emit EmergencyIrrigationActivated(escrowId, tanker, emergencyAmount);
    }

    // ══════════════════════════════════════════════════════════════
    // TASK 3 — HYPERLOCAL CARETAKER MICRO-STAKING (ADOPT-A-TREE)
    // ══════════════════════════════════════════════════════════════

    /**
     * @notice Local community member registers as caretaker for a parcel.
     */
    function registerCaretaker(uint256 tokenId) external {
        require(registeredCaretakers[tokenId] == address(0), "Parcel already adopted by a caretaker");
        registeredCaretakers[tokenId] = payable(msg.sender);
        emit CaretakerRegistered(tokenId, msg.sender);
    }

    /**
     * @notice Registered caretaker claims monthly accrued micro-yields from corporate purchases.
     */
    function claimCaretakerYield(uint256 tokenId) external nonReentrant {
        require(registeredCaretakers[tokenId] == msg.sender, "Caller is not the registered caretaker");
        uint256 yieldAmount = caretakerPool[tokenId];
        require(yieldAmount > 0, "No yield accumulated");

        caretakerPool[tokenId] = 0;
        (bool success,) = payable(msg.sender).call{value: yieldAmount}("");
        require(success, "Caretaker yield transfer failed");

        emit CaretakerYieldClaimed(tokenId, msg.sender, yieldAmount);
    }

    // ══════════════════════════════════════════════════════════════
    // AUDITOR BOUNTY & BURN
    // ══════════════════════════════════════════════════════════════

    function payoutAuditorBounty(address payable auditor, string calldata parcelId) external onlyOwner nonReentrant {
        require(auditor != address(0), "Invalid auditor address");
        require(address(this).balance >= AUDITOR_BOUNTY, "Insufficient bounty funds");
        (bool success,) = auditor.call{value: AUDITOR_BOUNTY}("");
        require(success, "Auditor bounty transfer failed");
        emit AuditorBountyPaid(auditor, AUDITOR_BOUNTY, parcelId);
    }

    function retireCredit(uint256 tokenId, uint256 qty, bytes32 burnTxHash) external nonReentrant {
        require(balanceOf(msg.sender, tokenId) >= qty, "Insufficient balance");
        _burn(msg.sender, tokenId, qty);
        burnedAmount[tokenId] += qty;
        emit CreditsRetired(tokenId, msg.sender, qty, burnTxHash);
    }

    function setTreasury(address payable _treasury) external onlyOwner {
        treasury = _treasury;
    }

    receive() external payable {}
}

