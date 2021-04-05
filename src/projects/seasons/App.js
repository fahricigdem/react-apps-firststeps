import React, { Component } from 'react';
import SeasonDisplay from './SeasonDisplay'


class App extends Component {
    constructor(props) {
        super(props);

        this.state = { lat: null, errorMessage: '' };

        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude });
            },
            err => {
                this.setState({ errorMessage: err.message });
                console.log("error:", err.message)
            }
        );
    }


    render() {

        return (this.state.lat ? <div>{this.state.lat}</div> : <div>Latitide:{this.state.errorMessage}</div>);
    }
}

export default App;







