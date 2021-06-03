from datetime import time
from sqlalchemy import Column, ForeignKey, Integer
from sqlalchemy.orm import relationship
from sqlalchemy.sql.sqltypes import DateTime, String

from db.config import Base
from sqlalchemy import func

class ProductImage(Base):
    __tablename__ = "product_images"

    id = Column(Integer, primary_key=True)
    image_link = Column(String, nullable=False)
    created_at= Column(DateTime(timezone=True), default=func.now(), nullable=False)

    # relationship
    product_id = Column(Integer, ForeignKey("products.id"))
    product = relationship("ProductModel", back_populates="images")
