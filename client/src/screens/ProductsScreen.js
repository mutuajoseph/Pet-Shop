import React from 'react';
// import { Container } from 'react-bootstrap';

// import components
import Header from '../components/Header';
import Footer from '../components/Footer';

// import images
import product_1 from '../assets/chock_chain.jpeg';
import { Link } from 'react-router-dom';

const ProductsScreen = () => {
  return (
    <div>
      <Header />
      <main>
        <div className='container'>
          {/* heading */}
          {/* TODO: BREADCRUMS */}
          <p className='text-center mt-2'>breadcrumbs</p>
          <h1 className='text-center product-heading'>Pet Accessories</h1>
          <p className='text-center mt-4'>
            lorem ipsum lorem ipsum lorem ipsum
          </p>

          {/* product display section */}
          <div className='products-row'>
            <div className='products-sidebar mt-2 mb-2'>
              {/* category list with category items */}
              <h6 className="mb-4">Categories</h6>
              <ul className='list-group'>
                <li
                  className='list-group-item d-flex justify-content-between align-items-center'
                  style={{ width: '200px' }}
                >
                  Colars
                  <span className='badge bg-primary text-light rounded-pill'>
                    14
                  </span>
                </li>
                <li
                  className='list-group-item d-flex justify-content-between align-items-center'
                  style={{ width: '200px' }}
                >
                  Bite suites
                  <span className='badge bg-primary text-light rounded-pill'>
                    2
                  </span>
                </li>
              </ul>
              {/* brands */}

              <h6 className="mt-4">Brands</h6>
              <div class='form-check'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  value=''
                  id='flexCheckDefault'
                />
                <label class='form-check-label' for='flexCheckDefault'>
                  Default checkbox
                </label>
              </div>
              <div class='form-check my-2'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  value=''
                  id='flexCheckDefault'
                />
                <label class='form-check-label' for='flexCheckDefault'>
                  Default checkbox
                </label>
              </div>
              <div class='form-check my-2'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  value=''
                  id='flexCheckDefault'
                />
                <label class='form-check-label' for='flexCheckDefault'>
                  Default checkbox
                </label>
              </div>
              <div class='form-check my-2'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  value=''
                  id='flexCheckDefault'
                />
                <label class='form-check-label' for='flexCheckDefault'>
                  Default checkbox
                </label>
              </div>
            </div>
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsScreen;
