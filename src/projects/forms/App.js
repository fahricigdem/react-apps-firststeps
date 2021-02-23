import React, { Component } from 'react';

class App extends Component {
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
        const { name, value, type, checked } = e.target
        type === 'checkbox' ? this.setState({ [name]: checked }) : this.setState({ [name]: value })

        // this.setState({[e.target.name]: e.target.value})
    }


    handleSubmit(e) {

        this.setState({ display: true })
        e.preventDefault();
    }
    render() {

        var style = this.state.display ? { display: 'block' } : { display: 'none' }

        var style1 = this.state.firstName ? { display: 'block' } : { display: 'none' }
        var style2 = this.state.lastName ? { display: 'block' } : { display: 'none' }
        var style3 = this.state.comment ? { display: 'block' } : { display: 'none' }
        var style4 = this.state.isOk ? { display: 'block' } : { display: 'none' }
        var style5 = this.state.gender ? { display: 'block' } : { display: 'none' }
        var style6 = this.state.favColor ? { display: 'block' } : { display: 'none' }

        return (
            <div className="container">
                <h1>Forms</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="firstName"
                        value={this.state.firstName}
                        className="form-control"
                        style={{ width: "45vw" }}
                        placeholder="First Name"
                        onChange={this.handleChange}
                    />
                    <span> {this.state.firstName}</span>
                    <br />

                    <input
                        type="text"
                        name="lastName"
                        value={this.state.lastName}
                        className="form-control"
                        style={{ width: "45vw" }}
                        placeholder="Last Name"
                        onChange={this.handleChange}
                    />
                    <span> {this.state.lastName}</span>

                    <textarea
                        name="comment"
                        className="form-control"
                        style={{ width: "60vw", display: "inline-block" }}
                        id="comment"
                        // cols="30"
                        // rows="10"
                        value={this.state.comment}
                        placeholder="Your Comment"
                        onChange={this.handleChange}
                    />
                    <span> {this.state.comment}</span>

                    <br />

                    <input
                        type="checkbox"
                        name="isOk"
                        checked={this.state.isOk}
                        onChange={this.handleChange}
                    />is ok?
                    <span> {this.state.isOk && "Yes"}</span>
                    <br />
                    <input
                        type="radio"
                        name="gender"
                        value="Male"
                        onChange={this.handleChange}
                    />Male
                    <br />
                    <input
                        type="radio"
                        name="gender"
                        value="Female"
                        onChange={this.handleChange}
                    />Female
                    <p> Gender: {this.state.gender}</p>

                    <label >Favorite Color:</label>
                    <select
                        name="favColor"
                        value={this.state.favColor}
                        onChange={this.handleChange}
                        className="form-select form-select-sm"

                    >
                        <option selected>Open this select menu</option>
                        <option value="red">red</option>
                        <option value="green">green</option>
                        <option value="blue">blue</option>_

                    </select>
                    <p> Favorite Color: {this.state.favColor}</p>

                    <button>Submit</button>


                </form>

                <br />
                <div style={style}>
                    <h4 style={style1}>Your First Name: {this.state.firstName}</h4>
                    <h4 style={style2}>Your Last Name: {this.state.lastName}</h4>
                    <h4 style={style3}>Your Comment: {this.state.comment}</h4>
                    <h4 style={style4}>Your Choice: {this.state.isOk && "Yes"}</h4>
                    <h4 style={style5}>Your Gender: {this.state.gender}</h4>
                    <h4 style={style6}>Your Favorite Color: {this.state.favColor}</h4>
                </div>

            </div>
        );
    }
}

export default App;