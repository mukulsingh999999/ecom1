import React from 'react';
import ReactStars from 'react-stars';
import {Link} from "react-router-dom";

const ProductCard = () => {
  return (
    <>
    <div className="col-3">
        <div className="product-card position-relative">

            <div className="wishlist-icon position-absolute">
                <Link>
                  <img src="images/wish.svg" alt="wishlist" />
                </Link>
            </div>

            <div className="product-image">
                <img src="images/watch.jpg" alt="productimage" />
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
                        <img src="images/prodcompare.svg" alt="compare" />
                        </Link>
                        <Link>
                        <img src="images/view.svg" alt="view" />
                        </Link>
                        <Link>
                        <img src="images/add-cart.svg" alt="add-cart"/>
                        </Link>

                    </div>   

                </div>

            </div>
        </div>
    </div>
    
    
    
    </>
  )
}

export default ProductCard