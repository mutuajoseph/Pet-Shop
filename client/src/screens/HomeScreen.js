import React from 'react';
import {Row, Col, Image, Button } from 'react-bootstrap';
import {RiArrowRightSLine, FaShippingFast, GrMoney, IoCall} from 'react-icons/all'

// import images
import Landing from '../assets/landing.png';

// import components
import Header from '../components/Header';
import Footer from '../components/Footer';
import Products from '../components/Products';

const HomeScreen = ({history}) => {

  return (
    <>
      <Header />
      <main>
        <div className='container'>
          <Row>
            <Col sm={7} className="col-height">
              <h1 className="heading">Everything you need for your pet</h1>
              <p className="small-text">
                It is a long established fact that a reader will be distracted
                by the layout.It is a <br /> long established fact that a reader will be <br /> distracted
                by the layout.
              </p>
              <Button onClick={() => history.push('/products')} className="button">
                  <span>View collections</span>
                  <RiArrowRightSLine className="ml-3" style={{fontSize : '1.5rem'}} />
              </Button>
            </Col>
            <Col sm={5}>
              <Image src={Landing} fluid />
            </Col>
          </Row>

          {/* shop now section */}
          <div className="shop-now-row">
              <div className="shop-now-col">
                <FaShippingFast className="shop-icon"/>
                <h5>Free Shipping and Return</h5>
              </div>
              <div className="vl"></div>
              <div className="shop-now-col">
                <GrMoney className="shop-icon"/>
                <h5>Money back Guarantee</h5>
              </div>
              <div className="vl"></div>
              <div className="shop-now-col">
                <IoCall className="shop-icon"/>
                <h5>07-123-456-78</h5>
              </div>
          </div>

          {/* Our Products */}
          <Products />

        </div>
      </main>
      <Footer />
    </>
  );
};

export default HomeScreen;
