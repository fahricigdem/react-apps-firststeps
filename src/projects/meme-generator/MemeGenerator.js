import React, { Component } from 'react';
import Memes from './memes'

class MemeGenerator extends Component {
    state = {
        topText: "happy",
        bottomText: "go go",
        topTextSubmitted: "",
        bottomTextSubmitted: "",
        // randomImg: "http://i.imgflip.com/1bij.jpg",
        randomImg: "",
        memes: {}

    }

    // handleChange = this.handleChange.bind(this)  // with arrow function no need to bind 
    // handleSubmit = this.handleSubmit.bind(this)

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.handlePicture()
    }

    handlePicture() {
        let urlNu = Math.floor(Math.random() * 100)
        this.setState({ randomImg: this.state.memes[urlNu].url, topTextSubmitted: this.state.topText, bottomTextSubmitted: this.state.bottomText });
    }

    async componentDidMount() {
        const response = await fetch(`https://api.imgflip.com/get_memes`);
        const json = await response.json();
        const { memes } = json.data
        this.setState({ memes });
        this.handlePicture();

    }

    render() {
        return (
            <Memes
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                {...this.state}
            />
        )
    }
}

export default MemeGenerator;