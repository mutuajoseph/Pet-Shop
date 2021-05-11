import React from 'react';
import {Link} from 'react-router-dom'

// import images
import product_1 from '../assets/chock_chain.jpeg';
import product_2 from '../assets/colar.jpeg';
import product_4 from '../assets/harness.jpeg';

const Products = () => {
  return (
    <div>
      <section className='products-section'>
        <h5 className='text-center mb-5'>Featured Products</h5>
        {/* TODO: CAROUSEL */}
        <div className="product-row">
          <div className="column">
            <div className='card' style={{ width: '12.5rem' }}>
              <img className='card-img-top' src={product_1} alt='Card cap' />
              {/* <div className="hidden-section">
                <p>Hello Text</p>
                <button>shopping</button>
              </div> */}
              <Link to="products/1">
                <div className='card-body'>
                  <h6 className='card-title'>Card title</h6>
                  <p className='card-text'>lorem ipsum</p>
                  <p className='card-text'> $15.00</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="column">
            <div className='card' style={{ width: '12.5rem' }}>
              <img className='card-img-top' src={product_2} alt='Card cap' />
              <Link to="products/2">
                <div className='card-body'>
                  <h6 className='card-title'>Card title</h6>
                  <p className='card-text'>lorem ipsum</p>
                  <p className='card-text'> $15.00</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="column">
            <div className='card' style={{ width: '12.5rem' }}>
              <img className='card-img-top' src={product_4} alt='Card cap' />
              <Link to="products/3">
                <div className='card-body'>
                  <h6 className='card-title'>Card title</h6>
                  <p className='card-text'>lorem ipsum</p>
                  <p className='card-text'> $15.00</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="column">
            <div className='card' style={{ width: '12.5rem' }}>
              <img className='card-img-top' src={product_2} alt='Card cap' />
              <Link to="products/4">
                <div className='card-body'>
                  <h6 className='card-title'>Card title</h6>
                  <p className='card-text'>lorem ipsum</p>
                  <p className='card-text'> $15.00</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="column">
            <div className='card' style={{ width: '12.5rem' }}>
              <img className='card-img-top' src={product_4} alt='Card cap' />
              <Link to="products/5">
                <div className='card-body'>
                  <h6 className='card-title'>Card title</h6>
                  <p className='card-text'>lorem ipsum</p>
                  <p className='card-text'> $15.00</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
