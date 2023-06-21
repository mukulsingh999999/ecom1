import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from "../components/Meta";
import cartproduct1 from "../images/s22ultra.jpg"
import cartproduct2 from "../images/iphone14pro.jpg"
import cartproduct3 from "../images/oneplus10pro.jpg"


import {AiFillDelete} from "react-icons/ai"
import { Link } from 'react-router-dom';
import Container from "../components/Container"

const Cart = () => {
  return (
    <>
    <Meta title = {"Cart"}/>
    <BreadCrumb title = "Cart"/>  

    <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
                    <div className="col-12">

                        <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                            <div className="cart-col-1">Product</div>
                            <div className="cart-col-2">Price</div>
                            <div className="cart-col-3">Quantity</div>
                            <div className="cart-col-4">Total</div>
                        </div>

                        <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">

                            <div className="cart-col-1 d-flex align-items-center gap-15">
                                <div className='w-35'>
                                    <img src={cartproduct1} className= "img-fluid" alt="productimage" />
                                </div>
                                <div className='w-75'>
                                    <h5 className='title'></h5>
                                    <p className="color"></p>
                                    <p className="size"></p>
                                </div>
                            </div>

                            <div className="cart-col-2">
                                <h5 className="price">$10000</h5>
                            </div>

                            <div className="cart-col-3 d-flex gap-15 align-items-center">
                                <div>
                                    <input type="number" 
                                    
                                    className="form-control"
                                    name=""
                                    id=""
                                    min={1}
                                    max={10}
                                    />
                                </div>
                                <div>
                                 <AiFillDelete className = "text-danger "/>
                                </div>
                            </div>

                            <div className="cart-col-4">
                                <h5 className="price">₹10000</h5>
                            </div>
                        </div>

                        <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">

                            <div className="cart-col-1 d-flex align-items-center gap-15">
                                <div className='w-35'>
                                    <img src={cartproduct2} className= "img-fluid" alt="productimage" />
                                </div>
                                <div className='w-75'>
                                    <h5 className='title'></h5>
                                    <p className="color"></p>
                                    <p className="size"></p>
                                </div>
                            </div>

                            <div className="cart-col-2">
                                <h5 className="price">$10000</h5>
                            </div>

                            <div className="cart-col-3 d-flex gap-15 align-items-center">
                                <div>
                                    <input type="number" 
                                    
                                    className="form-control"
                                    name=""
                                    id=""
                                    min={1}
                                    max={10}
                                    />
                                </div>
                                <div>
                                <AiFillDelete className = "text-danger "/>
                                </div>
                            </div>

                            <div className="cart-col-4">
                                <h5 className="price">₹10000</h5>
                            </div>
                        </div>

                        <div className="col-12 py-2 py-5">
                            <div className="d-flex justify-content-between">
                                <Link className="button">
                                    Continue Shopping
                                </Link>

                                <div className="d-flex flex-column align-items-end gap-15">
                                    <h4>SubTotal: ₹10000</h4>
                                    <Link to="/checkout" className='button'>Checkout</Link>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>
    </Container>
    
    </>
  )
}

export default Cart