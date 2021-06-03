from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql.expression import null


from db.config import Base
from sqlalchemy import func

class ProductBrand(Base):
    __tablename__ = "product_brands"

    id = Column(Integer, primary_key=True)
    brand_name = Column(String, nullable=False)
    created_at = Column(DateTime(timezone=True), default=func.now(), nullable=False)

    # relationship
    products = relationship("ProductModel", back_populates="brand")
    categories = relationship("Association", back_populates="brand")