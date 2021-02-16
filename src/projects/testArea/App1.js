import React, { Component } from 'react';

var click = 0

class Test extends Component {
    state = {
        imageLink: "https://www.fillmurray.com/400/200"
    }

    render() {
        const handleClick = () => {
            console.log('clicked')
        }

        const handleImageClick = () => {
            click++
            if (click % 2) {
                this.setState({ imageLink: "https://www.fillmurray.com/g/400/200" })
            } else {
                this.setState({ imageLink: "https://www.fillmurray.com/400/200" })
            }

        }

        return (
            <div>
                <center>
                    <img onClick={handleImageClick} onMouseOver={function () { console.log('over') }} src={this.state.imageLink} />
                    <br />
                    <br />
                    {/* <button onClick={function () { console.log('clicked') }}>Click me</button>  {/* Anonymous Function 
                    <button onClick={() => { console.log('clicked') }}>Click me</button> */} {/* Anonymous Function */}
                    {/*<button onClick={handleClick}>Click me</button> */}
                    <button onClick={handleImageClick}>Change It!</button>
                </center>
            </div>
        );
    }
}

export default Test;