from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql.schema import Table

from db.config import Base
from sqlalchemy import func

class Product_category(Base):
    __tablename__ = "product_categories"

    id = Column(Integer, primary_key=True)
    category_name = Column(String, nullable=False)
    category_description = Column(String, nullable=True)
    created_at = Column(DateTime(timezone=True), default=func.now(), nullable=False)

    # relationship
    products = relationship("ProductModel", back_populates="product_category")
    brands = relationship("Association", back_populates="category")

# association table between categories and brands
class Association(Base):
    __tablename__ = "association"

    product_category_id = Column(Integer, ForeignKey("product_categories.id"), primary_key=True),
    product_brand_id =  Column(Integer, ForeignKey("product_brands.id"), primary_key=True)

    # relationship
    category = relationship("Product_category", back_populates="brands")
    brand = relationship("ProductBrand", back_populates="categories")
