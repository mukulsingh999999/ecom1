import React from 'react'
import crossLogo from "../images/cross.svg"
import wishlistProduct from "../images/watch.jpg"

const Wishlistitem = (props) => {
  return (
    <>
    
                <div className="col-3">
                    <div className="wishlist-card position-relative">
                        <img className='position-absolute cross img-fluid' src={crossLogo} alt="cross" /> 

                    <div className="d-flex align-items-center flex-column">

                    <div className="wishlist-card-image">
                        <img className = "img-fluid"src={props.img} alt="watch"  />
                    </div>

                    <div className='py-3'>
                        <h5 className="title">
                        {props.brand} 
                        </h5>
                        <h6 className="price">
                        {props.price}
                        </h6>
                    </div>
                </div>
                </div>
            </div>
   
    
    
    
    
    
    
    </>
  )
}

export default Wishlistitem