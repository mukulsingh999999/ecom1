import React from 'react'
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import {AiOutlineHome} from "react-icons/ai";
import {BiPhoneCall} from "react-icons/bi";
import {AiOutlineMail} from "react-icons/ai"
import {BiInfoCircle} from "react-icons/bi"


const Contact = () => {
  return (
    <>
    <Meta title={"Contact Us"}/>
    <BreadCrumb title="Contact Us"/>
    <div className="contact-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217.61693606731097!2d79.4200392833219!3d29.22734938023734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a09b741804a823%3A0xa39a9cda3746d800!2sAmrapali%20Institute%20of%20Hotel%20Management!5e0!3m2!1sen!2sin!4v1683556165667!5m2!1sen!2sin" width="600" height="450" className='border-0 w-100'  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between ">
              <div>
                <h3 className="contact-title mb-4">
                  Contact
                </h3>
                  <form action="" className='d-flex flex-column gap-15'>
                    <div>
                      <input type="text" className='form-control' placeholder='Name'/>
                    </div>
                    <div>
                      <input type="text" className='form-control' placeholder='Email'/>
                    </div> 
                    <div>
                      <input type="text" className='form-control' placeholder='Mobile'/>
                    </div>
                    <div>
                      <textarea name="" id="" cols="30" rows="10" className='form-control' placeholder='Comments'>

                      </textarea>
                    </div>
                  </form>
                    <button className='button border-0 mt-4'>
                      Submit
                    </button>
            </div>

              <div>
                <h3 className="contact-title">Get in touch with us</h3>
                <ul className="ps-0">
                  <li className="d-flex align-items-center gap-15 mb-3">
                    <AiOutlineHome/>
                    <address className='mb-0'>
                      Shiksha Nagar,Lamachaur, Haldwani
                    </address>
                    </li>
                  <li className="d-flex align-items-center gap-15 mb-3">
                    <BiPhoneCall/>
                    <a href="tel:+91 9876543210">+91 987654321</a>
                    </li>
                  <li className="d-flex align-items-center gap-15 mb-3">
                    <AiOutlineMail />
                    <a href="mailto:mukulsingh2276@gmail.com">mukulsingh2276@gmail.com</a>
                    </li>
                  <li className="d-flex align-items-center gap-15 mb-3">
                    <BiInfoCircle />
                    <p className="mb-0">Monday - Friday 10AM - 8PM</p>
                  </li>

                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
    
    </>
  )
}

export default Contact