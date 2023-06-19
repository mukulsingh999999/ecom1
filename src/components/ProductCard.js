import React from 'react';
import ReactStars from 'react-stars';
import {Link, useLocation} from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import watch from "../images/watch.jpg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";


const ProductCard = () => {
    
  return (
    <>
    <div className="col-3">
        <Link to="/:id" className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <Link>
                  <img src={wish} alt="wishlist" />
                </Link>
            </div>

            <div className="product-image">
                <img src={watch} alt="productimage" />
            </div>
            <div className="product-details p-4">
                <h6 className="brand">Havells</h6>
                <h5 className="product-title">Kids</h5>
                <ReactStars
                 count={5}
                 size={24}
                 value="4.5"
                 edit={false}
                 activeColor="--ffd700"
                />
                <p className="price">₹79999</p>

                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-15">
                        <Link>
                        <img src={prodcompare} alt="compare" />
                        </Link>
                        <Link>
                        <img src={view} alt="view" />
                        </Link>
                        <Link>
                        <img src={addcart} alt="add-cart"/>
                        </Link>

                    </div>   

                </div>

            </div>
        </Link>
    </div>
    
    
    
    </>
  )
}

export default ProductCard