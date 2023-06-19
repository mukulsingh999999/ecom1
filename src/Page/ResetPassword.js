import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from "../components/Meta";
import {Link} from "react-router-dom";
import Container from "../components/Container"


const ResetPassword = () => {
  return (
    <>
    <Meta title = {"ResetPassword"}/>
    <BreadCrumb title = "ResetPassword"/>  
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row ">
          <div className="col-12 ">
            <div className="auth-card ">
              <h3 className="title text-center mb-3">Reset Password</h3>
              <form action="" className='d-flex flex-column gap-30'>
                <div>
                  <input type="password" name="newpassword" placeholder='New Password' className='form-control'/>
                </div>
                <div>
                  <input type="password" name="confirmpassword" placeholder='Confirm Password' className='form-control'/>
                </div>

                  <div className = "d-flex gap-15  justify-content-center">
                    <button className="button">
                      OKAY
                    </button>

                  </div>


              </form>
            </div>
          </div>
        </div>
      </Container>
  
    </>
  )
}

export default ResetPassword