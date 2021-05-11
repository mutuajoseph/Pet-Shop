from sqlalchemy.orm import Session
from fastapi import HTTPException

# import model
from models.product_category import Product_category
from models.product import ProductModel

# import schema
from schemas.product_category_schema import Product_Category_Create
from schemas.product_schema import Product_Create

class Product_category_service:

    @staticmethod
    def get_all_product_categories(db: Session):
        return db.query(Product_category).all()

    @staticmethod
    def get_product_category(db: Session, category_id: int):
        return db.query(Product_category).filter(Product_category.id == category_id).first()
        

    @staticmethod
    def create_product_category(db: Session, category: Product_Category_Create):

        # check if category exists
        the_category = db.query(Product_category).filter(Product_category.category_name == category.category_name).first()

        if the_category:
            raise HTTPException(status_code=400, detail="Product category already exists")

        # add the product category to the database

        new_category = Product_category(
            category_name = category.category_name,
            category_description = category.category_description
        )
        db.add(new_category)
        db.commit()
        db.refresh(new_category)

        return new_category
    
    @staticmethod
    def update_product_category(): 
        pass

    @staticmethod
    def delete_product_category():
        pass

    # add a new product
    @staticmethod
    def create_new_product(db:Session, category_id: int, product: Product_Create):

        # check if product exists
        the_product = db.query(ProductModel).filter(ProductModel.product_name == product.product_name).first()

        if the_product:
            raise HTTPException(status_code=400, detail="Product already exists")

        # add product to db
        new_product = ProductModel(
            product_category_id = category_id,
            product_name =  product.product_name,
            product_description = product.product_description,
            price = product.price,
            rating = product.rating,
            image = product.image,
            brand = product.brand,
            num_reviews = product.num_reviews,
            count_in_stock = product.count_in_stock
        )
        db.add(new_product)
        db.commit()
        db.refresh(new_product)

        return new_product

