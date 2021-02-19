import React, { Component } from 'react';

class Login extends Component {
    state = {
        isLogin: false,
        input: "",
        user: "",
        message: ""
    }

    handleOnChange = (e) => {
        this.setState({ input: e.target.value })
    }

    handleKeyUp = (e) => {
        if (e.key === "Enter") {
            this.handleButton()
        }
    }

    handleButton = () => {
        if (!this.state.isLogin) {
            this.setState(
                {
                    user: this.state.input,
                    isLogin: !this.state.isLogin,
                    message: "Welcome " + this.state.input + "! You are logged in"
                })

        } else {
            this.setState(
                {
                    input: "",
                    isLogin: !this.state.isLogin,
                    message: `Good by ${this.state.user}, You are logged out`
                })
        }
    }

    render() {

        return (
            <center>
                <div>
                    <p><input style={{ width: '250px', textAlign: 'center' }} type="text" placeholder="Wer bist du?" value={this.state.isLogin ? "" : this.state.input} onChange={this.handleOnChange} onKeyUp={this.handleKeyUp} /></p>
                    <button style={this.state.isLogin ? { backgroundColor: '#F76C66' } : { backgroundColor: '#A5E54A' }} onClick={() => this.handleButton()}>{this.state.isLogin ? "log out" : "log in"}</button>
                    <p>{this.state.message}</p>
                </div>
            </center>

        );
    }
}

export default Login;