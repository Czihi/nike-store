import React from "react";


const Sidebar = (props) => {

window.onload= function (){
    document.getElementById("men").style.color="#a6a6a2";
    document.getElementById("men").style.cursor="auto";
};

    return(<div className="sideNav">
            <h4 id="men" onClick={() => props.mark(0)} className="sideNavOption">Men's</h4>
            <h4 onClick={() => props.mark(1)} className="sideNavOption">Women's</h4>
            <h4 onClick={() => props.mark(2)} className="sideNavOption">Bags</h4>
            <h4 onClick={() => props.mark(3)} className="sideNavOption">Accessories</h4>
            <h4 onClick={() => props.mark(4)} className="sideNavOption">View all</h4>
        </div>

    )
};

export  default Sidebar