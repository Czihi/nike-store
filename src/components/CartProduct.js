import React from "react";
import nikeShoes1 from "../images/nikeShoes1.png"
import nikeShoes2 from "../images/nikeShoes2.png"
import nikeShoes3 from "../images/nikeShoes3.png"
const CartProduct = (props) => {
    const images={"nikeShoes1": nikeShoes1, "nikeShoes2":nikeShoes2, "nikeShoes3":nikeShoes3};
    function deleteFromCart(product) {
        document.getElementById(product).remove();
    }
    return (<div id={"product"+props.id} className="product">
                <img className="product__image" src={images[props.source]} alt="product"/>
                <div className="product__name">{props.name}</div>
                <div className="product__amount">
                <input id={"amount"+props.id} placeholder={props.amount} type="number" min="1" className="product__amount--input"/>
                </div>
                <div className="product__price">${props.price}</div>
                <div onClick={()=>deleteFromCart("product"+props.id)} className="product__cancel">✖</div>
            <hr className="product__line"/>
        </div>
    )
};

export default CartProduct;