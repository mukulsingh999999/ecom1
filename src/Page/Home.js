import React from 'react';
import {Link} from "react-router-dom";
import Marquee from "react-fast-marquee";
import ProductCard from '../components/ProductCard';
import SpecialProducts from '../components/SpecialProducts';
import Container from "../components/Container"
///////////////////////////////////////////////////////////
import mainbanner1 from "../images/main-banner-1.jpg";
import catbanner1 from "../images/catbanner-01.jpg"
import catbanner2 from "../images/catbanner-02.jpg"
import catbanner3 from "../images/catbanner-03.jpg"
import catbanner4 from "../images/catbanner-04.jpg"

import service1 from "../images/service.png"
import service2 from "../images/service-02.png"
import service3 from "../images/service-03.png"
import service4 from "../images/service-04.png"
import service5 from "../images/service-05.png"

import s22ultra from "../images/s22ultra.jpg";
import oneplus10 from "../images/oneplus10.jpg";
import minote from "../images/minote.jpg";
import iphone12 from "../images/iphone12.jpg";

import applelogo from "../images/apple.jpg"
import samsunglogo from "../images/samsung.jpg"
import vivologo from "../images/vivo.jpg"
import milogo from "../images/mi.jpg"
import onepluslogo from "../images/oneplus.jpg"
import lavalogo from "../images/lava.jpg"
import nokialogo from "../images/nokia.jpg"
import itellogo from "../images/itel.jpg"
import narzologo from "../images/narzo.jpg"
import iqlogo from "../images/iq.jpg"
///////////////////////////////////////////////////



const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
      <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative p-3">
              <img className = "img-fluid rounded-3"src={mainbanner1} alt="main-banner" />
               <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS</h4>
                <h5>iPad S13+ Pro</h5>
                <p>From ₹79999 or ₹3200/mo</p>
                <Link className='button'>Buy Now</Link>
            </div>
            </div>
            </div>

            <div className="col-6">
              <div className="d-flex gap-10 flex-wrap justify-content-center align-items-center"> 
                <div className="small-banner position-relative">
                  <img className = "img-fluid rounded-3" src={catbanner1} alt="cat-banner" />
                    <div className="small-banner-content position-absolute">
                      <h4>Best Sale</h4>
                      <h5>iPad S13+ Pro</h5>
                      <p>From ₹79999 </p>
                    </div>
            </div>

                <div className="small-banner position-relative">
                  <img className = "img-fluid rounded-3" src={catbanner2} alt="cat-banner" />
                    <div className="small-banner-content position-absolute">
                      <h4>SUPERCHARGED </h4>
                      <h5>iPad S13+ Pro</h5>
                      <p>From ₹79999 </p>
              </div>
            </div>

           
                <div className="small-banner position-relative">
                  <img className = "img-fluid rounded-3" src={catbanner3} alt="cat-banner" />
                    <div className="small-banner-content position-absolute">
                      <h4>SUPERCHARGED </h4>
                      <h5>iPad S13+ Pro</h5>
                      <p>From ₹79999 </p>
              </div>
            </div>

            
                <div className="small-banner position-relative">
                  <img className = "img-fluid rounded-3" src={catbanner4} alt="cat-banner" />
                    <div className="small-banner-content position-absolute">
                      <h4>SUPERCHARGED </h4>
                      <h5>iPad S13+ Pro</h5>
                      <p>From ₹79999 </p>
              </div>
            </div>
            
          </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
      <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              <div>
                <img src={service1} alt="services" />
                <h6>Free Shipping</h6>
                <p className='mb-0'>From all Orders over ₹500</p>
              </div>
              <div>
                <img src={service2} alt="services" />
                <h6>Daily Surprise Offers</h6>
                <p className='mb-0'>Save Upto 25% Off</p>
              </div>
              <div>
                <img src={service3} alt="services" />
                <h6>Support 24/7</h6>
                <p className='mb-0'>Shop with an Expert</p>
              </div>
              <div>
                <img src={service4} alt="services" />
                <h6>Affordable Prices</h6>
                <p className='mb-0'>Get Factory Default Price</p>
              </div>
              <div>
                <img src={service5} alt="services" />
                <h6>Secure Payments</h6>
                <p className='mb-0'>100% Protected Payments</p>
              </div>

            </div>

          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-3 py-5">
      <div className="row">
          <div className="col-12">
            
            <div className="categories d-flex flex-wrap align-items-center justify-content-between">
  
              <div className='d-flex align-items-center gap-10'>
                <div>
                <h6>Galaxy Series</h6>
                <p>10 items</p>
              </div>
              <img src={s22ultra} className='itemsimg' alt="s22" />
                </div>

                <div className='d-flex align-items-center gap-10'>
                <div>
                <h6>Iphone 14</h6>
                <p>10 items</p>
              </div>
              <img src={iphone12} className='itemsimg' alt="s22" />
                </div>

                <div className='d-flex align-items-center gap-15'>
                <div>
                <h6>Mi Note Series</h6>
                <p>10 items</p>
              </div>
              <img src={minote} className='itemsimg' alt="redmi" />
                </div>

                <div className='d-flex align-items-center gap-10'>
                <div>
                <h6>One PLus</h6>
                <p>10 items</p>
              </div>
              <img src={oneplus10} className='itemsimg' alt="redmi" />
                </div>
                
                <div className='d-flex align-items-center gap-10'>
                <div>
                <h6>Galaxy Series</h6>
                <p>10 items</p>
              </div>
              <img src={s22ultra} className='itemsimg' alt="s22" />
                </div>

                <div className='d-flex align-items-center gap-10'>
                <div>
                <h6>Iphone 14</h6>
                <p>10 items</p>
              </div>
              <img src={s22ultra} className='itemsimg' alt="s22" />
                </div>

                <div className='d-flex align-items-center gap-15'>
                <div>
                <h6>Mi Note Series</h6>
                <p>10 items</p>
              </div>
              <img src={minote} className='itemsimg' alt="redmi" />
                </div>

                <div className='d-flex align-items-center gap-10'>
                <div>
                <h6>One PLus</h6>
                <p>10 items</p>
              </div>
              <img src={oneplus10} className='itemsimg' alt="redmi" />
                </div>

            </div>
          </div>
        
        </div>
      </Container>

      <Container className="marque-wrapper py-5">
      <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
            <Marquee speed = "200" loop className = "d-flex" >
              <div className="d-flex gap-50">

                <img className="brand-logo" src={applelogo} alt="brand" />
                
                <img className="brand-logo" src={samsunglogo} alt="brand" />
              
                <img className="brand-logo" src={milogo} alt="brand" />
              
                <img className="brand-logo" src={onepluslogo} alt="brand" />
              
                <img className="brand-logo" src={narzologo} alt="brand" />
          
                <img className="brand-logo" src={vivologo} alt="brand" />
                 
                <img className="brand-logo" src={itellogo} alt="brand" />

                <img className="brand-logo" src={nokialogo} alt="brand" />

                <img className="brand-logo" src={lavalogo} alt="brand" />

                {/* <img className="brand-logo" src="images/techno.gif" alt="brand" /> */}

                <img className="brand-logo" src={iqlogo} alt="brand" />

                <img className="brand-logo" src={vivologo} alt="brand" />
              </div>

            </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container className="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
            <div className="col-12">
              <h3 className="section-heading">
                Featured Collection
              </h3>
            </div>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>

          </div>
      </Container>
  
      <Container className="special-wrapper home-wrapper-2 py-5">
        <div className="row">
            <div className="col-12">
              <h3 className="special-heading">Special Products</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProducts/>
            <SpecialProducts/>
            <SpecialProducts/>
            <SpecialProducts/>
          </div>
      </Container>

    </>
  )
}

export default Home