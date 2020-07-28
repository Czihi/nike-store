import React from "react";
import nikeShoes1 from "../images/nikeShoes1.png"
import nikeShoes2 from "../images/nikeShoes2.png"
import nikeShoes3 from "../images/nikeShoes3.png"
const MainImage=(props)=>{
    const shoes={"nikeShoes1": nikeShoes1, "nikeShoes2": nikeShoes2, "nikeShoes3": nikeShoes3};
    return(
        <div className="mainImage">
            <img src={shoes[props.source]} alt="shoe"/>
        </div>
    )
};
export default MainImage;