from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List

# import the db
from db.config import get_db

# import service
from services.product_service import Product_service

# import schema
from schemas.product_schema import Product, Product_Out, Product_Create

# create the router instance
router = APIRouter()

@router.get('',
    summary='returns a list of all products',
    response_model = List[Product_Out],
    response_description = 'a list of products',
    status_code = 200
)
async def fetch_all_products(db: Session = Depends(get_db)):
    return Product_service.get_all_products(db=db)

@router.get('/{product_id}',
    summary='returns a product that matches the given id',
    response_model = Product_Out,
    response_description = 'a product',
    status_code = 200
)
async def fetch_a_single_product(product_id: int, db: Session = Depends(get_db)):
    return Product_service.get_product(db=db, product_id=product_id)

# @router.post('',
#     summary='creates a new product',
#     response_model = Product_Out,
#     response_description = 'a new product',
#     status_code = 201
# )
# async def add_new_product(product: Product_Create, db: Session = Depends(get_db)):
#     return Product_service.create_product(product=product, db=db)

@router.put('/{product_id}',
    summary='updates a product that matches the given id',
    response_model = Product_Out,
    response_description = 'a product',
    status_code = 200
)
async def edit_product(product_id: int, db: Session = Depends(get_db)):
    return Product_service.update_product(db=db, product_id=product_id)

@router.delete('/{product_id}',
    summary='deletes a product that matches the given id',
    response_model = Product_Out,
    response_description = 'a product',
    status_code = 200
)
async def remove_product(product_id = int, db: Session = Depends(get_db)):
    return Product_service.delete_product(db=db, product_id=product_id)
