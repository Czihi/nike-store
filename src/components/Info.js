import React from "react";
import arrow from "../images/arrow.png"
import arrowGray from "../images/arrowGray.png"
import Links from "./Links";

const Info = (props) => {
    let productId=props.imageIndex;
    let products=props.products
    const arrowType = {true: arrow, false: arrowGray};
    let top = 25;
    let id = 0;
    function removeAlert(removeId){
        let alertToRemove= document.getElementById("alert" +removeId);
        if(alertToRemove!==null){
            alertToRemove.remove();
            top-=65;
            document.getElementById("addToCart").disabled=false;
            document.getElementById("addToCart").style.backgroundColor="black"
        }
    }

    function addToCart() {
        let productNotFound=true;
        let newCart=[...props.cart];
        for (const product in newCart){
            if(newCart[product].id===productId){
                newCart[product].amount+=1;
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
        }
        props.setState({cart: newCart});
        let alert = document.createElement("div");
        alert.setAttribute("id", "alert" + id);
        alert.innerHTML="Added to cart!";
        alert.classList.add("alert");
        let button = document.createElement('BUTTON');
        button.innerHTML="✖";
        button.classList.add("alert__button");
        button.onclick= ()=> removeAlert(id-1);
        alert.appendChild(button);
        let alertDiv = document.getElementById("alertDiv");
        alertDiv.appendChild(alert);
        alert.style.top = top + "px";
        top += 65;
        document.getElementById("addToCart").disabled=true;
        document.getElementById("addToCart").style.backgroundColor="#555";
        document.getElementById("alert"+id).style.opacity="0";
        setTimeout(removeAlert, 5000, id);
        id++;
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