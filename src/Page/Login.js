import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from "../components/Meta";
import {Link} from "react-router-dom";
import Container from "../components/Container"
import CustomInput from  "../components/CustomInput"

const Login = () => {
  return (
    <>
    <Meta title = {"Login"}/>
    <BreadCrumb title = "Login"/>    

      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row ">
          <div className="col-12 ">
            <div className="auth-card ">
              <h3 className="title text-center mb-3">Login</h3>
              
              <form action="" className='d-flex flex-column gap-30'>
                <div>
                  <CustomInput type="email" name="email" placeholder='Email' className='form-control'/>
                </div>
                <div>
                <CustomInput type="password" name="password" placeholder='Password' className='form-control'/>
                </div>

                <div>
                  <Link to="/ForgotPassword">Forgot Your Password?</Link>
                </div>

                  <div className = "d-flex gap-15  justify-content-center">
                    <button className="button">
                      Login
                    </button>
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

export default Login