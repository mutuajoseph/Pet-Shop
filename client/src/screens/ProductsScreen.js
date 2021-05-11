import React from 'react';
import { Container } from 'react-bootstrap';

// import components
import Header from '../components/Header';
import Footer from '../components/Footer';

// import images
import product_1 from '../assets/chock_chain.jpeg';
import product_2 from '../assets/colar.jpeg';
import product_4 from '../assets/harness.jpeg';
import { Link } from 'react-router-dom';

const ProductsScreen = () => {
  return (
    <div>
      <Header />
      <main>
        <Container fluid className='px-5'>
          {/* heading */}
          {/* TODO: BREADCRUMS */}
          <p className='text-center mt-2'>breadcrumbs</p>
          <h1 className='text-center product-heading'>Pet Accessories</h1>
          <p className='text-center mt-4'>
            lorem ipsum lorem ipsum lorem ipsum
          </p>

          {/* product display section */}
          <div className='products-row'>
            <div className='products-sidebar'> sidebar</div>
            <div className='products-main'>
              <div className='items-row'>
                <div className='column mt-2 mb-2'>
                  <div className='card' style={{ width: '12.5rem' }}>
                    <img
                      className='card-img-top'
                      src={product_1}
                      alt='Card cap'
                    />
                    <Link to='products/1'>
                      <div className='card-body'>
                        <h6 className='card-title'>Card title</h6>
                        <p className='card-text'>lorem ipsum</p>
                        <p className='card-text'> $15.00</p>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className='column mt-2 mb-2'>
                  <div className='card' style={{ width: '12.5rem' }}>
                    <img
                      className='card-img-top'
                      src={product_1}
                      alt='Card cap'
                    />
                    <Link to='products/10'>
                      <div className='card-body'>
                        <h6 className='card-title'>Card title</h6>
                        <p className='card-text'>lorem ipsum</p>
                        <p className='card-text'> $15.00</p>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className='column mt-2 mb-2'>
                  <div className='card' style={{ width: '12.5rem' }}>
                    <img
                      className='card-img-top'
                      src={product_1}
                      alt='Card cap'
                    />
                    <Link to='products/12'>
                      <div className='card-body'>
                        <h6 className='card-title'>Card title</h6>
                        <p className='card-text'>lorem ipsum</p>
                        <p className='card-text'> $15.00</p>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className='column mt-2 mb-2'>
                  <div className='card' style={{ width: '12.5rem' }}>
                    <img
                      className='card-img-top'
                      src={product_1}
                      alt='Card cap'
                    />
                    <Link to='products/14'>
                      <div className='card-body'>
                        <h6 className='card-title'>Card title</h6>
                        <p className='card-text'>lorem ipsum</p>
                        <p className='card-text'> $15.00</p>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className='column mt-2 mb-2'>
                  <div className='card' style={{ width: '12.5rem' }}>
                    <img
                      className='card-img-top'
                      src={product_1}
                      alt='Card cap'
                    />
                    <Link to='products/19'>
                      <div className='card-body'>
                        <h6 className='card-title'>Card title</h6>
                        <p className='card-text'>lorem ipsum</p>
                        <p className='card-text'> $15.00</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsScreen;
