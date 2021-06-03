from re import A
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List

# import the db 
from db.config import get_db

# import schemas
from schemas.brand_schema import Brand_Create, Brand_Out
from schemas.product_schema import Product_Create, Product_Out

# import services
from services.product_brand_service import Product_brand_service

# create the router instance
router = APIRouter()

@router.get('',
    summary='returns a list of all product brands',
    response_model = List[Brand_Out],
    response_description = 'all product brands',
    status_code = 200
)
async def fetch_all_product_brands(db:Session = Depends(get_db) ):
    return Product_brand_service.get_all_product_brands(db=db)

@router.get('/{brand_id}',
    summary='returns a single product brand',
    response_model = Brand_Out,
    response_description = 'a product brand',
    status_code = 200
)
async def fetch_a_single_product_brand(brand_id: int, db:Session = Depends(get_db)):
    return Product_brand_service.get_product_brand(db=db, brand_id=brand_id)

@router.post('', 
    summary='creates a new single product brand',
    response_model = Brand_Out,
    response_description = 'a product brand',
    status_code = 201
)
async def add_new_brand(brand:Brand_Create, db:Session = Depends(get_db)):
    return Product_brand_service.create_product_brand(db=db, brand=brand)

@router.put('/{brand_id}', 
    summary='updates a product brand that matches the given id',
    response_model = Brand_Out,
    response_description = 'a product brand',
    status_code = 200
)
async def edit_product_brand(brand_id: int, db:Session = Depends(get_db)):
    return Product_brand_service.update_product_brand(db=db, brand_id=brand_id)

@router.delete('/{brand_id}',
    summary='deletes a product brand that matches the given id',
    response_model = Brand_Out,
    response_description = 'a product brand',
    status_code = 200
)
async def remove_product_brand(brand_id: int, db: Session = Depends(get_db)):
    return Product_brand_service.delete_product_brand(db=db, brand_id=brand_id)