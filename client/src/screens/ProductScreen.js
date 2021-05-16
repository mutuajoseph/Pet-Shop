import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Row, Col, Image } from 'react-bootstrap';
import { RiShoppingCartLine } from 'react-icons/all';

// import image
import SingleProduct from '../assets/single_product.jpg';
import Features from '../components/Features';
import Rating from '../components/Rating';

const ProductScreen = () => {
  const [toggle, setToggle] = useState('description');

  return (
    <div>
      <Header />
      <div className='container px-5'>
        <main>
          <Row className="mt-4">
            <Col>
              <Image
                src={SingleProduct}
                alt='single_product'
                className='product_image'
              />
            </Col>
            <Col>
              <h1 className='product-title'>Modern Dog Colar</h1>
              <div className='single-product-card'>
                <div className='single-product-row'>
                  <div className='single-product-col'>
                    <h5>$15.00</h5>
                  </div>
                  <div className='single-product-col'>
                    <Rating />
                  </div>
                </div>
              </div>
              <p className='text-justify pr-5 mt-3'>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.{' '}
              </p>

              <div className='mt-5'>
                <button
                  type='button'
                  className='btn btn-primary align-items-center'
                >
                  Add to Cart{' '}
                  <RiShoppingCartLine
                    className='ml-2'
                    style={{ fontSize: '1rem' }}
                  />
                </button>
                <button
                  type='button'
                  className='btn btn-outline-dark ml-4 align-items-center'
                  data-bs-dismiss='modal'
                >
                  Wishlist
                </button>
              </div>
            </Col>
          </Row>
          <div className='mt-5'>
            <div className='row-wrapper'>
              <div className='column-wrapper'>
                <h6 onClick={() => setToggle('description')} className="active">Description</h6>
              </div>
              <div className='column-wrapper'>
                <h6 onClick={() => setToggle('additionalInfo')}>
                  Additional Information
                </h6>
              </div>
              <div className='column-wrapper'>
                <h6 onClick={() => setToggle('reviews')}>Reviews</h6>
              </div>
            </div>

            {/* description */}
            {toggle === 'description' ? (
              <Row className='mt-5'>
                <Col md={7} className='column-wrapper'>
                  <p>
                    t is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English.{' '}
                  </p>
                  <p>
                    t is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English.{' '}
                  </p>
                </Col>
                <Col>
                  <Image
                    src={SingleProduct}
                    alt='single product image'
                    width='300'
                    height='200'
                  />
                </Col>
              </Row>
            ) : toggle === 'additionalInfo' ? (
              <Row className='mt-5 px-3'>additionalInfo</Row>
            ) : toggle === 'reviews' ? (
              <div className='mt-5'>Reviews</div>
            ) : (
              <div className='mt-5'>No results</div>
            )}
            {/* you might also like  */}
            <Features />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default ProductScreen;
