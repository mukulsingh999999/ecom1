import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from "../components/Meta";
import {Link} from "react-router-dom";
import Container from "../components/Container"


const Signup = () => {
  return (
    <>
    <Meta title = {"SignUp"}/>
    <BreadCrumb title = "SignUp"/>    
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row ">
          <div className="col-12 ">
            <div className="auth-card ">
              <h3 className="title text-center mb-3">Sign Up</h3>
              <form action="" className='d-flex flex-column gap-30'>
              <div>
                  <input type="text" name="name" placeholder='Name' className='form-control'/>
                </div>
                <div>
                  <input type="tel" name="Phone" placeholder='Mobile' className='form-control'/>
                </div>
                <div>
                  <input type="email" name="email" placeholder='Email' className='form-control'/>
                </div>
                <div>
                  <input type="password" name="password" placeholder='Password' className='form-control'/>
                </div>


                  <div className = "d-flex gap-15  justify-content-center">
                    
                    <Link to="/SignUp" className="button SignUp text-white">
                      SignUp
                    </Link>

                  </div>


              </form>
            </div>
          </div>
        </div>
      </Container>
  
    </>
  )
}

export default Signup