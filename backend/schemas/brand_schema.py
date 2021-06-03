from typing import List, Optional
from pydantic import BaseModel
from datetime import datetime

# import the schemas
from schemas import product_schema

class Brand(BaseModel):
    brand_name: str

class Brand_Create(Brand):
    pass

class Brand_Out(Brand):
    id: int
    created_at: Optional[datetime]
    products: List[product_schema.Product_Out]

    class Config:
        orm_mode = True