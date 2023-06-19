import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from "../components/Meta";
import {Link} from "react-router-dom"
import Container from "../components/Container"


const ForgotPassword = () => {
  return (
    <>
    <Container class1="login-wrapper home-wrapper-2 py-5">
      <div className="row ">
        <div className="col-12 ">
          <div className="auth-card ">
            <h3 className="title text-center mb-3">Reset Your Password</h3>
            <p className="text-center mb-4">We will send you an e-mail to reset your password</p>
             <form action="" className='d-flex flex-column gap-30'>
              <div>
                <input type="email" name="email" placeholder='Email' className='form-control'/>
              </div>
           
                <div className = "d-flex gap-15 flex-column align-items-center">
                  <button className="button" type="submit" formAction='/ResetPassword'>
                    Submit
                  </button>
                  <Link to= "/Login" className="Cancel">
                    Cancel
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

export default ForgotPassword