import React from 'react';
import {Link} from 'react-router-dom'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

// import images
import product_1 from '../assets/chock_chain.jpeg';
import product_2 from '../assets/colar.jpeg';
import product_4 from '../assets/harness.jpeg';
import Rating from './Rating';
import { AiOutlineHeart } from 'react-icons/ai';

const Features = () => {

  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <div className='column'>
      <div
        className='card'
        style={{ width: '12.5rem' }}
        onDragStart={handleDragStart}
      >
        <img className='card-img-top' src={product_1} alt='Card cap' />
        <Link to='/products/1'>
          <div className='card-body'>
            <h6 className='card-title flex'>
              <span>Card title</span> <AiOutlineHeart className="float-right" style={{fontSize: '1rem'}}/></h6>
            <p className='card-text'>
              <Rating />
            </p>
            <p className='card-text bold'> $15.00</p>
          </div>
        </Link>
      </div>
    </div>,
    <div className='column'>
      <div
        className='card'
        style={{ width: '12.5rem' }}
        onDragStart={handleDragStart}
      >
        <img className='card-img-top' src={product_1} alt='Card cap' />
        <Link to='/products/1'>
          <div className='card-body'>
            <h6 className='card-title'>
              <span>Card title</span> <AiOutlineHeart className="float-right" style={{fontSize: '1rem'}}/>
            </h6>
            <p className='card-text'>
              <Rating />
            </p>
            <p className='card-text'> $15.00</p>
          </div>
        </Link>
      </div>
    </div>,
    <div className='column'>
      <div
        className='card'
        style={{ width: '12.5rem' }}
        onDragStart={handleDragStart}
      >
        <img className='card-img-top' src={product_1} alt='Card cap' />
        <Link to='/products/1'>
          <div className='card-body'>
            <h6 className='card-title'>
              <span>Card title</span> <AiOutlineHeart className="float-right" style={{fontSize: '1rem'}}/>
            </h6>
            <p className='card-text'>
              <Rating />
            </p>
            <p className='card-text'> $15.00</p>
          </div>
        </Link>
      </div>
    </div>,
    <div className='column'>
      <div
        className='card'
        style={{ width: '12.5rem' }}
        onDragStart={handleDragStart}
      >
        <img className='card-img-top' src={product_1} alt='Card cap' />
        <Link to='/products/1'>
          <div className='card-body'>
            <h6 className='card-title'>
              <span>Card title</span> <AiOutlineHeart className="float-right" style={{fontSize: '1rem'}}/>
            </h6>
            <p className='card-text'>
              <Rating />
            </p>
            <p className='card-text'> $15.00</p>
          </div>
        </Link>
      </div>
    </div>,
    <div className='column' onDragStart={handleDragStart}>
      <div className='card' style={{ width: '12.5rem' }}>
        <img className='card-img-top' src={product_2} alt='Card cap' />
        <Link to='/products/2'>
          <div className='card-body'>
            <h6 className='card-title'>
              <span>Card title</span> <AiOutlineHeart className="float-right" style={{fontSize: '1rem'}}/>
            </h6>
            <p className='card-text'>
              <Rating />
            </p>
            <p className='card-text'> $15.00</p>
          </div>
        </Link>
      </div>
    </div>,
    <div className='column' onDragStart={handleDragStart}>
      <div className='card' style={{ width: '12.5rem' }}>
        <img className='card-img-top' src={product_4} alt='Card cap' />
        <Link to='/products/3'>
          <div className='card-body'>
            <h6 className='card-title'>
              <span>Card title</span> <AiOutlineHeart className="float-right" style={{fontSize: '1rem'}}/>
            </h6>
            <p className='card-text'>
              <Rating />
            </p>
            <p className='card-text'> $15.00</p>
          </div>
        </Link>
      </div>
    </div>,
    <div className='column' onDragStart={handleDragStart}>
      <div className='card' style={{ width: '12.5rem' }}>
        <img className='card-img-top' src={product_2} alt='Card cap' />
        <Link to='/products/4'>
          <div className='card-body'>
            <h6 className='card-title'>
              <span>Card title</span> <AiOutlineHeart className="float-right" style={{fontSize: '1rem'}}/>
            </h6>
            <p className='card-text'>
              <Rating />
            </p>
            <p className='card-text'> $15.00</p>
          </div>
        </Link>
      </div>
    </div>,
    <div className='column' onDragStart={handleDragStart}>
      <div className='card' style={{ width: '12.5rem' }}>
        <img className='card-img-top' src={product_4} alt='Card cap' />
        <Link to='/products/5'>
          <div className='card-body'>
            <h6 className='card-title'>
              <span>Card title</span> <AiOutlineHeart className="float-right" style={{fontSize: '1rem'}}/>
            </h6>
            <p className='card-text'>
              <Rating />
            </p>
            <p className='card-text'> $15.00</p>
          </div>
        </Link>
      </div>
    </div>,
  ];

  return (
    <div>
      <h5 className="text-center mb-5" style={{marginTop: '5rem'}}>YOU MIGHT ALSO LIKE</h5>
      <AliceCarousel 
          mouseTracking 
          autoWidth 
          autoPlay 
          autoPlayStrategy="none"
          autoPlayInterval={1000}
          animationDuration={1000}
          animationType="fadeout"
          infinite
          touchTracking={false}
          // disableDotsControls
          disableButtonsControls
          items={items} />      
    </div>
  );
};

export default Features;
