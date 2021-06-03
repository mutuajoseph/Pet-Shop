from sqlalchemy.orm import Session
from fastapi import HTTPException
from typing import List

# import model
from models.product import ProductModel
from models.product_inventory import ProductInventory
from models.product_image import ProductImage

# import schema
from schemas.product_schema import Product, Product_Create
from schemas.image_schema import Image_Create
from utils import upload_images


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
        new_product = ProductModel(
            product_category_id = product.product_category_id,
            product_brand_id = product.product_brand_id,
            product_name =  product.product_name,
            product_description = product.product_description,
            price = product.price,
            rating = product.rating,
            num_reviews = product.num_reviews,
        )
        db.add(new_product)
        db.commit()
        db.refresh(new_product)
        return new_product

    @staticmethod
    def add_product_inventory(product_id: int, inventory: ProductInventory, db: Session):
        # check if the product exists
        the_product = db.query(ProductModel).filter(ProductModel.id == product_id).first()

        if not the_product:
            raise HTTPException(status_code=400, detail="Product does not exist")

        # add the product inventory to db
        new_inventory = ProductInventory(
            product_id = product_id,
            quantity = inventory.quantity
        )
        db.add(new_inventory)
        db.commit()
        db.refresh(new_inventory)

        return new_inventory

    @staticmethod
    def update_product():
        pass

    @staticmethod
    def delete_product():
        pass

    # add product images
    @staticmethod
    def add_image(product_id: int, images: Image_Create, db: Session):
        
        # check if the product exists
        the_product = db.query(ProductModel).filter(ProductModel.id == product_id).first()

        if not the_product:
            raise HTTPException(status_code=400, detail="Product does not exist")

        # loop over the images
        # upload every image to cloudinary 
        # get the secure url of every image and create an image object (secure url and product id)
        # save to db
        for image in images:
            result = upload_images.add_image_to_cloud(image.file)
            # print(result['secure_url'])
            
            new_image = ProductImage(
                product_id = product_id,
                image_link = result['secure_url']    
            )

            db.add(new_image)
            db.commit()
            db.refresh(new_image)

            return db.query(ProductModel).filter(ProductModel.id == product_id).first()
            


            

