from typing import List, Optional
from pydantic import BaseModel
from datetime import datetime

# import schemas
from schemas.product_schema import Product_Out

class Product_category(BaseModel):
    category_name: str
    category_description: str


class Product_Category_Create(Product_category):
    pass

class Product_category_Out(Product_category):
    id: int
    created_at: Optional[datetime]
    products: List[Product_Out]

    class Config: 
        orm_mode = True
    