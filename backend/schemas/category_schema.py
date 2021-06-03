from typing import List, Optional
from pydantic import BaseModel
from datetime import datetime

# import schemas
from schemas import product_schema

class Category(BaseModel):
    category_name: str
    category_description: str


class Category_Create(Category):
    pass

class Category_Out(Category):
    id: int
    created_at: Optional[datetime]
    products: List[product_schema.Product_Out]

    class Config: 
        orm_mode = True
    