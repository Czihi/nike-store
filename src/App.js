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
        gradients: {
            1: "linear-gradient(to right, #000, #bf0d0d 25%, orange 85%)",
            2: "linear-gradient(to right, #00a, #00f 25%, grey 85%)",
            3: "linear-gradient(to right, #000, #333 25%, #777 85%)"
        },
        products: {
            1: {
                name: "Nike Airforce",
                price: 80,
                description: "From high-top to low-top. Live the legend of the Air Force 1, modernized for ultimate street style.",
                source: "nikeShoes1"
            },
            2: {
                name: "Nike Airforce",
                price: 90,
                description: "From high-top to low-top. Live the legend of the Air Force 1, modernized for ultimate street style.",
                source: "nikeShoes2"
            },
            3: {
                name: "Nike Airforce",
                price: 100,
                description: "From high-top to low-top. Live the legend of the Air Force 1, modernized for ultimate street style.",
                source: "nikeShoes3"
            }
        },
        canGoLeft: false,
        canGoRight: true,
        size: 1920,
        cart: [],
        n: 3
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

    changeIndex = (number) => {
        if (this.state.imageIndex + number <= this.state.n && this.state.imageIndex + number >= 1) {
            if (this.state.imageIndex + number === 1) {
                document.getElementById("left").style.cursor = "auto";
                document.getElementById("right").style.cursor = "pointer";
                this.setState({canGoRight: true, canGoLeft: false});
            }
            if (this.state.imageIndex + number === this.state.n) {
                document.getElementById("left").style.cursor = "pointer";
                document.getElementById("right").style.cursor = "auto";
                this.setState({canGoLeft: true, canGoRight: false});
            }
            document.getElementById("shoeGradient").style.backgroundImage = this.state.gradients[this.state.imageIndex + number]
            this.setState({imageIndex: this.state.imageIndex + number})
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
                                    imageIndex={this.state.imageIndex}
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
                                        setState={(s, c) => this.setState(s, c)}
                                        cart={this.state.cart}
                                        changeIndex={this.changeIndex}
                                        canGoLeft={this.state.canGoLeft}
                                        canGoRight={this.state.canGoRight}
                                        imageIndex={this.state.imageIndex}
                                        products={this.state.products}
                                    />

                                </div>
                            </div>
                        )
                    }
                }/>
                <Route path="/nike-store/cart" exact render={
                    () => {
                        document.title = "Nike store - cart";
                        return (
                            <div className="main">
                                <MainCart
                                    cart={this.state.cart}
                                    setState={(s, c) => this.setState(s, c)}
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
