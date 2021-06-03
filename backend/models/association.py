from sqlalchemy import Column, ForeignKey, Integer
from sqlalchemy.orm import relationship

from db.config import Base
from sqlalchemy import func

# association table between categories and brands
class Association(Base):
    __tablename__ = "association"
    product_brand_id =  Column(Integer, ForeignKey("product_brands.id"), primary_key=True)
    product_category_id = Column(Integer, ForeignKey("product_categories.id"), primary_key=True)

    # relationship
    category = relationship("Product_category", back_populates="brands")
    brand = relationship("ProductBrand", back_populates="categories")