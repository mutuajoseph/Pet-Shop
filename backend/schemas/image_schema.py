from typing import List, Optional
from pydantic import BaseModel
from datetime import datetime

from schemas import product_schema

class Image_schema(BaseModel):
    image_link: str

class Image_Create(Image_schema):
    pass

class Image_Out(Image_schema):
    id: int
    # product: product_schema.Product_Out
    created_at: Optional[datetime]
    
    class Config:
        orm_mode = True