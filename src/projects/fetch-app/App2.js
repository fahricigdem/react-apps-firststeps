
import React, { Component } from 'react';
import icon from './arrow-clockwise.svg';

class Fetch extends Component {
    state = {
        output: {},
        loading: true
    }


    async componentDidMount() {

        const url = "https://api.randomuser.me/"
        const response = await fetch(url)
        const data = await response.json()
        this.setState({ output: data.results[0], loading: false })
    }


    render() {

        if (this.state.loading) {
            return <center><div className="spinner-border"></div></center>
        }

        return (

            < div className="container" style={{ minHeight: '80vh' }} >

                <center>
                    <div>Fetched Data from https://randomuser.me:</div>
                    <div>{this.state.output.name.title} {this.state.output.name.last} {this.state.output.name.first} </div>
                    <div><img src={this.state.output.picture.large} /><br />
                        <button className="btn btn-warning" style={{ marginTop: '20px' }} onClick={() => this.componentDidMount()}> <img style={{}} src={icon} /></button></div>

                </center>

            </div >

        );
    }
}

export default Fetch;


