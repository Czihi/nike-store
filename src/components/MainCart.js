import React from "react";
import nikeLogo from "../images/nikeLogo.png";
import CartProduct from "./CartProduct";
import Checkout from "./Checkout";
import {Link} from "react-router-dom";

const MainCart = (props) => {
    let products = [];
    for (const product in props.cart) {
        products.push(<CartProduct
            key={product}
            id={props.cart[product].id}
            source={props.cart[product].source}
            name={props.cart[product].name}
            amount={props.cart[product].amount}
            price={props.cart[product].price}
            setState={props.setState}
            cart={props.cart}
        />);
    }

    return (<div className="shopping__main">
        <img className="nikeLogo noSelect nike" draggable={false} src={nikeLogo} alt="logo"/>
        <div className="shopping__group">
            <div className="productContainer">
                {products}
                <div className="total__group">
                    <Link className="continue" to={"/Nike-store"}>
                        <div>← Continue Shopping</div>
                    </Link>
                    <div className="shopping__total">Subtotal:
                        <div className="shopping__total--price">${props.subtotal}</div>
                    </div>
                </div>
            </div>
            <Checkout
            setState={props.setState}
            />
        </div>
    </div>)
};
export default MainCart