import React from "react";

const MobileSidebar = () => {

    function markPicked(number) {
        for (let i = 0; i < 5; i++) {
            document.getElementById("option" + i).style.fontWeight = "normal";
        }
        document.getElementById("option" + number).style.fontWeight = "700";
        document.getElementById("sidebarDropdown").style.width = "0px";
        document.getElementById("category").innerText = document.getElementById("option" + number).innerText
    };
    return (
        <div id="sidebarDropdown" className="dropdown__menu">
            <div id="option0" className="dropdown__option dropdown__option--first" onClick={() => markPicked(0)}>Men's
            </div>
            <div id="option1" className="dropdown__option" onClick={() => markPicked(1)}>Women's</div>
            <div id="option2" className="dropdown__option" onClick={() => markPicked(2)}>Bags</div>
            <div id="option3" className="dropdown__option" onClick={() => markPicked(3)}>Accessories</div>
            <div id="option4" className="dropdown__option" onClick={() => markPicked(4)}>View all</div>
        </div>
    )
};
export default MobileSidebar;