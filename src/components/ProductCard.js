import React from 'react';
import ReactStars from 'react-stars';
import {Link, useLocation} from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import phone1 from "../images/iphone14pro.jpg";
import phone2 from "../images/galaxys22.jpg";
import phone3 from "../images/galaxys22ultra.jpg";
import phone4 from "../images/xiamo12tpro.jpg";




const ProductCard = (props) => {
    
  return (
    <>
            
                <div className="col-3">
                    <div className="product-card ">
                        <div className="wishlist-icon position-relative">
                            <Link>
                            <img src={wish} alt="wishlist" />
                            </Link>
                        </div>

                    <div className="product-image">
                        <Link to="/singleproduct"  onClick={()=>{window.scroll(0,0)}}>

                        <img src={props.img} alt="productimage" />
                        </Link>
                     </div>

                    <div className="product-details p-4">
                      <h6 className="brand">{props.title}</h6>
                        <ReactStars
                            count={5}
                            size={24}
                            value="4.5"
                            edit={false}
                            activeColor="--ffd700"
                            />
                     <p className="price">{props.price} </p>
                    </div>

                     {/* <div className="action-bar position-relative">
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
                            
                        </div> */}
               </div>
            </div>

    </>
  )
}

export default ProductCard