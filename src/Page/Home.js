import React from 'react';
import {Link} from "react-router-dom";
import Marquee from "react-fast-marquee";
import ProductCard from '../components/ProductCard';
import SpecialProducts from '../components/SpecialProducts';
import Container from "../components/Container"

///////////////////////////////////////////////////////////
import mainbanner1 from "../images/banner1.jpg";
import mainbanner6 from "../images/banner6.gif";
import mainbanner8 from "../images/banner8.jpg";
import mainbanner9 from "../images/banner9.jpg";
import mainbanner10 from "../images/banner10.jpg";

import fphone1 from "../images/iphone14pro.jpg";
import fphone2 from "../images/galaxys22.jpg";
import fphone3 from "../images/galaxys22ultra.jpg";
import fphone4 from "../images/xiamo12tpro.jpg";


import phone1 from "../images/redmia2.jpg"
import phone2 from "../images/oneplus10pro.jpg"
import phone3 from "../images/iqooneo7.jpg"
import phone4 from "../images/lavablaze2.jpg"




import mainbanner2 from "../images/banner2.jpg";
import mainbanner3 from "../images/banner3.jpg";


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
          <div className="col-12">
              <Link to="/ourstore" onClick={()=>{window.scroll(0,0)}}>
            <div className="main-banner-3 d-flex  justify-content-center">
              <img className = "img-fluid rounded-3 banner-img" src={mainbanner1} alt="main-banner" />
          </div>
              </Link>
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

      <div className="row pt-5">
        <div className="col-12">
          <div className="d-flex justify-content-center">
            <img className="banner-img2" src={mainbanner6} alt="banner6" />
          </div>
        </div>
      </div>

      <Container class1="home-wrapper-3 py-5">
      <div className="row">
              <Link to="/OurStore" onClick={()=>{window.scroll(0,0)}}>
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
            </div>
          </div>
          </Link>
        
        </div>
      </Container>

      <Container class1="marque-wrapper py-5">
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

      <Container class1="blog-wrapper py-5 home-wrapper-2 ">
        <div className="row">
            <div className="col-12 mb-3">
              <h3 className="section-heading">
                Featured Collection
              </h3>
            </div>

              <ProductCard title="Apple iPhone 14 Pro (128 GB) - Space Black" price="₹1,19,999 " img={fphone1} />
              <ProductCard title="Samsung Galaxy S22 5G (Green, 8GB, 128GB Storage)" price = "₹62,999"  img={fphone2} />
              <ProductCard title="Xiaomi 13 Pro (Ceramic Black, 12GB RAM 256GB Storage)" price = "₹79,999" img={fphone3} />
              <ProductCard title="Samsung Galaxy S22 Ultra 5G (Burgundy, 12GB, 256GB Storage)" price = "₹94,999" img={fphone4} />
          </div>
      </Container>

      <Container>
       <div className="row pb-4">
          <div className="col-12">
            <div className="d-flex justify-content-center align-items-center">    
              <img src={mainbanner8} className='banner-img3' alt="mainbaner8" />
            </div>
          </div>
        </div>     
      </Container>


      <Container>
        <div className="row pt-4">
          <div className="col-12">
            <div className="d-flex justify-content-center">
            <img src={mainbanner9} className='banner-img3' alt="mainbanner9" />
            </div>
          </div>
        </div> 
      </Container>



      <Container class1="special-wrapper home-wrapper-2 py-5">
        <div className="row">
            <div className="col-12">
              <img src={mainbanner10} alt="banner10" />
            </div>
          </div>
          <div className="row">
            
            <SpecialProducts img={phone1}/>
            <SpecialProducts img={phone2}/>
            <SpecialProducts img={phone3}/>
            <SpecialProducts img={phone4}/>
          </div>
      </Container>

    </>
  )
}

export default Home