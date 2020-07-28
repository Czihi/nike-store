import React from "react";
import arrow from "../images/arrow.png"
import cart from "../images/cart.png"
const Info = ()=>{
    return(
        <div className="info">
            <div className="groupCart">
            <h3 className="cart">Cart</h3>
            <img className="cartIcon" src={cart} alt="cart"/>
            </div>
            <h3 className="shoeName">Nike Airforce</h3>
            <h4 className="price">$80</h4>
            <br/>
            <h6 className="desc">From high-top to low-top. Live the legend of the Air Force 1, modernized for ultimate street style.</h6>
            <br/>
            <button className="addToCart">Add to cart</button>
            <img className="arrowLeft" src={arrow} alt="left"/>
            <img className="arrowRight" src={arrow} alt="right"/>
        </div>
    )
};
export default Info