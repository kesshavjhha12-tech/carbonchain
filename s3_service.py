

import os
import re
import logging

logger = logging.getLogger("s3_service")
logger.setLevel(logging.INFO)

S3_BUCKET = os.environ.get("S3_BUCKET_NAME", "carbonchain-evidence-vault")
AWS_REGION = os.environ.get("AWS_REGION", "us-east-1")

try:
    import boto3
    from botocore.config import Config
    from botocore.exceptions import ClientError
    s3_client = boto3.client(
        "s3",
        region_name=AWS_REGION,
        config=Config(signature_version="s3v4")
    )
except Exception as e:
    logger.warning(f"boto3 S3 client unavailable or not installed: {e}")
    s3_client = None


def generate_presigned_upload_url(file_name, file_type, folder="evidence", expiration=3600):
    """
    Returns a secure presigned PUT URL enabling clients to upload land titles,
    drone imagery, and verification certificates directly to S3 without passing
    massive payloads through Lambda.
    """
    clean_name = os.path.basename(file_name)
    if not re.match(r'^[\w\-. ]+$', clean_name):
        return {
            "status": "ERROR",
            "error": "Invalid filename: only alphanumeric, dash, dot, underscore, and space characters are allowed."
        }
    key = f"{folder}/{clean_name}"

    try:
        if s3_client is None:
            raise RuntimeError("s3_client is not configured")

        upload_url = s3_client.generate_presigned_url(
            "put_object",
            Params={
                "Bucket": S3_BUCKET,
                "Key": key,
                "ContentType": file_type
            },
            ExpiresIn=expiration
        )

        public_url = f"https://{S3_BUCKET}.s3.{AWS_REGION}.amazonaws.com/{key}"
        logger.info(f"Generated presigned upload URL for S3 key: {key}")
        return {
            "status": "SUCCESS",
            "upload_url": upload_url,
            "file_key": key,
            "public_url": public_url,
            "bucket": S3_BUCKET,
            "expires_in_seconds": expiration,
            "is_mock": False
        }
    except Exception as e:
        logger.warning(f"Could not generate S3 presigned URL ({e}). Returning direct upload mock.")
        mock_url = f"https://mock-s3.carbonchain.io/{S3_BUCKET}/{key}"
        return {
            "status": "MOCK_SUCCESS",
            "upload_url": mock_url,
            "file_key": key,
            "public_url": mock_url,
            "bucket": S3_BUCKET,
            "expires_in_seconds": expiration,
            "is_mock": True
        }


def upload_audit_report(file_bytes, key, content_type="application/pdf"):
    """
    Server-side upload helper for compliance audits (e.g. BRSR Principle 6 reports,
    verifications, and retirement proofs). Uploads bytes directly to the evidence vault.
    """
    if not key.startswith("audits/") and not key.startswith("evidence/"):
        key = f"audits/{key}"

    try:
        if s3_client is None:
            raise RuntimeError("s3_client is not configured")

        s3_client.put_object(
            Bucket=S3_BUCKET,
            Key=key,
            Body=file_bytes,
            ContentType=content_type
        )

        public_url = f"https://{S3_BUCKET}.s3.{AWS_REGION}.amazonaws.com/{key}"
        logger.info(f"Successfully uploaded audit report to S3: {key}")
        return {
            "status": "SUCCESS",
            "file_key": key,
            "public_url": public_url,
            "bucket": S3_BUCKET,
            "content_type": content_type,
            "is_mock": False
        }
    except Exception as e:
        logger.warning(f"Failed to upload audit report to S3 ({e}). Returning fallback response.")
        return {
            "status": "MOCK_SUCCESS",
            "file_key": key,
            "public_url": f"https://mock-s3.carbonchain.io/{S3_BUCKET}/{key}",
            "bucket": S3_BUCKET,
            "content_type": content_type,
            "is_mock": True
        }


def upload_file_bytes(file_bytes, key, content_type="application/pdf"):
    """
    Directly uploads small assets (like server-generated verification reports) to S3
    and returns the public or presigned GET URL.
    """
    return upload_audit_report(file_bytes, key, content_type=content_type)
