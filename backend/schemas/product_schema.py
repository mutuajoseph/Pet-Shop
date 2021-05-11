from typing import List, Optional
from pydantic import BaseModel
from datetime import datetime

# import schema
# from schemas.product_category_schema import Product_category_Out

class Product(BaseModel):
    product_name: str
    product_description: str
    price: float
    rating: float
    image: str
    brand: str
    num_reviews: int
    count_in_stock: int

class Product_Create(Product):
    pass

class Product_Out(Product):
    id: int
    created_at: Optional[datetime]
    # product_category: Product_category_Out

    class Config: 
        orm_mode = True