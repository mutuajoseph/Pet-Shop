from datetime import time
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DateTime
from sqlalchemy.orm import relationship

from db.config import Base
from sqlalchemy import func

class ProductInventory(Base):
    __tablename__ = "product_inventories"

    id = Column(Integer, primary_key=True)
    quantity = Column(Integer, nullable=False)
    created_at = Column(DateTime(timezone=True), default=func.now(), nullable=False)
    updated_at = Column(DateTime(timezone=True), nullable=True)

    # relationship
    product_id = Column(Integer, ForeignKey("products.id"))
    product = relationship("ProductModel", back_populates="inventories")
