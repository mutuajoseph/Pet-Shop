from sqlalchemy.orm import Session
from fastapi import HTTPException

# import model
from models.product import ProductModel

# import schema
from schemas.product_schema import Product_Create, Product

class Product_service:

    @staticmethod
    def get_all_products(db: Session):
        return db.query(ProductModel).all()

    @staticmethod
    def get_product(product_id: int, db: Session):
        
        # check if product exists
        the_product = db.query(ProductModel).filter(ProductModel.id == product_id).first()

        if not the_product:
            raise HTTPException(status_code=404, detail="Product does not exist")

        return the_product

    @staticmethod
    def create_product(product: Product_Create, db: Session):

        # check if product exists
        the_product = db.query(ProductModel).filter(ProductModel.product_name == product.product_name).first()

        if the_product:
            raise HTTPException(status_code=400, detail="Product already exists")

        # add the product to the db
        new_product = ProductModel(**product.dict())
        db.add(new_product)
        db.commit()
        db.refresh(new_product)

    @staticmethod
    def update_product():
        pass

    @staticmethod
    def delete_product():
        pass