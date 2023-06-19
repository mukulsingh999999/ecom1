import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from "../components/Meta";
import {Link} from "react-router-dom";
import Container from "../components/Container"
import CustomInput from  "../components/CustomInput"
import { useFormik } from 'formik';
import * as yup from 'yup';

const signupSchema = yup.object({
  firstname: yup.string().required("First Name is required"),
  lastname: yup.string().required('Last name is required'),
  email: yup.string().required().email("Email should be valid"),
  mobile: yup.string().required("Mobile no is reqired"),
  password: yup.string().required("Password is reqired"),
});

const Signup = () => {

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      mobile:'',
      password:'',
    },
    validationSchema:signupSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
    <Meta title = {"SignUp"}/>
    <BreadCrumb title = "SignUp"/>    
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row ">
          <div className="col-12 ">
            <div className="auth-card ">
              <h3 className="title text-center mb-3">Sign Up</h3>
              <form action="" onSubmit={formik.handleSubmit} className='d-flex flex-column gap-15'>
                <div>
                    <CustomInput type="text" name="firstname" placeholder='First Name'
                      value={formik.values.firstname} onChange={formik.handleChange("firstname")} onBlur={formik.handleBlur("firstname")}/>
                    <div className="error">
                      {formik.touched.firstname && formik.errors.firstname}
                    </div>
                </div> 

                <div>
                    <CustomInput type="text" name="lastname" placeholder='last Name'
                      value={formik.values.lastname} onChange={formik.handleChange("lastname")} onBlur={formik.handleBlur("lastname")}/>
                    <div className="error">
                      {formik.touched.lastname && formik.errors.lastname}
                    </div>
                </div> 

                <div>
                    <CustomInput type="tel" name="mobile" placeholder='mobile'
                      value={formik.values.mobile} onChange={formik.handleChange("mobile")} onBlur={formik.handleBlur("mobile")}/>
                    <div className="error">
                      {formik.touched.mobile && formik.errors.mobile}
                    </div>
                </div> 

                <div>
                    <CustomInput type="email" name="email" placeholder='email'
                      value={formik.values.email} onChange={formik.handleChange("email")} onBlur={formik.handleBlur("email")}/>
                    <div className="error">
                      {formik.touched.email && formik.errors.email}
                    </div>
                </div> 

                <div>
                    <CustomInput type="password" name="password" placeholder='password'
                      value={formik.values.password} onChange={formik.handleChange("password")} onBlur={formik.handleBlur("password")}/>
                    <div className="password">
                      {formik.touched.password && formik.errors.password}
                    </div>
                </div>

                  <div className = "d-flex gap-15  justify-content-center">
                      <button className="button">Sign Up</button>
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