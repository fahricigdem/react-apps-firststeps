import React, { Component } from 'react';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'


class App extends Component {

    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        )
    }

    renderContent() {
        return (
            this.state.lat ? <SeasonDisplay lat={this.state.lat} />
                : this.state.errorMessage ? <div className="season-display">{this.state.errorMessage}</div>
                    : <div style={{ position: 'absolute', width: '100%', height: '200px' }}>
                        <Spinner message='waiting for location data' />
                    </div>//spinner should smaller because we have here more than one project //other option: <div><i class="huge spinner loading icon"></i> <h1>loading...</h1></div>
        )
    }

    render() {
        return (
            <div className="......">
                {this.renderContent()}
            </div>
        );
    }
}

export default App;







