import React from 'react'
import Container from "../components/Container"

const FAQ = () => {
  return (
    <>
       <Container class1="policy-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-center">
              <div className="policy col-8">
                <h3 className='privacy-head'>
                     FAQs about Orders and Deliveries during COVID-19
                </h3>              
                <h6 className='py-3 disclaimer border-bottom'>
                As per government guidelines, we are accepting orders for all products across the country and for essential products in restricted areas. 
                </h6>                
                <p className="text-dark">
                Last updated: August 11, 2022.
                </p>
                <p className="para9 py-2">
                  <ol>
                    <li className="text-dark faqq"> Are you delivering non-essential products?<br /></li>
                    <p className="faqans py-1">

                    As per government guidelines, we are accepting orders for all products. For any location designated as a restricted zone under regulations, we may limit orders to essential products.
                    </p>
                    <li className='text-dark faqq'> Can I place orders using Pay on Delivery (Cash/SMS Pay link)?</li>
                    <p className="faqans py-1">
                    We accept Cash/Pay on Delivery in most locations. If your location is eligible for Pay on Delivery, you will see the option on the payment page while ordering. For restricted zone, we will continue to accept only pre-paid orders.

                    </p>
                    <li className='text-dark faqq'>I have already placed an order, but it is showing a long delivery date?</li>
                    <p className="faqans py-1">
                    We are following the latest Government guidelines. The delivery timeline may be impacted due to local restrictions.

                    </p>
                     <li className='text-dark faqq'>  Can I still create returns for my orders?</li>
                     <p className="faqans py-1">

                     Yes, you can create returns by visiting Your Orders. However, the return pick up timeline may be longer than usual if movement of goods and person is restricted in your area.
                     </p>
                    <li className='text-dark faqq'> What is No-Contact delivery?</li>
                    <p className="faqans py-1">
                    Based on regional regulations and social distancing requirements, the delivery associate will leave your order at the doorstep and maintain a 2-meter distance. 
                    </p>   
                   </ol>
                  </p>                       
              </div>
            </div>
          </div>
          </div>
        </Container>
    </>
  )
}

export default FAQ