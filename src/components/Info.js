import React from "react";
import arrow from "../images/arrow.png"
import arrowGray from "../images/arrowGray.png"
import Links from "./Links";
let id = 0;

const Info = (props) => {
    let productId=props.imageIndex;
    let products=props.products
    const arrowType = {true: arrow, false: arrowGray};
    let top = 25;
    function removeAlert(alertId){
        let alertToRemove = document.getElementById("alert"+alertId);
        if(alertToRemove!==null){
            alertToRemove.remove();
            top-=65;
            document.getElementById("addToCart").disabled=false;
            document.getElementById("addToCart").style.backgroundColor="black"
        }
    }
    function hideAlert(alertId) {
        let alertToHide=document.getElementById("alert"+alertId)
        if(alertToHide!==null){
            alertToHide.style.opacity=0;
        }
    }
    function removeAlertButton(alertId) {
        alertId-=1;
        let alert = document.getElementById("alert"+alertId);
        if(alert!==null) {
            alert.remove();
            top -= 65;
            document.getElementById("addToCart").disabled = false;
            document.getElementById("addToCart").style.backgroundColor = "black"
        }
    }

    function addToCart() {
        let productNotFound=true;
        let newCart=[...props.cart];
        for (const product in newCart){
            if(newCart[product].id===productId){
                newCart[product].amount+=1;
                props.setState({subtotal: props.subtotal+newCart[product].price})
                productNotFound=false;
                break;
            }
        }
        if(productNotFound) {
            newCart.push({
                id: productId,
                name: products[productId].name,
                price: products[productId].price,
                source: "nikeShoes" + productId,
                amount: 1
            });
            props.setState({subtotal: props.subtotal+products[productId].price})
        }
        props.setState({cart: newCart});
        let alert = document.createElement("div");
        alert.setAttribute("id", "alert" + id);
        alert.innerHTML="Added to cart!";
        alert.classList.add("alert");
        let button = document.createElement('BUTTON');
        button.innerHTML="✖";
        button.classList.add("alert__button");
        button.onclick= ()=> removeAlertButton(id);
        alert.appendChild(button);
        let alertDiv = document.getElementById("alertDiv");
        alertDiv.appendChild(alert);
        alert.style.top = top + "px";
        top += 65;
        document.getElementById("addToCart").disabled=true;
        document.getElementById("addToCart").style.backgroundColor="#555";
        setTimeout(removeAlert, 5000, id);
        setTimeout(hideAlert, 1000, id);
        id+=1;
    }


    return (
        <div className="info">
            <h3 id="shoeGradient" className="shoeName">{products[productId].name}</h3>
            <div className="group-info-links">
                <div className="left">
                    <h4 className="price">${products[productId].price}</h4>
                    <h6 className="desc">{products[productId].description}</h6>
                    <button id="addToCart" onClick={addToCart} className="addToCart">Add to cart</button>
                    <div className="group-buttons">
                        <img id="left" className="arrowLeft noSelect" draggable={false} src={arrowType[props.canGoLeft]}
                             onClick={()=>{props.changeIndex(-1)}} alt="left"/>
                        <img id="right" className="arrowRight noSelect" draggable={false}
                             src={arrowType[props.canGoRight]} onClick={()=>{props.changeIndex(1)}} alt="right"/>
                    </div>
                </div>
                <div className="right">
                    <Links/>
                </div>
            </div>
        </div>
    )
};
export default Info