import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from "../components/Meta";

const CompareProducts = () => {
  return (
    <>
    <Meta title = {"CompareProducts"}/>
    <BreadCrumb title="CompareProducts"/>

      <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="compare-products-card position-relative">
                <img className="cross position-absolute" src="images/cross.svg" alt="cross" />

                <div className="product-card-image">
                  <img src="images/watch.jpg" alt="watch" />
                </div>
                <div className="compare-products-details">
                  <h5 className="title">
                    Samsung 
                  </h5>
                  <h6 className="price">
                    ₹12000
                  </h6>

                  <div>
                    <div className="product-detail">
                      <h5>Camera:</h5>
                      <p>Havells</p>
                    </div>
                  </div>
                  <div>
                    <div className="product-detail">
                      <h5>Screen Size:</h5>
                      <p>Havells</p>
                    </div>
                  </div>
                  <div>
                    <div className="product-detail">
                      <h5>Battery:</h5>
                      <p>Havells</p>
                    </div>
                  </div>
                  <div>
                    <div className="product-detail">
                      <h5>Ram:</h5>
                      <p>Havells</p>
                    </div>
                  </div>
      
                </div>
              </div>
              

            </div>
          </div>
        </div>
      </div>
    
    
    
    
    
    </>
  )
}

export default CompareProducts