import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from "../components/Meta";
import Container from "../components/Container"
import Wishlistitem from '../components/Wishlistitem';
import wishlistProduct1 from "../images/s22ultra.jpg"
import wishlistProduct2 from "../images/iq9t.jpg"
import wishlistProduct3 from "../images/mi11pro.jpg"


const Wishlist = () => {
  return (
    <>
    <Meta title = {"Wishlist"}/>
    <BreadCrumb title = "Wishlist"/>

     <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
            <div className="col-12">
                <div className="d-flex justify-content-center gap-30">
                 <Wishlistitem img={wishlistProduct1} brand="Samsung" price="₹89,990"/>
                <Wishlistitem img={wishlistProduct2} brand="IQoo" price="₹44,999"/>
                <Wishlistitem img={wishlistProduct3} brand="Xiaomi" price="₹33,500" className="wishitem3"/>
                </div>
            </div>
        </div>

    </Container>
   


    
    
    </>
  )
}

export default Wishlist