


import os
import time
import uuid
import logging
from decimal import Decimal

logger = logging.getLogger("database")
logger.setLevel(logging.INFO)

AWS_REGION = os.environ.get("AWS_REGION", "us-east-1")
PROJECTS_TABLE = os.environ.get("PROJECTS_TABLE", "CarbonChain_Projects")
TRANSACTIONS_TABLE = os.environ.get("TRANSACTIONS_TABLE", "CarbonChain_Transactions")
USERS_TABLE = os.environ.get("USERS_TABLE", "CarbonChain_Users")

try:
    import boto3
    from boto3.dynamodb.conditions import Key, Attr
    dynamodb = boto3.resource("dynamodb", region_name=AWS_REGION)
except Exception as e:
    logger.warning(f"boto3 / DynamoDB unavailable or not installed ({e}). Active in-memory fallback enabled.")
    boto3 = None
    dynamodb = None
    class Attr:
        def __init__(self, name):
            self.name = name
        def eq(self, val):
            return self


def _convert_floats_to_decimals(obj):
    """Converts float values to Decimal for DynamoDB compliance."""
    if isinstance(obj, float):
        return Decimal(str(obj))
    elif isinstance(obj, dict):
        return {k: _convert_floats_to_decimals(v) for k, v in obj.items()}
    elif isinstance(obj, list):
        return [_convert_floats_to_decimals(v) for v in obj]
    return obj


def _convert_decimals_to_native(obj):
    """Converts DynamoDB Decimal objects to Python int/float for JSON serialization."""
    if isinstance(obj, Decimal):
        if obj % 1 == 0:
            return int(obj)
        return float(obj)
    elif isinstance(obj, dict):
        return {k: _convert_decimals_to_native(v) for k, v in obj.items()}
    elif isinstance(obj, list):
        return [_convert_decimals_to_native(v) for v in obj]
    return obj


# ── IN-MEMORY FALLBACK STORE (Active if DynamoDB table not yet created) ──
MOCK_USERS = {
    "0x742d35Cc6634C0532925a3b8D4C9C1C3a6b8F2e1": {
        "wallet_address": "0x742d35Cc6634C0532925a3b8D4C9C1C3a6b8F2e1",
        "role": "buyer",
        "organization_name": "Climate Capital Global",
        "email": "buyer@demo.com",
        "credentials_hash": "sha256_mock_credentials",
        "registration_date": "2025-08-01T10:00:00Z",
        "last_active": "2026-10-10T12:00:00Z"
    },
    "0x3C44CdD45a69371e51D4e68e4d3E7eF29A389D91": {
        "wallet_address": "0x3C44CdD45a69371e51D4e68e4d3E7eF29A389D91",
        "role": "seller",
        "organization_name": "Sundarbans Coastal Bio-Conservancy",
        "email": "seller@demo.com",
        "credentials_hash": "sha256_mock_credentials",
        "registration_date": "2025-07-15T08:30:00Z",
        "last_active": "2026-10-10T14:15:00Z"
    }
}

MOCK_PROJECTS = {
    "proj-anamalai-01": {
        "project_id": "proj-anamalai-01",
        "name": "Anamalai Reserve Reforestation Corridor",
        "location": "Tamil Nadu, India",
        "lat": 10.321,
        "lng": 76.954,
        "area_ha": 14200.0,
        "seller_wallet": "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
        "total_credits": 10000,
        "available_credits": 8450,
        "price_per_ton_eth": 0.04,
        "aqi": 142,
        "soil_moisture_pct": 34.2,
        "ambient_temp_c": 28.5,
        "uhi_cooling_c": -2.4,
        "ndvi_score": 0.78,
        "restoration_priority": "CRITICAL",
        "sequestration_tco2_yr": 10000,
        "native_species": ["Teak", "Neem", "Banyan", "Sandalwood", "Sal", "Bamboo", "Peepal", "Arjun"],
        "species_count": 8,
        "evidence_urls": ["https://s3.amazonaws.com/carbonchain-evidence-vault/evidence/anamalai_deed.pdf"],
        "status": "ACTIVE",
        "dataStatus": "VERIFIED",
        "escrow_released_percent": 30,
        "created_at": "2025-09-01T10:00:00Z"
    },
    "proj-sundarbans-02": {
        "project_id": "proj-sundarbans-02",
        "name": "Sundarbans Coastal Mangrove Bio-Shield",
        "location": "West Bengal, India",
        "lat": 21.949,
        "lng": 88.900,
        "area_ha": 18500.0,
        "seller_wallet": "0x3C44CdD45a69371e51D4e68e4d3E7eF29A389D91",
        "total_credits": 25000,
        "available_credits": 21300,
        "price_per_ton_eth": 0.035,
        "aqi": 188,
        "soil_moisture_pct": 68.0,
        "ambient_temp_c": 31.0,
        "uhi_cooling_c": -3.1,
        "ndvi_score": 0.84,
        "restoration_priority": "CRITICAL",
        "sequestration_tco2_yr": 25000,
        "native_species": ["Rhizophora mucronata", "Avicennia marina", "Bruguiera gymnorrhiza", "Ceriops decandra", "Sonneratia apetala", "Xylocarpus granatum", "Aegiceras corniculatum", "Heritiera fomes"],
        "species_count": 8,
        "evidence_urls": ["https://s3.amazonaws.com/carbonchain-evidence-vault/evidence/sundarbans_audit.pdf"],
        "status": "ACTIVE",
        "dataStatus": "VERIFIED",
        "escrow_released_percent": 100,
        "created_at": "2025-08-15T12:30:00Z"
    }
}

MOCK_TRANSACTIONS = [
    {
        "tx_id": "tx-001-init",
        "order_id": "ord-001",
        "buyer_wallet": "0x742d35Cc6634C0532925a3b8D4C9C1C3a6b8F2e1",
        "seller_wallet": "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
        "project_id": "proj-anamalai-01",
        "token_id": 1,
        "tonnage": 150,
        "currency": "ETH",
        "tx_hash": "0x4e29e9d1bf7a83d7890f952f440a32d67a18b76df1733458992e5927ad99b451",
        "type": "BUY",
        "created_at": "2025-09-10T14:20:00Z"
    }
]


# ══════════════════════════════════════════════════════════════════════════════
# 1. CARBONCHAIN_USERS OPERATIONS
# ══════════════════════════════════════════════════════════════════════════════

def sync_user(wallet_address, role="buyer", profile_data=None):
    """
    Retrieves or creates user record with role ('buyer' | 'seller'), organization name,
    email, credentials hash, registration date, and last active timestamp.
    """
    if not wallet_address:
        return None

    wallet_address = wallet_address.strip()
    profile_data = profile_data or {}
    now_iso = time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())

    try:
        if dynamodb is None:
            raise RuntimeError("DynamoDB client unavailable")

        table = dynamodb.Table(USERS_TABLE)
        resp = table.get_item(Key={"wallet_address": wallet_address})
        existing_item = resp.get("Item")

        if existing_item:
            existing = _convert_decimals_to_native(existing_item)
            updates = {":la": now_iso}
            expr = "SET last_active = :la"

            if profile_data.get("organization_name"):
                expr += ", organization_name = :org"
                updates[":org"] = profile_data["organization_name"]
            if profile_data.get("email"):
                expr += ", email = :em"
                updates[":em"] = profile_data["email"]

            table.update_item(
                Key={"wallet_address": wallet_address},
                UpdateExpression=expr,
                ExpressionAttributeValues=updates
            )
            existing["last_active"] = now_iso
            if profile_data.get("organization_name"):
                existing["organization_name"] = profile_data["organization_name"]
            if profile_data.get("email"):
                existing["email"] = profile_data["email"]
            logger.info(f"User synced in DynamoDB: {wallet_address}")
            return existing

        new_user = {
            "wallet_address": wallet_address,
            "role": role if role in ["buyer", "seller"] else "buyer",
            "organization_name": profile_data.get("organization_name", "Decentralized Participant"),
            "email": profile_data.get("email", ""),
            "credentials_hash": profile_data.get("credentials_hash", f"hash_{uuid.uuid4().hex[:12]}"),
            "registration_date": now_iso,
            "last_active": now_iso
        }
        table.put_item(Item=_convert_floats_to_decimals(new_user))
        logger.info(f"New user registered in DynamoDB: {wallet_address}")
        return new_user

    except Exception as e:
        logger.warning(f"DynamoDB sync_user fallback active ({e})")
        if wallet_address in MOCK_USERS:
            user = MOCK_USERS[wallet_address]
            user["last_active"] = now_iso
            if profile_data.get("organization_name"):
                user["organization_name"] = profile_data["organization_name"]
            if profile_data.get("email"):
                user["email"] = profile_data["email"]
            return user

        new_user = {
            "wallet_address": wallet_address,
            "role": role if role in ["buyer", "seller"] else "buyer",
            "organization_name": profile_data.get("organization_name", "Decentralized Participant"),
            "email": profile_data.get("email", ""),
            "credentials_hash": profile_data.get("credentials_hash", f"hash_{uuid.uuid4().hex[:12]}"),
            "registration_date": now_iso,
            "last_active": now_iso
        }
        MOCK_USERS[wallet_address] = new_user
        return new_user


def update_user_role(wallet_address, new_role):
    """
    Toggles active role between 'buyer' and 'seller'.
    """
    if not wallet_address or new_role not in ["buyer", "seller"]:
        return None

    wallet_address = wallet_address.strip()
    now_iso = time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())

    try:
        if dynamodb is None:
            raise RuntimeError("DynamoDB client unavailable")

        table = dynamodb.Table(USERS_TABLE)
        resp = table.update_item(
            Key={"wallet_address": wallet_address},
            UpdateExpression="SET #r = :role, last_active = :la",
            ExpressionAttributeNames={"#r": "role"},
            ExpressionAttributeValues={":role": new_role, ":la": now_iso},
            ReturnValues="ALL_NEW"
        )
        logger.info(f"Updated role for {wallet_address} to {new_role}")
        return _convert_decimals_to_native(resp.get("Attributes", {}))
    except Exception as e:
        logger.warning(f"DynamoDB update_user_role fallback active ({e})")
        if wallet_address in MOCK_USERS:
            MOCK_USERS[wallet_address]["role"] = new_role
            MOCK_USERS[wallet_address]["last_active"] = now_iso
            return MOCK_USERS[wallet_address]

        new_u = sync_user(wallet_address, role=new_role)
        new_u["role"] = new_role
        return new_u


# ══════════════════════════════════════════════════════════════════════════════
# 2. CARBONCHAIN_PROJECTS OPERATIONS
# ══════════════════════════════════════════════════════════════════════════════

def create_project(project_data):
    """
    Saves seller wallet, parcel name, coordinates (lat, lng), total area (ha),
    base tonnage, price per ton, native species list, species count, baseline NDVI,
    S3 evidence URLs, and status ('ACTIVE' | 'PENDING_AUDIT').
    """
    project_id = project_data.get("project_id") or f"proj-{uuid.uuid4().hex[:8]}"
    now_iso = time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())

    base_tonnage = int(project_data.get("base_tonnage") or project_data.get("total_credits") or 1000)
    available_credits = int(project_data.get("available_credits") or base_tonnage)

    species_raw = project_data.get("native_species", [])
    if isinstance(species_raw, str):
        native_species = [s.strip() for s in species_raw.split(",") if s.strip()]
    elif isinstance(species_raw, list):
        native_species = [str(s).strip() for s in species_raw if str(s).strip()]
    else:
        native_species = []

    species_count = len(native_species)

    evidence_urls = project_data.get("evidence_urls", [])
    if isinstance(evidence_urls, str):
        evidence_urls = [evidence_urls]

    status = project_data.get("status", "ACTIVE")

    item = {
        "project_id": project_id,
        "name": project_data.get("name") or project_data.get("parcel_name", "Unnamed Carbon Parcel"),
        "location": project_data.get("location", "Global Conservation Zone"),
        "lat": float(project_data.get("lat", 0.0)),
        "lng": float(project_data.get("lng", 0.0)),
        "area_ha": float(project_data.get("area_ha", 100.0)),
        "seller_wallet": project_data.get("seller_wallet", "0x0000000000000000000000000000000000000000"),
        "total_credits": base_tonnage,
        "available_credits": available_credits,
        "base_tonnage": base_tonnage,
        "price_per_ton_eth": float(project_data.get("price_per_ton_eth") or project_data.get("price_per_credit", 0.04)),
        "native_species": native_species,
        "species_count": species_count,
        "baseline_ndvi": float(project_data.get("baseline_ndvi") or project_data.get("ndvi_score", 0.72)),
        "ndvi_score": float(project_data.get("ndvi_score") or project_data.get("baseline_ndvi", 0.72)),
        "aqi": int(project_data.get("aqi", 120)),
        "soil_moisture_pct": float(project_data.get("soil_moisture_pct", 38.0)),
        "ambient_temp_c": float(project_data.get("ambient_temp_c", 26.5)),
        "uhi_cooling_c": float(project_data.get("uhi_cooling_c", -2.1)),
        "restoration_priority": project_data.get("restoration_priority", "HIGH"),
        "sequestration_tco2_yr": int(project_data.get("sequestration_tco2_yr", base_tonnage)),
        "evidence_urls": evidence_urls,
        "status": status,
        "dataStatus": project_data.get("dataStatus", "DEMO"),
        "escrow_released_percent": int(project_data.get("escrow_released_percent", 30)),
        "created_at": now_iso
    }

    try:
        if dynamodb is None:
            raise RuntimeError("DynamoDB client unavailable")

        table = dynamodb.Table(PROJECTS_TABLE)
        db_item = _convert_floats_to_decimals(item)
        table.put_item(Item=db_item)
        logger.info(f"Project {project_id} stored in DynamoDB ({PROJECTS_TABLE})")
    except Exception as e:
        logger.warning(f"DynamoDB create_project fallback active: {e}")
        MOCK_PROJECTS[project_id] = item

    return item


def get_active_projects(limit=200):
    """
    Retrieves all active listings for marketplace and map rendering up to limit.
    """
    try:
        if dynamodb is None:
            raise RuntimeError("DynamoDB client unavailable")

        table = dynamodb.Table(PROJECTS_TABLE)
        response = table.scan(
            FilterExpression=Attr("status").eq("ACTIVE"),
            Limit=limit
        )
        items = response.get("Items", [])
        native_items = _convert_decimals_to_native(items)
        if native_items:
            return native_items[:limit]
    except Exception as e:
        logger.warning(f"DynamoDB get_active_projects scan fallback: {e}")

    active = [p for p in MOCK_PROJECTS.values() if p.get("status", "").upper() == "ACTIVE"]
    return active[:limit]


def get_all_projects(status="ACTIVE"):
    """
    Scans/queries available listings matching status filter.
    Pass status='ALL' to retrieve all records regardless of status.
    """
    try:
        if dynamodb is None:
            raise RuntimeError("DynamoDB client unavailable")

        table = dynamodb.Table(PROJECTS_TABLE)
        if status and status.upper() != "ALL":
            response = table.scan(FilterExpression=Attr("status").eq(status.upper()))
        else:
            response = table.scan()

        items = response.get("Items", [])
        native_items = _convert_decimals_to_native(items)
        if native_items:
            return native_items
    except Exception as e:
        logger.warning(f"DynamoDB get_all_projects fallback: {e}")

    if not status or status.upper() == "ALL":
        return list(MOCK_PROJECTS.values())
    return [p for p in MOCK_PROJECTS.values() if p.get("status", "").upper() == status.upper()]


def get_project_by_id(project_id):
    """
    Fetches a single project parcel by project_id.
    """
    try:
        if dynamodb is None:
            raise RuntimeError("DynamoDB client unavailable")

        table = dynamodb.Table(PROJECTS_TABLE)
        response = table.get_item(Key={"project_id": project_id})
        item = response.get("Item")
        if item:
            return _convert_decimals_to_native(item)
    except Exception as e:
        logger.warning(f"DynamoDB get_project_by_id fallback: {e}")

    return MOCK_PROJECTS.get(project_id)


def update_project_tonnage(project_id, quantity):
    """
    Safely decrements available credit supply by quantity.
    """
    quantity = int(quantity)
    try:
        if dynamodb is None:
            raise RuntimeError("DynamoDB client unavailable")

        table = dynamodb.Table(PROJECTS_TABLE)
        response = table.update_item(
            Key={"project_id": project_id},
            UpdateExpression="SET available_credits = available_credits - :val",
            ConditionExpression="available_credits >= :val",
            ExpressionAttributeValues={":val": Decimal(str(quantity))},
            ReturnValues="ALL_NEW"
        )
        logger.info(f"Decremented {quantity} tonnage for project {project_id}")
        return _convert_decimals_to_native(response.get("Attributes", {}))
    except Exception as e:
        logger.warning(f"DynamoDB update_project_tonnage fallback: {e}")
        if project_id in MOCK_PROJECTS:
            curr = MOCK_PROJECTS[project_id].get("available_credits", 0)
            MOCK_PROJECTS[project_id]["available_credits"] = max(0, curr - quantity)
            return MOCK_PROJECTS[project_id]
        return None


def update_escrow_status(project_id, released_percent):
    """
    Updates project payout milestones based on verified canopy growth (NDVI).
    """
    released_percent = int(released_percent)
    try:
        if dynamodb is None:
            raise RuntimeError("DynamoDB client unavailable")

        table = dynamodb.Table(PROJECTS_TABLE)
        response = table.update_item(
            Key={"project_id": project_id},
            UpdateExpression="SET escrow_released_percent = :val, #st = :status",
            ExpressionAttributeNames={"#st": "status"},
            ExpressionAttributeValues={
                ":val": Decimal(str(released_percent)),
                ":status": "ACTIVE" if released_percent >= 30 else "PENDING_AUDIT"
            },
            ReturnValues="ALL_NEW"
        )
        logger.info(f"Updated escrow status for {project_id} to {released_percent}%")
        return _convert_decimals_to_native(response.get("Attributes", {}))
    except Exception as e:
        logger.warning(f"DynamoDB update_escrow_status fallback: {e}")
        if project_id in MOCK_PROJECTS:
            MOCK_PROJECTS[project_id]["escrow_released_percent"] = released_percent
            return MOCK_PROJECTS[project_id]
        return {
            "project_id": project_id,
            "escrow_released_percent": released_percent,
            "status": "ACTIVE"
        }


# ══════════════════════════════════════════════════════════════════════════════
# 3. CARBONCHAIN_TRANSACTIONS OPERATIONS
# ══════════════════════════════════════════════════════════════════════════════

def record_transaction(tx_data):
    """
    Persists order ID, buyer wallet, seller wallet, project ID, token ID,
    tonnage, currency, transaction hash, type ('MINT' | 'BUY' | 'RETIRE'), and timestamp.
    Safely decrements available credit supply via update_project_tonnage.
    """
    tx_id = tx_data.get("tx_id") or f"tx-{uuid.uuid4().hex[:10]}"
    order_id = tx_data.get("order_id") or f"ord-{uuid.uuid4().hex[:8]}"
    now_iso = time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())

    tx_type = tx_data.get("type") or ("RETIRE" if tx_data.get("is_burned") else "BUY")
    tonnage = int(tx_data.get("tonnage") or tx_data.get("credit_amount") or 1)

    item = {
        "tx_id": tx_id,
        "order_id": order_id,
        "buyer_wallet": tx_data.get("buyer_wallet", "0x000"),
        "seller_wallet": tx_data.get("seller_wallet", "0x000"),
        "project_id": tx_data.get("project_id", "proj-general"),
        "token_id": int(tx_data.get("token_id") or 1),
        "tonnage": tonnage,
        "currency": tx_data.get("currency", "ETH"),
        "eth_paid": float(tx_data.get("eth_paid") or tx_data.get("amount_eth", 0.04)),
        "tx_hash": tx_data.get("tx_hash", "0x" + "0" * 64),
        "type": tx_type,
        "is_burned": bool(tx_type == "RETIRE" or tx_data.get("is_burned", False)),
        "created_at": now_iso
    }

    try:
        if dynamodb is None:
            raise RuntimeError("DynamoDB client unavailable")

        table = dynamodb.Table(TRANSACTIONS_TABLE)
        db_item = _convert_floats_to_decimals(item)
        table.put_item(Item=db_item)
        logger.info(f"Transaction {tx_id} logged in DynamoDB ({TRANSACTIONS_TABLE})")
    except Exception as e:
        logger.warning(f"DynamoDB record_transaction fallback: {e}")
        MOCK_TRANSACTIONS.append(item)

    # Safely decrement available project tonnage for BUY/MINT transactions
    p_id = item["project_id"]
    if p_id and tx_type in ["BUY", "MINT"]:
        update_project_tonnage(p_id, tonnage)

    return item


def get_user_portfolio(wallet_address):
    """
    Retrieves purchase and retirement history for the buyer dashboard by wallet address.
    """
    if not wallet_address:
        return {"purchases": [], "retirements": [], "total_tco2_purchased": 0, "total_tco2_retired": 0}

    wallet_address_lower = wallet_address.strip().lower()

    try:
        if dynamodb is None:
            raise RuntimeError("DynamoDB client unavailable")

        table = dynamodb.Table(TRANSACTIONS_TABLE)
        resp = table.scan(
            FilterExpression=Attr("buyer_wallet").eq(wallet_address)
        )
        raw_items = resp.get("Items", [])
        items = _convert_decimals_to_native(raw_items)
    except Exception as e:
        logger.warning(f"DynamoDB get_user_portfolio fallback: {e}")
        items = [
            t for t in MOCK_TRANSACTIONS
            if t.get("buyer_wallet", "").lower() == wallet_address_lower
        ]

    purchases = [t for t in items if t.get("type") in ["BUY", "MINT"]]
    retirements = [t for t in items if t.get("type") == "RETIRE" or t.get("is_burned")]

    total_purchased = sum(int(t.get("tonnage", 0)) for t in purchases)
    total_retired = sum(int(t.get("tonnage", 0)) for t in retirements)

    return {
        "wallet_address": wallet_address,
        "purchases": purchases,
        "retirements": retirements,
        "total_tco2_purchased": total_purchased,
        "total_tco2_retired": total_retired,
        "active_portfolio_credits": max(0, total_purchased - total_retired)
    }
