import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import nikeLogo from "./images/nikeLogo.png"

class App extends Component {
    render() {
        return (
            <Router>
                <Route path="/Nike-store" exact render={
                    () => {
                        return (
                            <div className="App">
                                <img className="nikeLogo" src={nikeLogo} alt="logo"/>
                            </div>
                        )
                    }
                }/>
            </Router>
        )
    };
}

export default App;
