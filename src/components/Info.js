import React from "react";
import arrow from "../images/arrow.png"
import arrowGray from "../images/arrowGray.png"
import Links from "./Links";
const Info = (props)=>{
    const arrowType={true: arrow, false: arrowGray};
    return(
        <div className="info">
            <h3 id="grad1" className="shoeName gradient1">Nike Airforce</h3>
            <h3 id="grad2" className="shoeName gradient2">Nike Airforce</h3>
            <h3 id="grad3" className="shoeName gradient3">Nike Airforce</h3>
            <div className="group-info-links">
                <div className="left">
            <h4 className="price">$80</h4>
            <h6 className="desc">From high-top to low-top. Live the legend of the Air Force 1, modernized for ultimate street style.</h6>
            <button className="addToCart">Add to cart</button>
            <div className="group-buttons">
            <img id="left" className="arrowLeft noSelect" draggable={false} src={arrowType[props.canGoLeft]} onClick={props.goLeft} alt="left"/>
            <img id="right" className="arrowRight noSelect" draggable={false} src={arrowType[props.canGoRight]} onClick={props.goRight} alt="right"/>
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