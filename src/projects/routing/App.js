import React, { Component } from 'react';
import "./styleRouting.css"
import Navbar from "./Nav"
import Homepage from "./Home"
import About from "./About"
import Shop from "./Shop"
import itemDetail from "./itemDetail"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route path="/react-apps-firststeps/" exact component={Homepage} />
                    <Route path="/react-apps-firststeps/about" component={About} />
                    <Route path="/react-apps-firststeps/shop" exact component={Shop} />
                    <Route path="/react-apps-firststeps/shop/:id" component={itemDetail} />
                </Switch>
            </div>
        </Router>

    )
}

export default App