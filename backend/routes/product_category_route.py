from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List

# import the db
from db.config import get_db

# import schemas
from schemas.product_category_schema import Product_Category_Create, Product_category_Out, Product_category
from schemas.product_schema import Product_Create, Product_Out

# import services
from services.product_category_service import Product_category_service

# create the router instance
router = APIRouter()

@router.get('',
    summary='returns a list of all product categories',
    response_model = List[Product_category_Out],
    response_description = 'all product categories',
    status_code = 200
)
async def fetch_all_product_categories(db:Session = Depends(get_db)):
    return Product_category_service.get_all_product_categories(db=db)

@router.get('/{category_id}',
    summary='returns a single product_category that matches the given id',
    response_model = Product_category_Out,
    response_description = 'a product category',
    status_code = 200
)
async def fetch_a_single_product_category(category_id: int, db:Session = Depends(get_db)):
    return Product_category_service.get_product_category(db=db, category_id=category_id)

@router.post('',
    summary='creates a new product category',
    response_model = Product_category_Out,
    response_description = 'a new product category',
    status_code = 201
)
async def add_new_category(category: Product_Category_Create, db:Session = Depends(get_db)):
    return Product_category_service.create_product_category(db=db, category=category)

@router.put('/{category_id}',
    summary='updates a product category that matches the given id',
    response_model = Product_category_Out,
    response_description = 'a product category',
    status_code = 200
)

async def edit_product_category(category_id: int, db: Session = Depends(get_db)):
    pass

@router.delete('/{category_id}',
    summary='removes a product category that matches the given id',
    response_model = Product_category_Out,
    response_description = 'a product category',
    status_code = 200
)
async def delete_product_category(category_id: int, db: Session = Depends(get_db)):
    pass

# Add a new product

@router.post('/{category_id}/product',
    summary='creates a new product to a product category that matches the given id',
    response_model = Product_Out,
    response_description = 'a new product',
    status_code = 201
)
async def add_new_product(category_id: int, product: Product_Create, db: Session = Depends(get_db)):
    return Product_category_service.create_new_product(category_id=category_id, product=product, db=db)

