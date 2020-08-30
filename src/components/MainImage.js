import React from "react";
import nikeShoes1 from "../images/nikeShoes1.png"
import nikeShoes2 from "../images/nikeShoes2.png"
import nikeShoes3 from "../images/nikeShoes3.png"
const MainImage=(props)=>{
    const shoes={1: nikeShoes1, 2: nikeShoes2, 3: nikeShoes3};
    return(
        <div>
            <img className="mainImage noSelect" src={shoes[props.imageIndex]} alt="shoe"/>
        </div>
    )
};
export default MainImage;