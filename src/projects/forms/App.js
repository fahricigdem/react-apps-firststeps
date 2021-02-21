import React, { Component } from 'react';

class App extends Component {
    state = {
        firstName: "",
        lastName: ""
    }

    handleChange = this.handleChange.bind(this)  /////Bind islemi ile state ile function baglanir

    handleChange(e) {
        // const { name, value } = e.target
        // this.setState({ [name]: value })
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div className="container">
                <h1>Forms</h1>
                <form>
                    <input
                        type="text"
                        name="firstName"
                        className="form-control"
                        style={{ width: "20vw" }}

                        placeholder="First Name"
                        onChange={this.handleChange}
                    />
                    <span> {this.state.firstName}</span>
                    <br />

                    <input
                        type="text"
                        name="lastName"
                        className="form-control"
                        style={{ width: "20vw" }}

                        placeholder="Last Name"
                        onChange={this.handleChange}
                    />
                    <span> {this.state.lastName}</span>



                </form>
            </div>
        );
    }
}

export default App;