import React from 'react';

// import images
import product_1 from '../assets/chock_chain.jpeg';
import product_2 from '../assets/colar.jpeg';
import product_3 from '../assets/dog_leash.jpeg';
import product_4 from '../assets/harness.jpeg';

const Features = () => {
  return (
    <div>
      <h5 className="text-center" style={{marginTop: '5rem'}}>YOU MIGHT ALSO LIKE</h5>
      {/* TODO: CAROUSEL */}
      <div className='product-row mt-4'>
        <div className='column'>
          <div className='card' style={{ width: '12.5rem' }}>
            <img className='card-img-top' src={product_1} alt='Card cap' />
            <div className='card-body'>
              <h6 className='card-title'>Card title</h6>
              <p className='card-text'>lorem ipsum</p>
              <p className='card-text'> $15.00</p>
            </div>
          </div>
        </div>
        <div className='column'>
          <div className='card' style={{ width: '12.5rem' }}>
            <img className='card-img-top' src={product_2} alt='Card cap' />
            <div className='card-body'>
              <h6 className='card-title'>Card title</h6>
              <p className='card-text'>lorem ipsum</p>
              <p className='card-text'> $15.00</p>
            </div>
          </div>
        </div>
        <div className='column'>
          <div className='card' style={{ width: '12.5rem' }}>
            <img className='card-img-top' src={product_4} alt='Card cap' />
            <div className='card-body'>
              <h6 className='card-title'>Card title</h6>
              <p className='card-text'>lorem ipsum</p>
              <p className='card-text'> $15.00</p>
            </div>
          </div>
        </div>
        <div className='column'>
          <div className='card' style={{ width: '12.5rem' }}>
            <img className='card-img-top' src={product_2} alt='Card cap' />
            <div className='card-body'>
              <h6 className='card-title'>Card title</h6>
              <p className='card-text'>lorem ipsum</p>
              <p className='card-text'> $15.00</p>
            </div>
          </div>
        </div>
        <div className='column'>
          <div className='card' style={{ width: '12.5rem' }}>
            <img className='card-img-top' src={product_4} alt='Card cap' />
            <div className='card-body'>
              <h6 className='card-title'>Card title</h6>
              <p className='card-text'>lorem ipsum</p>
              <p className='card-text'> $15.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
