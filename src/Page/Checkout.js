import React from 'react'
import { Link } from 'react-router-dom';
import {BiArrowBack} from "react-icons/bi";
import watch from "../images/watch.jpg"
import Container from "../components/Container"

const Checkout = () => {
  return (
    <>
    <Container class1="checkout-wrapper">
        <div className="row">
                    <div className="col-7">
                        <div className="checkout-left-data py-5">
                            <h3 className="website-name">Dev Corner</h3>
                            {/* <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Library</li>
                                </ol>
                                </nav> */}
                                <h4 className="title">Contact Information</h4>
                            
                                <p className="user-details">NAvdeep dahiya mukulsingh2276@gmail.com</p>
                                <h4 className='py-3'>Shipping Address</h4>
                                <form action="" className='d-flex flex-wrap justify-content-between gap-15'>
                                    <div className="w-100">
                                        <select className="form-control form-select" name="" id="">
                                            <option value="" selected disabled>Select Country</option>
                                        </select>
                                    </div>

                                    <div className="flex-grow-1">
                                        <input type="text" className='form-control' placeholder='first name' />
                                    </div>
                                    <div className="flex-grow-1">
                                        <input type="text" className='form-control' placeholder='last name' />
                                    </div>  
                                    <div className="w-100">
                                        <input type="text" className="form-control" placeholder='Address' />
                                    </div>
                                    <div className="w-100">
                                        <input type="text" className="form-control" placeholder='Apartment'/>
                                    </div>
                                    <div className="flex-grow-1">
                                        <input type="text" className='form-control' placeholder='City' />
                                    </div>  
                                    <div className="flex-grow-1">
                                        <select name="" id="" className="form-control form-select">
                                            <option value=""selected disabled>Select State</option>
                                        </select>
                                    </div>
                                    <div className="flex-grow-1">
                                        <input type="text" className='form-control' placeholder='Zip Code' />
                                    </div>
                                    <div className="w-100 mt-4">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <Link to = "/cart" className="text-dark"><BiArrowBack className="me-2"/> Return to Cart</Link>
                                            <Link to = "/cart" className="button">Continue Shopping</Link>
                                        </div>
                                    </div>




                                </form>
                        </div>
                    </div>

                    <div className="col-5 py-5">
                        
                        <div className='border-bottom py-4'>
                            <div className="d-flex gap-10">
                                <div className="w-75 d-flex gap-10">
                                    <div className="w-25 position-relative">
                                        <span style={{ top: "-10px", right:"2px"}} className='badge bg-secondary text-white rounded-circle position-absolute p-2'>
                                            1
                                        </span>
                                        <img className="img-fluid" src={watch} alt="productimage" />
                                    
                                    </div>
                                    <div>
                                        <h5 className="total">asdasd</h5>
                                        <p className='total-price'>asdasdasd</p>
                                    </div>
                                </div>

                                <div className='flex-grow-1'>
                                    <h5>₹10000</h5>
                                </div>

                            </div>

                        </div>
                        
                        <div className='d-flex align-items-center justify-content-between'>
                            <p className='total'>Subtotal</p>
                            <p className='total-price'>₹100</p>

                        </div>
                        <div className='d-flex align-items-center justify-content-between border-bottom'>
                            <p>Shipping</p>
                            <p className='total-price'>₹10000</p>

                        </div>

                        <div className="d-flex justify-content-between py-4">
                            <h4 className='total'>Total</h4>
                            <h4 className='total-price'>₹10100</h4>

                        </div>
                        
                    </div>


                </div>
        </Container>
    </>
  )
}

export default Checkout