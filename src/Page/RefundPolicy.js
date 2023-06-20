import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from "../components/Meta";
import Container from "../components/Container"

const RefundPolicy = () => {
  return (
    <>
      <Container class1="policy-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-center">
              <div className="policy col-8">
                <h3 className='privacy-head'>
                  Amazon.in Returns Policy
                </h3>              
                <h6 className='py-3 disclaimer border-bottom'>
                  Disclaimer: In the event of any discrepancy or conflict, the English version will prevail over the translation.
                </h6>                
                <p className="text-dark">
                Last updated: August 11, 2022.
                </p>
                <p className='para1'>
                Most items purchased from sellers listed on Amazon.in are returnable within the return window, except those that are explicitly identified as not returnable. 
                </p>
                <p className="para2 py-2">
                By using Amazon Services you agree to our use of your personal information (including sensitive personal information) in accordance with this Privacy Notice, as may be amended from time to time by us at our discretion. You also agree and consent to us collecting, storing, processing, transferring, and sharing your personal information (including sensitive personal information) with third parties or service providers for the purposes set out in this Privacy Notice.
                </p>
                  <p className="para3 py-2">
                Personal information subject to this Privacy Notice will be collected and retained by Amazon, with a registered office at 8th floor, Brigade Gateway 26/1 Dr. Rajkumar Road Bangalore Karnataka 560055 India.
                </p>

                <h3 className='para-head py-2'>
                    General Returns Policy
                </h3>        
                <p className="para9 py-2">
                  <ol>
                    <li>Applicable products are returnable within the applicable return window if you’ve received them in a condition that is physically damaged, has missing parts or accessories, defective or different from their description on the product detail page on Amazon.in..</li>
                    <li>If you report an issue with your Smartphone, Tablet, Laptop, Television, Air Conditioner, Refrigerator, Washing Machine, Microwave, we may facilitate scheduling a technician visit to your location. This visit is scheduled by placing an order with Amazon through Amazon.in Home Services. Subject to Amazon.in Home Services Terms and Conditions, a resolution will be provided based on the technician's evaluation report</li>
                    <li>Return will be processed only if: 
                        it is determined that the product was not damaged while in your possession;
                        the product is not different from what was shipped to you;
                        the product is returned in original condition (with brand’s/manufacturer's box, MRP tag intact, user manual, warranty card and all the accessories therein).</li>
                    <li>If you wish to return an electronic device that stores any personal information, please ensure that you have removed all such personal information from the device prior to returning. Amazon shall not be liable in any manner for any misuse or usage of such information.</li>
                    <li>Products may not be eligible for return in some cases, including cases of buyer's remorse such as incorrect model or color of product ordered or incorrect product ordered.</li>
                    <li>Products marked as "non-returnable" on the product detail page cannot be returned. However, in an unlikely event of damaged, defective or wrong item delivered to you, we will provide a full refund or replacement, as applicable. We may contact you to ascertain the damage or defect in the product prior to issuing refund/replacement. We reserve the right to pick up the product to ascertain the damage or defect in the product prior to issuing refund/replacement.</li>
                    <li>No additional information is required to return an eligible order unless otherwise noted in the category specific policy. </li>

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

export default RefundPolicy;