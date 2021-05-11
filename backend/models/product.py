from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DateTime, Float
from sqlalchemy.orm import relationship

from db.config import Base
from sqlalchemy import func

class ProductModel(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True)
    product_name = Column(String, nullable=False)
    product_description = Column(String, nullable=False)
    price = Column(Float, nullable=False)
    rating = Column(Float, nullable=False)
    image = Column(String, nullable=False)
    brand = Column(String, nullable=False)
    num_reviews = Column(Integer, nullable=False)
    count_in_stock = Column(Integer, nullable=False)
    created_at = Column(DateTime(timezone=True), default=func.now(), nullable=False)

    # relationship
    product_category_id = Column(Integer, ForeignKey("product_categories.id"))
    product_category = relationship("Product_category", back_populates="products")


