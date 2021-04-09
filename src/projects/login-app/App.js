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
                <div style={{ minHeight: '40vh' }}>
                    <p><input className="form-control" style={{ width: '50%', textAlign: 'center' }} type="text" placeholder="Wer bist du?" value={this.state.isLogin ? "" : this.state.input} onChange={this.handleOnChange} onKeyUp={this.handleKeyUp} /></p>
                    <button className="btn btn-primary btn-sm-m-2" style={this.state.isLogin ? { backgroundColor: '#F76C66' } : { backgroundColor: '#A5E54A' }} onClick={() => this.handleButton()}>{this.state.isLogin ? "log out" : "log in"}</button>
                    <p style={{ marginTop: '20px' }}>{this.state.message}</p>
                </div>
            </center>

        );
    }
}

export default Login;