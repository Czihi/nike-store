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
import Links from "./components/Links";
import background from "./images/background.png"


class App extends Component {
    state = {
        dotColor: ["blackDot", "greyDot", "greyDot", "greyDot", "greyDot"],
        shoes: "nikeShoes3"
    };

    mark = (index) => {
        const options = document.getElementsByClassName("sideNavOption");
        const dots = document.getElementsByClassName("dot");
        for (let i = 0; i < 5; i++) {
            options[i].style.color = "black";
            options[i].style.cursor = "pointer";
            dots[i].style.cursor = "pointer"
        }
        options[index].style.color = "#a6a6a2";
        options[index].style.cursor = "auto";
        dots[index].style.cursor = "auto";

        let elements = [];
        for (let i = 0; i < 5; i++) {
            if (i !== index) {
                elements.push("greyDot")
            } else {
                elements.push("blackDot")
            }
        }
        this.setState({dotColor: elements});
    };

    render() {
        return (
            <Router>
                <img className="background" src={background} alt="bg"/>
                <Route path="/Nike-store" exact render={
                    () => {
                        document.title="Nike store"
                        return (<div>
                                <div className="group">
                                    <LeftPanel
                                        mark={this.mark}
                                    />
                                    <MiniPanel
                                        mark={this.mark}
                                        dotColor={this.state.dotColor}
                                    />
                                    <MainImage
                                        source={this.state.shoes}
                                    />
                                    <Info
                                    />
                                    <Links/>

                                </div>
                            </div>
                        )
                    }
                }/>
            </Router>
        )
    };
}

export default App;
