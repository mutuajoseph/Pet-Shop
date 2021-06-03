from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os

# from db.settings import settings

# Database URL
# SQLALCHEMY_DATABASE_URL = settings.SQLALCHEMY_DATABASE_URL

# postgres db
SQLALCHEMY_DATABASE_URL = os.environ.get("SQLALCHEMY_DATABASE_URL") or "postgresql://postgres:Jose@1234@localhost:5432/petshop"

# SQLALCHEMY ENGINE
engine = create_engine(
    SQLALCHEMY_DATABASE_URL
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base Class
Base = declarative_base()

def get_db():
    db = SessionLocal()
    try: 
        yield db
    finally:
        db.close()