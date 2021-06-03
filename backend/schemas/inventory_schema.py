from typing import List, Optional
from pydantic import BaseModel
from datetime import datetime

class Inventory(BaseModel):
    quantity: int

class Inventory_Create(Inventory):
    pass

class Inventory_Out(Inventory):
    id: int
    created_at: Optional[datetime]
    updated_at: Optional[datetime]

    class Config:
        orm_mode = True