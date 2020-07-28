import React from "react";
import greyDot from "../images/greyDot.png"
import blackDot from "../images/blackDot.png"
const MiniPanel =(props)=>{
    const dots={"blackDot": blackDot, "greyDot": greyDot};
    return(
        <div className="miniPanel">
            <img id="first" className="dot" src={dots[props.dotColor[0]]}  onClick={() => props.mark(0)} alt="dot"/>
            <br/>
            <img className="dot" src={dots[props.dotColor[1]]}  onClick={() => props.mark(1)} alt="dot"/>
            <br/>
            <img className="dot" src={dots[props.dotColor[2]]}  onClick={() => props.mark(2)} alt="dot"/>
            <br/>
            <img className="dot" src={dots[props.dotColor[3]]}  onClick={() => props.mark(3)} alt="dot"/>
            <br/>
            <img className="dot" src={dots[props.dotColor[4]]}  onClick={() => props.mark(4)} alt="dot"/>
            <br/>

        </div>
    )
};

export default MiniPanel