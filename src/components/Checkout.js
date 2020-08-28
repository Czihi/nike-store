import React from "react";
import Button from "react-bootstrap/Button";
import visa from "../images/visa.png"
import mastercard from "../images/mastercard.png"

const Checkout = (props) => {
    function chooseCard(card) {
        const cardList=["mastercard", "visa"];
        for (const name in cardList){
            document.getElementById(cardList[name]).style.filter="brightness(20%)"
        }
        document.getElementById(card).style.filter="brightness(100%)"
    }
    return (<div className="checkout">
        <div className="checkout__details">Card Details</div>
        <div className="checkout__type">Card Type</div>
        <div className="checkout__creditCards">
            <img id="mastercard" onClick={()=>{chooseCard("mastercard")}} className="checkout__card" src={mastercard} alt="card"/>
            <img id="visa" onClick={()=>{chooseCard("visa")}} className="checkout__card" src={visa} alt="card"/>
        </div>
        <div className="checkout__owner">Name on Card</div>
        <input className="checkout__owner--input"/>
        <div className="checkout__cardNumber">Card Number</div>
        <input className="checkout__cardNumber--input"   minLength="16" maxLength="16"
               placeholder="xxxx xxxx xxxx xxxx"/>
        <div className="card__data">
            <div className="checkout__expiration--select">
                <div className="checkout__expiration">Expiration date</div>
                <select defaultValue="mm" className="checkout__expirationMonth--select">
                    <option value="mm" disabled hidden>mm</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select>
                <select defaultValue="yyyy" className="checkout__expirationYear--select">
                    <option value="yyyy" disabled hidden>yyyy</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                </select>
            </div>
            <div className="checkout__cvv--group">
                <div className="checkout__cvv">CVV</div>
                <input className="checkout__cvv--input"  minLength="3" maxLength="3"/>
            </div>
        </div>
        <Button className="checkout__button">Check out</Button>
    </div>)
};
export default Checkout