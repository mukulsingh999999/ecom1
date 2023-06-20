import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from "../components/Meta";
import Container from "../components/Container"

const PrivacyPolicy = () => {
  return (
    <>
        <Meta title = {"PrivacyPolicy"}/>
       <BreadCrumb title = "PrivacyPolicy"/>

        <Container class1="policy-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-center">
              <div className="policy col-8">
                <h3 className='privacy-head'>
                  Amazon.in Privacy Notice
                </h3>              
                <h6 className='py-3 disclaimer border-bottom'>
                  Disclaimer: In the event of any discrepancy or conflict, the English version will prevail over the translation.
                </h6>                
                <p className="text-dark">
                Last updated: August 11, 2022.
                </p>
                <p className='para1'>
                We know that you care how information about you is used and shared, and we appreciate your trust that we will do so carefully and sensibly. This Privacy Notice describes how Amazon Seller Services Private Limited and its affiliates including Amazon.com, Inc. (collectively "Amazon") collect and process your personal information through Amazon websites, devices, products, services, online marketplace and applications that reference this Privacy Notice (together "Amazon Services").
                </p>
                <p className="para2 py-2">
                By using Amazon Services you agree to our use of your personal information (including sensitive personal information) in accordance with this Privacy Notice, as may be amended from time to time by us at our discretion. You also agree and consent to us collecting, storing, processing, transferring, and sharing your personal information (including sensitive personal information) with third parties or service providers for the purposes set out in this Privacy Notice.
                </p>
                  <p className="para3 py-2">
                Personal information subject to this Privacy Notice will be collected and retained by Amazon, with a registered office at 8th floor, Brigade Gateway 26/1 Dr. Rajkumar Road Bangalore Karnataka 560055 India.
                </p>

                <h3 className='para-head py-2'>
                    What Personal Information About Customers Does Amazon Collect?
                </h3>
                <p className="para4 py-2">
                </p>
                  We collect your personal information in order to provide and continually improve our products and services.
                <p className="para5 py-2">
                    Here are the types of personal information we collect:                  
                </p>
                <p className="para6 py-2">
                Information You Give Us: We receive and store any information you provide in relation to Amazon Services. Click here to see examples of what we collect. You can choose not to provide certain information, but then you might not be able to take advantage of many of our Amazon Services.                 
                </p>
                <p className="para7 py-2">
                  Automatic Information: We automatically collect and store certain types of information about your use of Amazon Services, including information about your interaction with content and services available through Amazon Services. Like many websites, we use cookies and other unique identifiers, and we obtain certain types of information when your web browser or device accesses Amazon Services and other content served by or on behalf of Amazon on other websites. Click here to see examples of what we collect.                  
                </p>
                <p className="para8 py-2">
                Information from Other Sources: We might receive information about you from other sources, such as updated delivery and address information from our carriers, which we use to correct our records and deliver your next purchase more easily. Click here to see additional examples of the information we receive
                </p>

                <h3 className='para-head py-2'>
                    For What Purposes Does Amazon Use Your Personal Information?
                </h3>
                <p className="para9 py-2">
                We use your personal information to operate, provide, develop, and improve the products and services that we offer our customers. These purposes include:
                </p>
                <p className="para9 py-2">
                  <ul>
                    <li>Purchase and delivery of products and services. We use your personal information to take and fulfill orders, deliver products and services, process payments, and communicate with you about orders, products and services, and promotional offers.</li>
                    <li>Provide, troubleshoot, and improve Amazon Services. We use your personal information to provide functionality, analyze performance, fix errors, and improve the usability and effectiveness of the Amazon Services.</li>
                    <li>Recommendations and personalization. We use your personal information to recommend features, products, and services that might be of interest to you, identify your preferences, and personalize your experience with Amazon Services.</li>
                    <li>Provide voice, image and camera services. When you use our voice, image and camera services, we use your voice input, images, videos, and other personal information to respond to your requests, provide the requested service to you, and improve our services</li>
                    <li>Comply with legal obligations. In certain cases, we collect and use your personal information to comply with laws. For instance, we collect from sellers information regarding place of establishment and bank account information for identity verification and other purposes.</li>
                    <li>Communicate with you. We use your personal information to communicate with you in relation to Amazon Services via different channels (e.g., by phone, e-mail, chat).</li>
                    <li>Advertising. We use your personal information to display interest-based ads for features, products, and services that might be of interest to you. We do not use information that personally identifies you to display interest-based ads. To learn more, please read our Interest-Based Ads notice.</li>

                   </ul>
                  </p>

              
              </div>
            </div>
          </div>
          </div>
        </Container>
    
    </>
  )
}

export default PrivacyPolicy