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
      <Route path = "store" element = {<OurStore/>} />
      <Route path = "compareproducts" element = {<CompareProducts/>} />
      <Route path = "wishlist" element = {<Wishlist/>} />
      <Route path = "login" element = {<Login/>} />
      <Route path = "forgotpassword" element = {<ForgotPassword/>} />





      </Route>
    </Routes>
    </BrowserRouter>
  
  </>
  );
}

export default App;
