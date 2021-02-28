import React, { Component } from 'react';
import "./styleRouting.css"
import Navbar from "./Nav"
import Homepage from "./Home"
import About from "./About"
import Shop from "./Shop"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Homepage} />
                    <Route path="/about" component={About} />
                    <Route path="/shop" component={Shop} />
                </Switch>
            </div>
        </Router>

    )
}

export default App