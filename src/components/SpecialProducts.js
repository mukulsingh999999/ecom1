import React from 'react';
import {Link} from "react-router-dom"
////////////////////////////////////////

const SpecialProducts = (props) => {
  return ( 
    <>
    <div className="col-3">
        <div className="special-product-card">
            <div className="d-flex justify-content-between">
              <Link to="/singleproduct" onClick={()=>{window.scroll(0,0)}} >
                <img src={props.img} alt="watch" />
              </Link>
            </div>
        </div>
    </div>

    </>
  )
}

export default SpecialProducts