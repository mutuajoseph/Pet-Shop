from sqlalchemy.orm import Session
from fastapi import HTTPException

# import models
from models.product_brand import ProductBrand
from models.product import ProductModel

# import schemas
from schemas.brand_schema import Brand_Create

class Product_brand_service:

    @staticmethod
    def get_all_product_brands(db:Session):
        return db.query(ProductBrand).all()

    @staticmethod
    def get_product_brand(db:Session, brand_id:int):
        return db.query(ProductBrand).filter(ProductBrand.id == brand_id).first()

    @staticmethod
    def create_product_brand(db:Session, brand: Brand_Create):
        the_brand = db.query(ProductBrand).filter(ProductBrand.brand_name == brand.brand_name).first()

        if the_brand:
            raise HTTPException(status_code=400, detail="Product Brand already exists!")

        new_brand = ProductBrand(
            brand_name = brand.brand_name
        )
        db.add(new_brand)
        db.commit()
        db.refresh(new_brand)

        return new_brand

    @staticmethod
    def update_product_brand(db:Session):
        pass

    @staticmethod
    def delete_product_brand(db:Session):
        pass

