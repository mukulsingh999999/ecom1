import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import About from "./Page/About";
import Layout from "./components/Layout";
import Home from "./Page/Home";
import Contact from "./Page/Contact";
import Error from "./Page/Error";
import "./App.css";
import OurStore from "./Page/OurStore";
import CompareProducts from "./Page/CompareProducts";
import Wishlist from "./Page/Wishlist";
import Login from "./Page/Login"
import ForgotPassword from "./Page/ForgotPassword";
import SignUp from "./Page/Signup";
import ResetPassword from "./Page/ResetPassword";
import PrivacyPolicy from "./Page/PrivacyPolicy";
import Terms from "./Page/Terms";
import ShippingPolicy from "./Page/ShippingPolicy";
import RefundPolicy from "./Page/RefundPolicy";
import SingleProduct from "./Page/SingleProduct";
import Cart  from "./Page/Cart";
import Checkout from "./Page/Checkout";




const App = () => {
  return(
  <>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Layout />}>
      <Route index element = {<Home />}/>
      <Route path = "about" element = {<About />} />
      <Route path = "Contact" element = {<Contact/>} />
      <Route path = "*" element = {<Error/>} />
      <Route path = "product" element = {<OurStore/>} />
      <Route path = "/:id" element = {<SingleProduct/>} />
      <Route path = "compareproducts" element = {<CompareProducts/>} />
      <Route path = "wishlist" element = {<Wishlist/>} />
      <Route path = "login" element = {<Login/>} />
      <Route path = "forgotpassword" element = {<ForgotPassword/>} />
      <Route path = "signup" element = {<SignUp/>} />
      <Route path = "resetpassword" element = {<ResetPassword/>} />
      <Route path = "privacypolicy" element = {<PrivacyPolicy/>} />
      <Route path = "shippingpolicy" element = {<ShippingPolicy/>} />
      <Route path = "refundpolicy" element = {<RefundPolicy/>} />
      <Route path = "terms" element = {<Terms/>} />
      <Route path = "cart" element = {<Cart/>} />
      <Route path="checkout" element={<Checkout/>}></Route>



      </Route>
    </Routes>
    </BrowserRouter>
  
  </>
  );
}

export default App;
