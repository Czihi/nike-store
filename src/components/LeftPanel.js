import React from "react";
import nikeLogo from "../images/nikeLogo.png";
import leftPanelShoe from "../images/leftShoe.png"
import Sidebar from "./Sidebar";
const LeftPanel = (props) => {
    return(
        <div className="leftPanel">
            <img className="nikeLogo noSelect" src={nikeLogo} alt="logo"/>
            <h3 className="header">Store</h3>
            <Sidebar
            mark={props.mark}
            />
            <img className="leftPanelShoe noSelect" src={leftPanelShoe} alt="logo"/>
        </div>
    )
};

export default LeftPanel;