import React from 'react'; 
import { Link,NavLink } from 'react-router-dom';
import {BsSearch} from "react-icons/bs"
import Cart from '../Page/Cart';
///////////////////////////////////////////
import compare from "../images/compare.svg";
import wishlist from "../images/wishlist.svg";
import user from "../images/user.svg";
import cart from "../images/cart.svg";
import menulogo from "../images/menu.svg";
///////////////////////////////////////////////


const Header = () => {
  return (
    <>
    <header className="header-top-strip py-3">
      <div className="container-xxl">
        <div className="row">
          <div className="col-6">
            <p className="text-white">
              Free Shipping Over $100 and Easy Returns
            </p>
          </div>
          <div className="col-6">
            <p className="text-white">
              Hotline : 
              {/* <a classname = "text-white" href = "tel:+91 312121212"> */}
              +91 312121212
              {/* </a> */}
            </p>
          </div>
       </div>
      </div>
    </header>

    <header className="header-upper py-3">
      <div className="container-xxl">
        <div className="row align-items-center">
          
          <div className="col-2">
            <h2>
            <Link className="text-white">
            Amazon
            </Link>
            </h2>
          </div>

          <div className="col-5">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search Product Here.." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
              <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2"><BsSearch/></span>
              </div>
            </div>
            </div>

            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link to = "/CompareProducts" className='d-flex align-items-center gap-10 text-white'>
                  <img src={compare} alt="compare" />
                  <p className='mb-0'>Compare <br/> Products</p>
                  </Link>
                </div>

                <div>
                  <Link to = "/Wishlist" className='d-flex align-items-center gap-10 text-white'>
                  <img src={wishlist} alt="wishlist" />
                  <p className='mb-0'>Favorites <br /> Wishlist</p>
                  </Link>
                </div>

                <div>
                  <Link to = "/Login" className='d-flex align-items-center gap-10 text-white'>
                  <img src={user} alt="user" />
                  <p className='mb-0'>Login <br />My Account</p>
                  </Link>
                </div>

                <div>
                  <Link className='d-flex align-items-center gap-10 text-white' to='/Cart'>
                  <img src={cart} alt="cart" />
                  <div className="d-flex flex-column">
                    <span className="badge bg-white text-dark">0</span>
                  </div>
                  </Link>
                </div>

              </div>
              </div>


          </div>
        </div>
    </header>

    <header className="header-bottom py-3">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="menu-bottom d-flex align-items-center gap-30">
              <div>
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle transparent-border-0 d-flex align-items-center gap-15" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src={menulogo} alt="menu" /><span className='me-5 d-inline-block'>Shop Categories</span> 
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><Link className="dropdown-item text-white" to="#">Action</Link></li>
                  <li><Link className="dropdown-item text-white" to="#">Another action</Link></li>
                  <li><Link className="dropdown-item text-white" to="#">Something else here</Link></li>
                </ul>
              </div>
              </div>
            <div className="menu-links">
              <div className='d-flex align-items-center gap-15 '>
                <NavLink to = "/">Home</NavLink>
                <NavLink to = "/ourstore">Our Store</NavLink>
                <NavLink to = "/Contact">Contact</NavLink>

                {/* <NavLink to = "/CompareProducts">CompareProducts</NavLink>
                <NavLink to = "/Wishlist">Wishlist</NavLink> */}



              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </header>

    </>
  );
};

export default Header;