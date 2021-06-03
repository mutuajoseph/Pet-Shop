from pydantic import BaseSettings
import os

class Settings(BaseSettings):
    SQLALCHEMY_DATABASE_URL: str = ""

    class Config:
        env_file = ".env"


settings = Settings()