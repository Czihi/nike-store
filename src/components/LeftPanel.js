import React from "react";
import leftPanelShoe from "../images/leftShoe.png"
import Sidebar from "./Sidebar";
const LeftPanel = (props) => {
    return(
        <div className="leftPanel">
            <h3 className="header">Store</h3>
            <Sidebar
            mark={props.mark}
            />
            <img className="leftPanelShoe noSelect" draggable={false} src={leftPanelShoe} alt="logo"/>
        </div>
    )
};

export default LeftPanel;