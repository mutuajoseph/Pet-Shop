
from typing import List, Optional
from pydantic import BaseModel
from datetime import datetime

# import schema
from schemas.image_schema import Image_Out
from schemas.inventory_schema import Inventory_Out


class Product(BaseModel):
    product_category_id: int
    product_brand_id: int
    product_name: str
    product_description: str
    price: float
    rating: float
    num_reviews: int

class Product_Create(Product):
    pass

class Product_Out(Product):
    id: int
    created_at: Optional[datetime]
    images: List[Image_Out]
    inventories: List[Inventory_Out]

    class Config: 
        orm_mode = True

