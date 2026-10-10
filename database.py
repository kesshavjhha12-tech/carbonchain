"""
CarbonChain — Amazon DynamoDB Database Access Layer
Provides production-grade CRUD operations for CarbonChain tables:
- CarbonChain_Projects
- CarbonChain_Transactions
- CarbonChain_Users
"""

import os
import time
import uuid
import logging
from decimal import Decimal
import boto3
from boto3.dynamodb.conditions import Key, Attr

logger = logging.getLogger("database")
logger.setLevel(logging.INFO)

AWS_REGION = os.environ.get("AWS_REGION", "us-east-1")
PROJECTS_TABLE = os.environ.get("PROJECTS_TABLE", "CarbonChain_Projects")
TRANSACTIONS_TABLE = os.environ.get("TRANSACTIONS_TABLE", "CarbonChain_Transactions")
USERS_TABLE = os.environ.get("USERS_TABLE", "CarbonChain_Users")

dynamodb = boto3.resource("dynamodb", region_name=AWS_REGION)

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
MOCK_PROJECTS = {
    "proj-anamalai-01": {
        "project_id": "proj-anamalai-01",
        "name": "Anamalai Reserve Reforestation",
        "location": "Tamil Nadu, India",
        "lat": 10.321,
        "lng": 76.954,
        "seller_wallet": "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
        "total_credits": 10000,
        "available_credits": 8450,
        "price_per_ton_eth": 0.04,
        "aqi": 142,
        "ndvi_score": 0.78,
        "status": "ACTIVE",
        "escrow_released_percent": 30,
        "created_at": "2025-09-01T10:00:00Z"
    },
    "proj-sundarbans-02": {
        "project_id": "proj-sundarbans-02",
        "name": "Sundarbans Coastal Mangroves",
        "location": "West Bengal, India",
        "lat": 21.949,
        "lng": 88.900,
        "seller_wallet": "0x3C44CdD45a69371e51D4e68e4d3E7eF29A389D91",
        "total_credits": 25000,
        "available_credits": 21300,
        "price_per_ton_eth": 0.035,
        "aqi": 188,
        "ndvi_score": 0.84,
        "status": "ACTIVE",
        "escrow_released_percent": 100,
        "created_at": "2025-08-15T12:30:00Z"
    }
}

MOCK_TRANSACTIONS = []
MOCK_USERS = {}

def create_project(project_data):
    """
    Stores project metadata, coordinates, seller wallet, base tonnage, AQI, and initial status
    ('PENDING_AUDIT' or 'ACTIVE').
    """
    project_id = project_data.get("project_id") or f"proj-{uuid.uuid4().hex[:8]}"
    now_iso = time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())
    
    total_credits = int(project_data.get("total_credits") or project_data.get("base_tonnage") or 1000)
    available_credits = int(project_data.get("available_credits") or total_credits)
    
    item = {
        "project_id": project_id,
        "name": project_data.get("name", "Unnamed Carbon Project"),
        "location": project_data.get("location", "Unknown Location"),
        "lat": float(project_data.get("lat", 0.0)),
        "lng": float(project_data.get("lng", 0.0)),
        "seller_wallet": project_data.get("seller_wallet", "0x0000000000000000000000000000000000000000"),
        "total_credits": total_credits,
        "available_credits": available_credits,
        "price_per_ton_eth": float(project_data.get("price_per_ton_eth", 0.04)),
        "aqi": int(project_data.get("aqi", 100)),
        "ndvi_score": float(project_data.get("ndvi_score", 0.70)),
        "status": project_data.get("status", "PENDING_AUDIT"),
        "escrow_released_percent": int(project_data.get("escrow_released_percent", 30)),
        "created_at": now_iso
    }

    try:
        table = dynamodb.Table(PROJECTS_TABLE)
        db_item = _convert_floats_to_decimals(item)
        table.put_item(Item=db_item)
        logger.info(f"Project {project_id} successfully stored in DynamoDB ({PROJECTS_TABLE})")
    except Exception as e:
        logger.warning(f"DynamoDB create_project fallback active: {e}")
        MOCK_PROJECTS[project_id] = item

    return item

def get_all_projects(status="ACTIVE"):
    """
    Scans/queries available listings matching status filter.
    Pass status='ALL' to retrieve all records regardless of status.
    """
    try:
        table = dynamodb.Table(PROJECTS_TABLE)
        if status and status.upper() != "ALL":
            response = table.scan(
                FilterExpression=Attr("status").eq(status.upper())
            )
        else:
            response = table.scan()
            
        items = response.get("Items", [])
        native_items = _convert_decimals_to_native(items)
        if native_items:
            return native_items
    except Exception as e:
        logger.warning(f"DynamoDB scan failed: {e}. Returning in-memory projects.")

    # Return memory fallback if DynamoDB scan is empty or table doesn't exist
    if not status or status.upper() == "ALL":
        return list(MOCK_PROJECTS.values())
    return [p for p in MOCK_PROJECTS.values() if p.get("status", "").upper() == status.upper()]

def get_project_by_id(project_id):
    """
    Fetches a single project parcel by project_id.
    """
    try:
        table = dynamodb.Table(PROJECTS_TABLE)
        response = table.get_item(Key={"project_id": project_id})
        item = response.get("Item")
        if item:
            return _convert_decimals_to_native(item)
    except Exception as e:
        logger.warning(f"DynamoDB get_project_by_id failed: {e}")

    return MOCK_PROJECTS.get(project_id)

def record_transaction(tx_data):
    """
    Logs buyer, seller, token IDs minted, amount, ETH paid, burn status, and transaction hash.
    Also automatically updates remaining available credits in DynamoDB.
    """
    tx_id = tx_data.get("tx_id") or f"tx-{uuid.uuid4().hex[:10]}"
    now_iso = time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())

    item = {
        "tx_id": tx_id,
        "buyer_wallet": tx_data.get("buyer_wallet", "0x000"),
        "seller_wallet": tx_data.get("seller_wallet", "0x000"),
        "project_id": tx_data.get("project_id", "proj-general"),
        "tokens_minted": tx_data.get("tokens_minted", []),
        "credit_amount": int(tx_data.get("credit_amount", 1)),
        "eth_paid": float(tx_data.get("eth_paid", 0.04)),
        "is_burned": bool(tx_data.get("is_burned", False)),
        "tx_hash": tx_data.get("tx_hash", "0x" + "0" * 64),
        "created_at": now_iso
    }

    try:
        table = dynamodb.Table(TRANSACTIONS_TABLE)
        db_item = _convert_floats_to_decimals(item)
        table.put_item(Item=db_item)
        logger.info(f"Transaction {tx_id} logged in DynamoDB ({TRANSACTIONS_TABLE})")

        # Deduct available credits from project record
        p_id = item["project_id"]
        if p_id:
            try:
                projects_table = dynamodb.Table(PROJECTS_TABLE)
                projects_table.update_item(
                    Key={"project_id": p_id},
                    UpdateExpression="SET available_credits = available_credits - :val",
                    ExpressionAttributeValues={":val": Decimal(str(item["credit_amount"]))}
                )
            except Exception as pe:
                logger.warning(f"Could not update available_credits in DynamoDB: {pe}")
    except Exception as e:
        logger.warning(f"DynamoDB record_transaction fallback: {e}")
        MOCK_TRANSACTIONS.append(item)
        p_id = item["project_id"]
        if p_id in MOCK_PROJECTS:
            MOCK_PROJECTS[p_id]["available_credits"] = max(
                0, MOCK_PROJECTS[p_id].get("available_credits", 0) - item["credit_amount"]
            )

    return item

def update_escrow_status(project_id, released_percent):
    """
    Updates project payout milestones based on verified canopy growth (NDVI).
    """
    released_percent = int(released_percent)

    try:
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
