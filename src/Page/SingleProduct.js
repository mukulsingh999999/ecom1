import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from "../components/Meta";
import ProductCard from '../components/ProductCard';
import ReactStars from 'react-stars';
import ReactImageZoom from "react-image-zoom";
import { Link } from 'react-router-dom';
import {BiGitCompare} from "react-icons/bi";
import {AiOutlineShoppingCart} from "react-icons/ai"
import Container from "../components/Container"
import productImage from "../images/samsung-m04.jpg"

import fphone1 from "../images/iphone14pro.jpg";
import fphone2 from "../images/galaxys22.jpg";
import fphone3 from "../images/galaxys22ultra.jpg";
import fphone4 from "../images/xiamo12tpro.jpg";



const SingleProduct = (props) => {

    const{orderedProduct, setorderedProduct} = useState(true);
  return (
    <>
     <Meta title = {"Product Name"}/>
     <BreadCrumb title = "Product Name"/>
        <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">

            <div className="col-6">
                <div className="main-product-image home-wrapper-2 py-5">
                <div>
                        <img src={productImage} alt="samsung" />
                </div>

                </div>
            </div>
            <div className="col-6">
                <div className="main-product-details ">
                    <div className="border-bottom">
                        <h3 className="title py-2">Samsung Galaxy M04 Dark Blue, 4GB RAM, 64GB Storage | Upto 8GB RAM with RAM Plus | MediaTek Helio P35 Octa-core Processor | 5000 mAh Battery | 13MP Dual Camera</h3>

                    </div>
                    <div className="border-bottom py-2">
                        <p className="price">₹8,999</p>
                    <div className="d-flex align-items-center gap-10">
                    <ReactStars
                                count={5}
                                size={24}
                                value="4.5"
                                edit={false}
                                activeColor="--ffd700"/>
                    </div>
                    <a className = "review-btn py-2" href="#review">Write a review</a>
                    </div>
                    
                <div className="border-bottom py-4">
                    <div className="d-flex align-items-center gap-30">
                        <h3 className='product-heading'>Brand:</h3>  <p className='product-data'>Samsung</p>
                    </div>
                    <div className="d-flex align-items-center gap-15">
                        <h3 className='product-heading'>Model :</h3>  <p className='product-data'>SAMSUNG M04</p>
                    </div>
                    <div className="d-flex align-items-center gap-30">
                        <h3 className='product-heading'>OS:</h3>  <p className='product-data'>Android 12.0</p>
                    </div>
                    <div className="d-flex align-items-center gap-15">
                        <h3 className='product-heading'>Cellular Technology:</h3>  <p className='product-data'>4G</p>                            
                    </div>

                </div>
                <div className="border-bottom py-4">
                        <h5>About This Item</h5>
                        <ul className='About-item'>
                            <li>Powerful MediaTek Helio P35 Octa Core 2.3GHz with Android 12,One UI Core 4.1</li>
                            <li>13MP+2MP Dual camera setup- True 13MP (F2.2) main camera + 2MP (F2.4) | 5MP (F2.2) front came</li>
                            <li>16.55 centimeters (6.5-inch) LCD, HD+ resolution with 720 x 1600 pixels resolution, 269 PPI with 16M color</li>
                            <li>5000mAH lithium-ion battery, 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase</li>

                        </ul>
                        <div className="d-flex align-items-center gap-30 py-3">
                            <button className="button">
                                Buy Now
                            </button>
                            <Link to="/cart" className="button SignUp text-white">
                                Add to Cart
                            </Link>
                        </div>

                        <div className="d-flex align-items-center gap-15 py-3">
                            <div>
                                <a href=""><BiGitCompare className='fs-5 me-2'/>Add to Compare</a>
                            </div>
                            <div>
                                <a href=""><AiOutlineShoppingCart className='fs-5 me-2'/>Add To Wishlist</a>
                            </div>
                        </div>
                </div>
                </div>
            </div>
            </div>
        </Container>

    <section className="description-wrapper py-5 home-wrapper">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <h4>Description</h4>
                    <div className=" p-3">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, impedit officia tempore velit minus reiciendis recusandae consequatur officiis debitis explicabo ipsa molestias quasi accusamus maxime rem totam, laborum voluptas obcaecati itaque consequuntur cum! Ea rem possimus minima repellat, deserunt eius vel, animi ducimus accusamus neque quas beatae accusantium sequi quos quibusdam soluta, culpa odio asperiores fuga. Quibusdam suscipit nisi quae quisquam cum natus dolore fugit cumque voluptatibus, consequuntur minus veritatis iure fuga quas voluptas sed? Delectus ut, saepe reprehenderit vitae accusantium ad consectetur fugit sint eius, impedit at, totam quam reiciendis tempore accusamus quasi ratione repudiandae illum quidem sed libero?</p>
                    </div>
                </div>
            </div>

        </div>
    </section>




    <section className="review-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="review-inner-wrapper">
                        <div className="review-head d-flex justify-content-between align-items-end">
                            <div>
                                <h4 id="review" className='mb-2'>Customer Reviews</h4>
                                <div className="d-flex align-items-center gap-10 ">
                                    <ReactStars
                                    count={5}
                                    size={24}
                                    value="4.5"
                                    edit={false}
                                    activeColor="--ffd700"
                                    />
                                    <p className="mb-0">Based on 2 reviews</p>
                                </div>
                                {orderedProduct &&(
                                    <div>
                                        <a className = "text-dark text-decoration-underline" href="">Write a review</a>
                                    </div>
                                )
                            }
                            </div>
                        </div>
                        <div  className="review-form py-4">
                            <h4>Write a Review</h4>
                        <form action="" className='d-flex flex-column gap-15'>
                            <div>

                                    <ReactStars
                                    count={5}
                                    size={24}
                                    value="0"
                                    edit={true}
                                    activeColor="--ffd700"
                                    />
                            </div>
                            <div>
                            <textarea name="" id="" cols="30" rows="10" className='form-control' placeholder='Write a review'>
                            </textarea>
                            </div>

                            <div className='d-flex justify-content-end'>
                                <button className="button border-0">Submit</button>
                            </div>

                        </form>
                        </div>

                        <div className="reviews">
                            <div className="review">
                                <div className="d-flex align-items-center gap-10">
                                    <h6 className='mb-0'>Navdeep</h6>
                                    <ReactStars
                                    count={5}
                                    size={24}
                                    value="4.5"
                                    edit={false}
                                    activeColor="--ffd700"
                                    />
                                </div>
                                    <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui temporibus fugit sunt laboriosam quia consequatur voluptates necessitatibus totam? Obcaecati nam atque magni officia itaque, perspiciatis praesentium modi minus maxime illo.
                                    </p>

                        </div>
                        </div>

                        </div>
                    </div>
                </div>
            </div>

        </section>

    <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <h3 className="section-heading">Similar Products</h3>
                </div>
            </div>
            <div className="row py-4">
                <ProductCard title="Xiaomi 13 Pro (Ceramic Black, 12GB RAM 256GB Storage)" price = "₹79,999" img={fphone3} />
                <ProductCard title="Samsung Galaxy S22 Ultra 5G (Burgundy, 12GB, 256GB Storage)" price = "₹94,999" img={fphone4} />
                <ProductCard title="Apple iPhone 14 Pro (128 GB) - Space Black" price="₹1,19,999 " img={fphone1} />
                <ProductCard title="Samsung Galaxy S22 5G (Green, 8GB, 128GB Storage)" price = "₹62,999"  img={fphone2} />

            </div>
        </div>
      
    </section>

    
    
    
    
    </>
  )
}

export default SingleProduct