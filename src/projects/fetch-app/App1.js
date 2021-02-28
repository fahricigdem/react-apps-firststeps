
import React, { Component } from 'react';

class Fetch extends Component {
    state = {
        output1: {},
        output2: {},
        loading: true
    }

    async componentDidMount() {

        const url1 = "https://swapi.dev/api/people/1"
        const response1 = await fetch(url1)
        const data1 = await response1.json()

        const url2 = "https://api.randomuser.me/"
        const response2 = await fetch(url2)
        const data2 = await response2.json()

        this.setState({ output1: data1, output2: data2.results[0], loading: false })
    }


    render() {

        if (this.state.loading) {
            return <center><div className="spinner-border"></div></center>
        }

        return (

            < div className="container" style={{ minHeight: '100vh' }}>

                <center>
                    <div>Fetched Data from https://swapi.dev:</div>
                    <div>{this.state.output1.name} {this.state.output1.gender} {this.state.output1.birth_year} </div>
                    <br />
                    <div>Fetched Data from https://randomuser.me:</div>
                    <div>{this.state.output2.name.title} {this.state.output2.name.last} {this.state.output2.name.first} </div>
                    <img src={this.state.output2.picture.large} />
                </center>

            </div >

        );
    }
}

export default Fetch;


