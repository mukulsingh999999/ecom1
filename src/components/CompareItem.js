import React from 'react'
import productImage from "../images/watch.jpg"
import crossLogo from "../images/cross.svg"


const CompareItem = (props) => {
  return (
    <>
            <div className="col-3">
              <div className="compare-products-card position-relative">
                <img className="cross position-absolute" src={crossLogo} alt="cross" />

                <div className="product-card-image">
                  <img src={props.img} alt="watch" />
                </div>
                <div className="compare-products-details">
                  <h5 className="title">
                    {props.brand} 
                  </h5>
                  <h6 className="price">
                    {props.price}
                  </h6>

                  <div>
                    <div className="product-detail">
                      <h5>Camera:</h5>
                      <p>{props.camera}</p>
                    </div>
                  </div>
                  <div>
                    <div className="product-detail">
                      <h5>Screen Size:</h5>
                      <p>{props.screen}</p>
                    </div>
                  </div>
                  <div>
                    <div className="product-detail">
                      <h5>Battery:</h5>
                      <p>{props.battery}</p>
                    </div>
                  </div>
                  <div>
                    <div className="product-detail">
                      <h5>Ram:</h5>
                      <p>{props.ram}</p>
                    </div>
                  </div>
      
                </div>
              </div>
            </div>
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default CompareItem