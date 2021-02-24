import React, { Component } from 'react';

class MemeGenerator extends Component {
    state = {
        topText: "",
        bottomText: "",
        topTextSubmitted: "",
        bottomTextSubmitted: "",
        randomImg: "http://i.imgflip.com/1bij.jpg",
        memes: {}

    }

    handleChange = this.handleChange.bind(this)
    handleSubmit = this.handleSubmit.bind(this)

    handleChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
        console.log(!this.state.loading && !this.state.show)
    }

    handleSubmit(e) {

        let urlNu = Math.floor(Math.random() * 100)

        console.log(this.state.memes[0].url)
        this.setState({ randomImg: this.state.memes[urlNu].url, topTextSubmitted: this.state.topText, bottomTextSubmitted: this.state.bottomText });

        e.preventDefault()
        console.log(!this.state.loading && !this.state.show)
    }

    async componentDidMount() {
        const response = await fetch(`https://api.imgflip.com/get_memes`);
        const json = await response.json();
        const { memes } = json.data
        this.setState({ memes });

    }

    render() {

        return (
            <div style={{ textAlign: 'center' }}>
                <form onSubmit={this.handleSubmit} >
                    <input style={{ width: "40vw" }}
                        type="text"
                        name="topText"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />
                    <input style={{ width: "40vw" }}
                        type="text"
                        name="bottomText"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />

                    <button style={{ width: "10vw" }}>ok</button>
                </form>


                <div style={{ height: "50%", width: "70vw", margin: 'auto' }}>
                    <h1 style={{ position: 'absolute', marginTop: "3vh", marginLeft: '20vw', color: 'yellow' }}>{this.state.topTextSubmitted}</h1>
                    <img
                        style={{ height: "50%", width: "70vw" }}
                        src={this.state.randomImg}
                    />
                    <h1 style={{ position: 'absolute', marginTop: "-12vh", marginLeft: '20vw', color: 'yellow' }}>{this.state.bottomTextSubmitted}</h1>
                </div>


            </div>
        );
    }
}

export default MemeGenerator;