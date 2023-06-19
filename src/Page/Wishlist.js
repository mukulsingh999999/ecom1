import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from "../components/Meta";
import crossLogo from "../images/cross.svg"
import wishlistProduct from "../images/watch.jpg"

const Wishlist = () => {
  return (
    <>
    <Meta title = {"Wishlist"}/>
    <BreadCrumb title = "Wishlist"/>

    <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
            <div className="row">
                <div className="col-3">

                    <div className="wishlist-card position-relative">
                        <img className='position-absolute cross img-fluid' src={crossLogo} alt="cross" /> 

                    <div className="wishlist-card-image">
                        <img className = "img-fluid w-100"src={wishlistProduct} alt="watch" />
                    </div>

                    <div className='py-3'>
                        <h5 className="title">
                        Samsung 
                        </h5>
                        <h6 className="price">
                        ₹12000
                        </h6>
                    </div>
                </div>
                </div>

                <div className="col-3">

                    <div className="wishlist-card position-relative">
                        <img className='position-absolute cross img-fluid' src={crossLogo} alt="cross" /> 

                    <div className="wishlist-card-image">
                        <img className = "img-fluid w-100"src={wishlistProduct}  alt="watch" />
                    </div>

                    <div className='py-3'>
                        <h5 className="title">
                        Samsung 
                        </h5>
                        <h6 className="price">
                        ₹12000
                        </h6>
                    </div>
                </div>
                </div>
                
                <div className="col-3">

                    <div className="wishlist-card position-relative">
                        <img className='position-absolute cross img-fluid' src={crossLogo} alt="cross" /> 

                    <div className="wishlist-card-image">
                        <img className = "img-fluid w-100"src={wishlistProduct}  alt="watch" />
                    </div>

                    <div className='py-3'>
                        <h5 className="title">
                        Samsung 
                        </h5>
                        <h6 className="price">
                        ₹12000
                        </h6>
                    </div>
                </div>
                </div>
        </div>
        </div>
    </div>


    
    
    </>
  )
}

export default Wishlist