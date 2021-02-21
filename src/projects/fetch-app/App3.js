
import React, { Component } from 'react';

class Fetch extends Component {
    state = {
        output: {},
        loading: true
    }

    async componentDidMount() {

        const url = "https://api.github.com/users"

        const response = await fetch(url)
        const data = await response.json()
        let fetchedData = data.map(i => i.login)
        this.setState({ output: fetchedData, loading: false })
    }

    render() {
        if (this.state.loading) {
            return <div>loading....</div>
        }

        let newInhalt = ""
        for (let i = 0; i < 30; i++) {
            console.log(this.state.output[i])
            newInhalt += this.state.output[i]
        }

        return (

            < div className="container" >
                fetched data :
                {newInhalt}
            </div >

        );

    }
}

export default Fetch;


