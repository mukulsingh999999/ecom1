import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from "../components/Meta";
import Container from "../components/Container"

const ShippingPolicy = () => {
  return (
    <><Meta title = {"ShippingPolicy"}/>
    <BreadCrumb title = "ShippingPolicy"/>
    <Container class1="policy-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-center">
              <div className="policy col-8">
                <h3 className='privacy-head'>
                Fulfilled by Amazon and Prime Eligible Items
                </h3>              
                <h6 className='py-3 disclaimer border-bottom'>
                  Disclaimer: In the event of any discrepancy or conflict, the English version will prevail over the translation.
                </h6>                
                <p className="text-dark">
                Last updated: August 11, 2022.
                </p>
                <p className='para1'>
                Amazon.in offers Guaranteed Morning, Same-Day, One/Two-Day Delivery for certain products. Guaranteed Delivery is available in select cities for Prime eligible items. To learn more, see Terms and Conditions of Guaranteed delivery and Guaranteed Shipping Speeds and Costs.
                </p>
                <p className="para9 py-2">
                  <ul>
                    <li>Shipment cannot be expedited.</li>
                    <li>Shipping address cannot be modified after placing orders</li>
                    <li>The list below provides multiple delivery options to fulfill customer needs</li>
                    <li>We deliver orders placed with Standard Delivery in two or more days after they are shipped. You can check the estimated delivery date before ordering.</li>
                     <li> Standard Delivery charges are free for non-Prime members for orders ₹499 or more.</li>
                    <li>The applicable delivery charge is levied even for multiple quantities of the same product. The shipping fee per item structure is limited to standard and fast track speeds for Prime and non-Prime customers mentioned in the table above.</li>    
                   </ul>
                  </p>
                  <h3 className='privacy-head'>
                  Seller Fulfilled Items that Aren't Prime Eligible
                  </h3>
                  <p className="para9 py-2">
                  The seller ships these items directly. and determines the shipping speeds and costs. You can see these details before ordering.
                  </p>
                  <p className="para9 py-2">
                  Delivery charges (if any) apply to both Prime and non-Prime members. To know more, Contact a Marketplace Seller.
                  </p>
              </div>
            </div>
          </div>
          </div>
        </Container>


 
    </>
  )
}

export default ShippingPolicy