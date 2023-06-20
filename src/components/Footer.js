import React from 'react';
import { Link } from 'react-router-dom';
import {BsInstagram,BsYoutube,BsGithub } from "react-icons/bs";
import PrivacyPolicy from '../Page/PrivacyPolicy';
import RefundPolicy from '../Page/RefundPolicy';
import ShippingPolicy from '../Page/ShippingPolicy';
import Terms from "../Page/Terms";
import newsletterLogo from "../images/newsletter.png"
import CustomInput from  "../components/CustomInput"


const Footer = () => {
  return (
    <>
    <footer className='py-4'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-5">
            <div className="footer-top-data d-flex align-items-center gap-30">
              <img src={newsletterLogo} alt="newsletter" />
              <h2 className='text-white mb-0'>Sign Up For Newsletter</h2>
            </div>
          </div>
          <div className="col-7 d-flex">
              {/* <CustomInput type="text" 
                classname="form-control" 
                placeholder="Your email" /> */}
                <input type="text" 
                class="form-control" 
                placeholder="Your email" 
                />
              <span className='input-group-text p-2 id=basic-addon2'>
              Subscribe</span>
          </div>


        </div>
      </div>
    </footer>
    <footer className='py-3'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-4 text-white">
            <h4>Contact Us</h4>

            <div className="footer-links d-flex flex-column">
              <adress className="text-white">
                Hno : 277 Kamaluwaganja, <br/> Haldwani, <br/>Uttarakhand (263139)
              </adress>
              <a className = "text-white mt-4" href="tel:+91 9876543210">+91 9808273072</a>
               <a href="mailto:mukulsingh2276@gmail.com" className='text-white mt-4 '>
                mukulsingh2276@gmail.com
               </a>
               <div className="social-icons align-items-center gap-30 d-flex mt-3">
                <a className = "text-white" href="">
                  <BsInstagram className='fs-4'/>
                </a>

                <a className = "text-white" href="">
                  <BsYoutube className='fs-4'/>
                </a>

                <a className = "text-white" href="">
                  <BsGithub className='fs-4'/>
                </a>


               </div>





              </div>
          </div>
          <div className="col-3 text-white">
            <h4>
              Information
            </h4>
            <div className="footer-links d-flex flex-column">
              <Link to="/PrivacyPolicy"  onClick={()=>{window.scroll(0,0)}} className="text-white py-2 ">Privacy Policy</Link>
              <Link to="/RefundPolicy"  onClick={()=>{window.scroll(0,0)}} className="text-white py-2">Refund Policy </Link>
              <Link to="/ShippingPolicy"  onClick={()=>{window.scroll(0,0)}} className="text-white py-2">Shipping Policy</Link>
              {/* <Link to = "/Terms" className="text-white py-2">Terms and Conditions</Link> */}

            </div>
          </div>
          <div className="col-3 text-white">
            <h4>
              Account
            </h4>
            <div className="footer-links d-flex flex-column">
              <Link className="text-white py-2 " onClick={()=>{window.scroll(0,0)}} >About Us</Link>
              <Link to="/FAQ" className="text-white py-2" onClick={()=>{window.scroll(0,0)}} >FAQ</Link>
              <Link to="/Contact" className="text-white py-2" onClick={()=>{window.scroll(0,0)}} >Contact</Link>

            </div>
          </div>
          <div className="col-2 text-white">
            <h4>
              Quick-Links
            </h4>
            <div className="footer-links d-flex flex-column">
              <Link className="text-white py-2 " onClick={()=>{window.scroll(0,0)}} >Laptops</Link>
              <Link className="text-white py-2" onClick={()=>{window.scroll(0,0)}} >Headphones</Link>
              <Link className="text-white py-2" onClick={()=>{window.scroll(0,0)}} >Tablets</Link>
              <Link className="text-white py-2" onClick={()=>{window.scroll(0,0)}} >Watch</Link>
            </div>

          </div>
        </div>
      </div>
    </footer>
    <footer className='py-3'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className="text-center mb-0 text-white">
              &copy;{new Date().getFullYear()}: Powered by Developer's Corner
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer