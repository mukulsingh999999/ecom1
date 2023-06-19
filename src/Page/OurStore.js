import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from "../components/Meta";
import Container from "../components/Container"
import CustomInput from  "../components/CustomInput"
import { Link } from 'react-router-dom';
import SingleProduct from './SingleProduct';

//////////////////////////////////////////////////////////////
import affordablePhone1 from "../images/samsungm13.jpg";
import affordablePhone2 from "../images/samsungm04.jpg";
import affordablePhone3 from "../images/realmen55.jpg";
import affordablePhone4 from "../images/RedmiA1.jpg";

import midrangePhone1 from "../images/k50i.jpg";
import midrangePhone2 from "../images/narzo50.jpg"
import midrangePhone3 from "../images/a14.jpg"
import midrangePhone4 from "../images/a77s.jpg"
import midrangeBanner from "../images/midrange.jpg"

import premiumphoneBanner from "../images/premium.jpg"
import premiumphone1 from "../images/iphon14pro.jpg";
import premiumphone2 from "../images/12pro.jpg";
import premiumphone3 from "../images/10t.jpg";
import premiumphone4 from "../images/s23ultra.jpg";
//////////////////////////////////////////////////////////////



const OurStore = () => {
  return (
    <>
      <Meta title = {"Our Store"}/>
      <BreadCrumb title = "Our Store"/>

      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
                <div className="col-3">
                    <div className='filter-card mb-3'>
                      <h3 className="filter-title">Shop by Categories</h3>
                      <div>
                        <ul className='ps-0'>
                          <li>Samsung</li>
                          <li>Redmi</li>
                          <li>Apple</li>
                          <li>One Plus</li>

                        </ul>
                      </div>
                    </div>

                    <div className='filter-card mb-3'>
                      <h3 className="filter-title">Filter By</h3>
                      <div>
                        <h5 className="sub-title">
                          Availability
                        </h5>
                        <div className="form-check">
                          <input type="checkbox" className="form-check-input" value="" id="" checked/>
                          <label htmlFor="" className="form-check-label">Out Of Stock (0)</label>
                        </div>
                        <div className="form-check">
                          <input type="checkbox" className="form-check-input" value="" id="" />
                          <label htmlFor="" className="form-check-label">InStock (0)</label>
                        </div>
                      </div>
                      <div>
                        <h5 className="sub-title">
                          Price
                        </h5>

                        <div className="d-flex align-items-center">

                        <div class="form-floating mb-3">
                            {/* <CustomInput type="text" className="form-control" id="floatingInput" /> */}

                            <input type="email" class="form-control" id="floatingInput" placeholder="From"/>
                            <label for="floatingInput">From</label>
                          </div>
                          <div class="form-floating mb-3">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="To"/>
                            <label for="floatingPassword">To</label>
                          </div>
                        </div>

                    
                      </div>




                    </div>
                    <div className='filter-card mb-3'><h3 className="filter-title">Products tags</h3></div>
                    <div className='filter-card mb-3'><h3 className="filter-title">Random Product</h3></div>

                   


                </div>

                <div className="col-9 p-4">
                  <div className="best-selling-afford p-3">

                      <h3 className="bestselling ">
                        Best Selling Affordable Smartphones
                      </h3>
                      <div className="col-12 my-4">
                        <Link to = "/SingleProduct">
                      <img className="best-img"src={affordablePhone2} alt="m04" />
                      <img className="best-img"src={affordablePhone3} alt="n55" />
                      <img className="best-img"src={affordablePhone4} alt="a1" />
                      <img className="best-img"src={affordablePhone1} alt="m13" />
                        </Link>

                   </div>
                  </div>

                  <div className="budget-phones p-4 mt-4">
                  <div className="bxc-grid__image   bxc-grid__image--light">
                     <img src={midrangeBanner} alt="midrange" />
                     </div>
                      <div className="col-12 my-4">
                      <Link to = "/SingleProduct">
                      <img className="best-img"src={midrangePhone1} alt="m04" />
                      <img className="best-img"src={midrangePhone2} alt="n55" />
                      <img className="best-img"src={midrangePhone3} alt="a1" />
                      <img className="best-img"src={midrangePhone4} alt="m13" />
                      </Link>
                      </div>
                    </div>

                    <div className="best-offers p-4 mt-4">
                    <div className="bxc-grid__image   bxc-grid__image--light">
                      <img src={premiumphoneBanner} alt="premium" />
                    </div>
                  
                      <div className="col-12 my-4">
                      <Link to = "/SingleProduct">
                        <img className="best-img"src={premiumphone1} alt="m04" />
                        <img className="best-img"src={premiumphone2} alt="n55" />
                        <img className="best-img"src={premiumphone3} alt="a1" />
                        <img className="best-img"src={premiumphone4} alt="m13" />
                      </Link>
                      </div>
                      
                    </div>

                  </div>
                    

            </div>
      </Container>
    
    </>
  )
}

export default OurStore;