
import React, { Component } from 'react';

class Fetch extends Component {
    state = {
        output: {},
        loading: true
    }

    // componentDidMount() {
    //     this.setState({ loading: true })
    //     const url = "https://swapi.dev/api/people/1"
    //     fetch(url)
    //         .then(response => response.json())
    //         .then(data => this.setState({ output: data, loading: false }))
    // }

    // async componentDidMount() {
    //     this.setState({ loading: true })
    //     const url = "https://swapi.dev/api/people/1"
    //     const response = await fetch(url)
    //     const data = await response.json()
    //     this.setState({ output: data, loading: false })
    // }

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

        if (!this.state.output) {
            return <div>the person is not found</div>
        }

        return (

            < div className="container" >

                <center>
                    <div>Fetched Data from https://randomuser.me:</div>
                    <div>{this.state.output.name.title} {this.state.output.name.last} {this.state.output.name.first} </div>
                    <img src={this.state.output.picture.large} />
                </center>

            </div >

        );
    }
}

export default Fetch;


