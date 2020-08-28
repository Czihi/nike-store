import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import LeftPanel from "./components/LeftPanel";
import MiniPanel from "./components/MiniPanel";
import MainImage from "./components/MainImage";
import Info from "./components/Info";
import TopPanel from "./components/TopPanel";
import mbg from "./images/mobileBackground.png"
import MobileSidebar from "./components/MobileSidebar";
import MainCart from "./components/MainCart";
import Background from "./components/Background";

class App extends Component {
    state = {
        dotColor: ["blackDot", "greyDot", "greyDot", "greyDot", "greyDot"],
        imageIndex: 1,
        canGoLeft: false,
        canGoRight: true,
        size: 1920,
        cart:  []
    };
    changeMenu = () => {

        if (document.getElementById("sidebarDropdown") !== null) {
            document.getElementById("sidebarDropdown").style.width = "120px"

        }


    };
    mark = (index) => {
        const options = document.getElementsByClassName("sideNavOption");
        const dots = document.getElementsByClassName("dot");
        let elements = [];
        if (dots.length > 4) {
            for (let i = 0; i < 5; i++) {
                dots[i].style.cursor = "pointer"
            }
            dots[index].style.cursor = "auto";

            for (let i = 0; i < 5; i++) {
                if (i !== index) {
                    elements.push("greyDot")
                } else {
                    elements.push("blackDot")
                }
            }
        }
        if (options.length > 4) {
            for (let i = 0; i < 5; i++) {
                options[i].style.color = "black";
                options[i].style.cursor = "pointer";
            }
            options[index].style.color = "#a6a6a2";
            options[index].style.cursor = "auto";
        }
        this.setState({dotColor: elements});
    };

    leftImage = () => {
        if (this.state.imageIndex === 2) {
            document.getElementById("left").style.cursor = "auto";
            document.getElementById("right").style.cursor = "pointer";
            this.setState({canGoRight: true, canGoLeft: false});

        } else {
            if (this.state.imageIndex === 3) {
                document.getElementById("right").style.cursor = "pointer";
                document.getElementById("left").style.cursor = "pointer";

                this.setState({canGoRight: true, canGoLeft: true})
            }
        }
        if (this.state.imageIndex > 1) {
            for (let i = 1; i < 4; i++) {
                if (i === this.state.imageIndex - 1) {
                    document.getElementById("image" + i).style.opacity = 1;
                    document.getElementById("grad" + i).style.opacity = 1;
                    document.getElementById("grad" + i).style.display = "block";


                } else {
                    document.getElementById("image" + i).style.opacity = 0;
                    document.getElementById("grad" + i).style.opacity = 0;
                    document.getElementById("grad" + i).style.display = "none";

                }
            }
            this.setState({imageIndex: this.state.imageIndex - 1})
        }
    };
    rightImage = () => {
        if (this.state.imageIndex === 2) {
            document.getElementById("right").style.cursor = "auto";
            document.getElementById("left").style.cursor = "pointer";

            this.setState({canGoLeft: true, canGoRight: false})
        } else {
            if (this.state.imageIndex === 1) {
                document.getElementById("right").style.cursor = "pointer";
                document.getElementById("left").style.cursor = "pointer";
                this.setState({canGoRight: true, canGoLeft: true});

            }
        }
        if (this.state.imageIndex < 3) {
            for (let i = 1; i < 4; i++) {
                if (i === this.state.imageIndex + 1) {
                    document.getElementById("image" + i).style.opacity = 1;
                    document.getElementById("grad" + i).style.opacity = 1;
                    document.getElementById("grad" + i).style.display = "block";

                } else {
                    document.getElementById("image" + i).style.opacity = 0;
                    document.getElementById("grad" + i).style.opacity = 0;
                    document.getElementById("grad" + i).style.display = "none";

                }
            }
            this.setState({imageIndex: this.state.imageIndex + 1})
        }
    };

    render() {
        return (
            <Router>
                <img src={mbg} alt="mobile-background" className="mobile-background"/>
                <Route path="/Nike-store" exact render={
                    () => {
                        document.title = "Nike store";
                        return (<div>
                                <Background/>
                                <div id="sidebarIcon" className="dropdown__icon" onClick={this.changeMenu}>
                                    ☰Categories
                                </div>
                                <div id="alertDiv">
                                </div>
                                <MobileSidebar
                                />
                                <TopPanel
                                />
                                <div id="category" className="category">Men's</div>
                                <MainImage
                                />
                                <div className="group">
                                    <LeftPanel
                                        mark={this.mark}
                                    />
                                    <MiniPanel
                                        mark={this.mark}
                                        dotColor={this.state.dotColor}
                                    />
                                    <Info
                                        setState={(s,c)=>this.setState(s, c)}
                                        cart={this.state.cart}
                                        goLeft={this.leftImage}
                                        goRight={this.rightImage}
                                        canGoLeft={this.state.canGoLeft}
                                        canGoRight={this.state.canGoRight}
                                    />

                                </div>
                            </div>
                        )
                    }
                }/>
                <Route path="/Nike-store/cart" exact render={
                    ()=>{
                        document.title="Nike store - cart";
                        return(
                            <div className="main">
                                <MainCart
                                cart={this.state.cart}
                                />
                            </div>
                        )
                    }
                }/>
            </Router>
        )
    };
}

export default App;
