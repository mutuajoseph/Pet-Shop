from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DateTime
from sqlalchemy.orm import relationship

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