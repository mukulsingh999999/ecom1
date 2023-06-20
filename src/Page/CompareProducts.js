import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from "../components/Meta";
import productImage from "../images/watch.jpg"
import crossLogo from "../images/cross.svg"

import Container from "../components/Container"
import CompareItem from '../components/CompareItem';

import compitem1 from "../images/iphone14pro.jpg"
import compitem2 from "../images/galaxys22ultra.jpg"
import compitem3 from "../images/xiamo12tpro.jpg"



const CompareProducts = () => {
  return (
    <>
      <Container class1="compare-product-wrapper py-5 home-wrapper-2">
        <div className="row gap-50">
          <div className="d-flex justify-content-between">
          <CompareItem img={compitem1} brand="Apple iphone14 pro" camera="20mp" screen="5.5" ram="8gb" battery="3500 mah" price="₹120000"/>
          <CompareItem img={compitem2} brand="Samsung galaxy S22 ULTRA" camera="108mp" screen='5.9' ram="12gb" battery="4500 mah" price="₹107000"/>
          <CompareItem img={compitem3} brand="Xiomi 13 PRO" camera="108mp" screen='5.7' ram="12gb" battery="5000 mah" price="₹80000"/>
          </div>
        </div>
      </Container>
      
    </>
  )
}

export default CompareProducts