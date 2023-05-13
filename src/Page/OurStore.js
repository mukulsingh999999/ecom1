import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from "../components/Meta";

const OurStore = () => {
  return (
    <>
       <Meta title = {"Our Store"}/>
      <BreadCrumb title = "Our Store"/>

      <div className="store-wrapper  home-wrapper-2 py-5">
        <div className="container-xxl">
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
                      <img className="best-img"src="images/samsungm04.jpg" alt="m04" />
                      <img className="best-img"src="images/realmen55.jpg" alt="n55" />
                      <img className="best-img"src="images/redmia1.jpg" alt="a1" />
                      <img className="best-img"src="images/samsungm13.jpg" alt="m13" />

                   </div>
                  </div>

                  <div className="budget-phones p-4 mt-4">
                  <div className="bxc-grid__image   bxc-grid__image--light">
                     <img src="images/midrange.jpg" alt="premium" />
                     </div>
                      <div className="col-12 my-4">
                      <img className="best-img"src="images/k50i.jpg" alt="m04" />
                      <img className="best-img"src="images/narzo50.jpg" alt="n55" />
                      <img className="best-img"src="images/a14.jpg" alt="a1" />
                      <img className="best-img"src="images/a77s.jpg" alt="m13" />

                      </div>
                      
                    </div>

                    <div className="premium-phones p-4 mt-4">
                    <div className="bxc-grid__image   bxc-grid__image--light">
                      <img src="images/premium.jpg" alt="premium" />
                    </div>
                  
                      <div className="col-12 my-4">
                      <img className="best-img"src="images/iphon14pro.jpg" alt="m04" />
                      <img className="best-img"src="images/12pro.jpg" alt="n55" />
                      <img className="best-img"src="images/10t.jpg" alt="a1" />
                      <img className="best-img"src="images/s23ultra.jpg" alt="m13" />

                      </div>
                      
                    </div>

                    <div className="best-offers p-4 mt-4">
                    <div className="bxc-grid__image   bxc-grid__image--light">
                      <img src="images/bigoffers.jpg" alt="premium" />
                    </div>
                  
                      <div className="col-12 my-4">
                      <img className="best-img"src="images/iphon14pro.jpg" alt="m04" />
                      <img className="best-img"src="images/12pro.jpg" alt="n55" />
                      <img className="best-img"src="images/10t.jpg" alt="a1" />
                      <img className="best-img"src="images/s23ultra.jpg" alt="m13" />

                      </div>
                      
                    </div>

                  </div>
                    
                    
                    

            </div>
        </div>

      </div>
    </>
  )
}

export default OurStore;