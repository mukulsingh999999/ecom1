import React from 'react';
import {Link} from "react-router-dom";
import Marquee from "react-fast-marquee";
import ProductCard from '../components/ProductCard';
import SpecialProducts from '../components/SpecialProducts';

const Home = () => {
  return (
    <>
     <section className='home-wrapper-1 py-5'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative p-3">
              <img className = "img-fluid rounded-3"src="images/main-banner-1.jpg" alt="main-banner" />
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
                  <img className = "img-fluid rounded-3" src="images/catbanner-01.jpg" alt="cat-banner" />
                    <div className="small-banner-content position-absolute">
                      <h4>Best Sale</h4>
                      <h5>iPad S13+ Pro</h5>
                      <p>From ₹79999 </p>
                    </div>
            </div>

                <div className="small-banner position-relative">
                  <img className = "img-fluid rounded-3" src="images/catbanner-02.jpg" alt="cat-banner" />
                    <div className="small-banner-content position-absolute">
                      <h4>SUPERCHARGED </h4>
                      <h5>iPad S13+ Pro</h5>
                      <p>From ₹79999 </p>
              </div>
            </div>

           
                <div className="small-banner position-relative">
                  <img className = "img-fluid rounded-3" src="images/catbanner-03.jpg" alt="cat-banner" />
                    <div className="small-banner-content position-absolute">
                      <h4>SUPERCHARGED </h4>
                      <h5>iPad S13+ Pro</h5>
                      <p>From ₹79999 </p>
              </div>
            </div>

            
                <div className="small-banner position-relative">
                  <img className = "img-fluid rounded-3" src="images/catbanner-04.jpg" alt="cat-banner" />
                    <div className="small-banner-content position-absolute">
                      <h4>SUPERCHARGED </h4>
                      <h5>iPad S13+ Pro</h5>
                      <p>From ₹79999 </p>
              </div>
            </div>
            
          </div>
          </div>
        </div>
      </div>
     </section>

     <section className="home-wrapper-2 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              <div>
                <img src="images/service.png" alt="services" />
                <h6>Free Shipping</h6>
                <p className='mb-0'>From all Orders over ₹500</p>
              </div>
              <div>
                <img src="images/service-02.png" alt="services" />
                <h6>Daily Surprise Offers</h6>
                <p className='mb-0'>Save Upto 25% Off</p>
              </div>
              <div>
                <img src="images/service-03.png" alt="services" />
                <h6>Support 24/7</h6>
                <p className='mb-0'>Shop with an Expert</p>
              </div>
              <div>
                <img src="images/service-04.png" alt="services" />
                <h6>Affordable Prices</h6>
                <p className='mb-0'>Get Factory Default Price</p>
              </div>
              <div>
                <img src="images/service-05.png" alt="services" />
                <h6>Secure Payments</h6>
                <p className='mb-0'>100% Protected Payments</p>
              </div>

            </div>

          </div>
        </div>
      </div>

     </section>

     <section className="home-wrapper-3 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            
            <div className="categories d-flex flex-wrap align-items-center justify-content-between">
  
              <div className='d-flex align-items-center gap-10'>
                <div>
                <h6>Galaxy Series</h6>
                <p>10 items</p>
              </div>
              <img src="images/s22ultra.jpg" className='itemsimg' alt="s22" />
                </div>

                <div className='d-flex align-items-center gap-10'>
                <div>
                <h6>Iphone 14</h6>
                <p>10 items</p>
              </div>
              <img src="images/iphone12.jpg" className='itemsimg' alt="s22" />
                </div>

                <div className='d-flex align-items-center gap-15'>
                <div>
                <h6>Mi Note Series</h6>
                <p>10 items</p>
              </div>
              <img src="images/minote.jpg" className='itemsimg' alt="redmi" />
                </div>

                <div className='d-flex align-items-center gap-10'>
                <div>
                <h6>One PLus</h6>
                <p>10 items</p>
              </div>
              <img src="images/oneplus10.jpg" className='itemsimg' alt="redmi" />
                </div>
                


                <div className='d-flex align-items-center gap-10'>
                <div>
                <h6>Galaxy Series</h6>
                <p>10 items</p>
              </div>
              <img src="images/s22ultra.jpg" className='itemsimg' alt="s22" />
                </div>

                <div className='d-flex align-items-center gap-10'>
                <div>
                <h6>Iphone 14</h6>
                <p>10 items</p>
              </div>
              <img src="images/iphone12.jpg" className='itemsimg' alt="s22" />
                </div>

                <div className='d-flex align-items-center gap-15'>
                <div>
                <h6>Mi Note Series</h6>
                <p>10 items</p>
              </div>
              <img src="images/minote.jpg" className='itemsimg' alt="redmi" />
                </div>

                <div className='d-flex align-items-center gap-10'>
                <div>
                <h6>One PLus</h6>
                <p>10 items</p>
              </div>
              <img src="images/oneplus10.jpg" className='itemsimg' alt="redmi" />
                </div>

            </div>
          </div>
        
        </div>
      </div>
     </section>

     <section className="marque-wrapper py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
            <Marquee speed = "200" loop className = "d-flex" >
              <div className="d-flex gap-50">

                <img className="brand-logo" src="images/apple.jpg" alt="brand" />
                
                <img className="brand-logo" src="images/samsung.jpg" alt="brand" />
              
                <img className="brand-logo" src="images/mi.jpg" alt="brand" />
              
                <img className="brand-logo" src="images/oneplus.jpg" alt="brand" />
              
                <img className="brand-logo" src="images/narzo.jpg" alt="brand" />
          
                <img className="brand-logo" src="images/vivo.jpg" alt="brand" />
                 
                <img className="brand-logo" src="images/itel.jpg" alt="brand" />

                <img className="brand-logo" src="images/nokia.jpg" alt="brand" />

                <img className="brand-logo" src="images/lava.jpg" alt="brand" />

                {/* <img className="brand-logo" src="images/techno.gif" alt="brand" /> */}

                <img className="brand-logo" src="images/iq.jpg" alt="brand" />

                <img className="brand-logo" src="images/vivo.jpg" alt="brand" />
                
            

               
              </div>

            </Marquee>
            </div>
          </div>
        </div>
      </div>
      
     </section>

     <section className="blog-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
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
      </div>
     </section>

     <section className="special-wrapper home-wrapper-2 py-5">
      <div className="container-xxl">
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
      </div>
     </section>





    </>
  )
}

export default Home