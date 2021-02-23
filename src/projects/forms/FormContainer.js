import React, { Component } from 'react';
import Form from "./Form"
class FormContainer extends Component {
    state = {
        firstName: "",
        lastName: "",
        comment: "",
        isOk: null, //checkbox
        gender: "",
        favColor: "",
        display: false
    }

    handleChange = this.handleChange.bind(this)  /////Bind islemi ile state ile function baglanir
    handleSubmit = this.handleSubmit.bind(this)

    handleChange(e) {
        // console.log(e.target.value)
        const { name, value, type, checked } = e.target
        type === 'checkbox' ? this.setState({ [name]: checked }) : this.setState({ [name]: value })

        // this.setState({[e.target.name]: e.target.value})
    }


    handleSubmit(e) {

        this.setState({ display: true })
        e.preventDefault();
    }

    render() {

        return (
            <div className="container">
                <Form
                    // firstName={this.state.firstName}
                    // lastName={this.state.lastName}
                    // comment={this.state.comment}
                    // isOk={this.state.isOk}
                    // gender={this.state.gender}
                    // favColor={this.state.favColor}
                    // display={this.state.display}
                    {...this.state}
                    onHandle={this.handleChange}
                    onSubmit={this.handleSubmit}
                />
            </div>
        );
    }
}

export default FormContainer;