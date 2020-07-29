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
        imageIndex: 1,
        canGoLeft: false,
        canGoRight: true,
        size: 1920
    };

    mark = (index) => {
        const options = document.getElementsByClassName("sideNavOption");
        const dots = document.getElementsByClassName("dot");
        let elements=[];
        if(dots.length>4) {
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
        if(options.length>4){
            for (let i = 0; i < 5; i++) {
                options[i].style.color = "black";
                options[i].style.cursor = "pointer";
            }
            options[index].style.color = "#a6a6a2";
            options[index].style.cursor = "auto";
        }
        this.setState({dotColor: elements});
    };

    leftImage =()=>{
        if(this.state.imageIndex===2){
            document.getElementById("left").style.cursor="auto";
            document.getElementById("right").style.cursor="pointer";
            this.setState({canGoRight: true, canGoLeft: false});

        }else{
            if (this.state.imageIndex===3){
                document.getElementById("right").style.cursor="pointer";
                document.getElementById("left").style.cursor="pointer";

                this.setState({canGoRight: true, canGoLeft: true})
            }
        }
        if(this.state.imageIndex>1){
            for(let i=1; i<4; i++){
                if(i===this.state.imageIndex-1){
                    document.getElementById("image"+i).style.opacity=1;
                    document.getElementById("grad"+i).style.opacity=1;


                }else{
                    document.getElementById("image"+i).style.opacity=0;
                    document.getElementById("grad"+i).style.opacity=0;

                }
            }
            this.setState({imageIndex: this.state.imageIndex-1})
        }
    };
    rightImage =()=>{
        if(this.state.imageIndex===2){
            document.getElementById("right").style.cursor="auto";
            document.getElementById("left").style.cursor="pointer";

            this.setState({canGoLeft: true, canGoRight: false})
        }else{
            if (this.state.imageIndex===1){
                document.getElementById("right").style.cursor="pointer";
                document.getElementById("left").style.cursor="pointer";
                this.setState({canGoRight: true, canGoLeft: true});

            }
        }
        if(this.state.imageIndex<3){
            for(let i=1; i<4; i++){
                if(i===this.state.imageIndex+1){
                    document.getElementById("image"+i).style.opacity=1;
                    document.getElementById("grad"+i).style.opacity=1;

                }else{
                    document.getElementById("image"+i).style.opacity=0;
                    document.getElementById("grad"+i).style.opacity=0;

                }
            }
            this.setState({imageIndex: this.state.imageIndex+1})
        }
    };
    render() {
        return (
            <Router>
                <img className="background noSelect" src={background} alt="bg"/>
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
                                    />
                                    <Info
                                        goLeft={this.leftImage}
                                        goRight={this.rightImage}
                                        canGoLeft={this.state.canGoLeft}
                                        canGoRight={this.state.canGoRight}
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
