import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from "../components/Meta";
import Container from "../components/Container"

const ShippingPolicy = () => {
  return (
    <><Meta title = {"ShippingPolicy"}/>
    <BreadCrumb title = "ShippingPolicy"/>
      
      <Container class1="policy-wrappe py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy">
              
            </div>
          </div>
        </div>
      </Container>
 
    </>
  )
}

export default ShippingPolicy