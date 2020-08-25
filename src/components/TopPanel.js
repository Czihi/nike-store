import React from "react";
import nikeLogo from "../images/nikeLogo.png";
import cart from "../images/cart.png";

const TopPanel= ()=>{


    return(<div className="top-panel">
        <img className="nikeLogo noSelect" draggable={false} src={nikeLogo} alt="logo"/>
            <div className="groupCart">
                <h3 className="cart">Cart</h3>
                <img className="cartIcon noSelect" draggable={false} src={cart} alt="cart"/>
            </div>
        </div>
    )
};
export default TopPanel