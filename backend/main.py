from fastapi import FastAPI

# import the db
from db.config import Base, engine

# import models
from models.product_category import Product_category
from models.product import ProductModel
from models.association import Association
from models.product_brand import ProductBrand
from models.product_inventory import ProductInventory
from models.product_image import ProductImage


# create the tables
Base.metadata.create_all(bind=engine)

# drop tables
# Base.metadata.drop_all(bind=engine)

# import routes
from routes import product_category_route, product_route, product_brand_route

app = FastAPI(
    title="PetShop API",
    description="An online store that handles pet accessories operations",
    version="1.0.0",
    redoc_url="/"
)

app.include_router(
    product_category_route.router,
    prefix='/product-categories',
    tags=['Product Category Operations'],
    responses={
        200:{'description':'Ok'}, 
        201:{'description':'Created'}, 
        400:{'description':'Bad Request'},
        401:{'description':'Unauthorized'}}
)

app.include_router(
    product_brand_route.router,
    prefix='/product-brands',
    tags=['Product Brand Operations'],
    responses={
        200:{'description':'Ok'}, 
        201:{'description':'Created'}, 
        400:{'description':'Bad Request'},
        401:{'description':'Unauthorized'}
    }
)

app.include_router(
    product_route.router,
    prefix='/products',
    tags=['Product Operations'],
    responses={
        200:{'description':'Ok'}, 
        201:{'description':'Created'}, 
        400:{'description':'Bad Request'},
        401:{'description':'Unauthorized'}}
)