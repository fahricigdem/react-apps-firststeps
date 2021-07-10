
import React, { Component } from 'react';
import icon from './arrow-clockwise.svg';

class Fetch extends Component {

    state = {
        output: {},
        loading: true
    }


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

        console.log(this.state.output)

        return (

            < div className="container" style={{ minHeight: '50vh' }} >

                <center>
                    <div>Data fetched from https://randomuser.me:</div>
                    <br />
                    {/*
                    <div>
                        {this.state.output.name.title}.
                        {this.state.output.name.first}{" "}
                        {this.state.output.name.last}

                    </div>

                    <div>
                        <img onClick={() => this.componentDidMount()} src={this.state.output.picture.large} /><br />
                         <button
                            className="btn btn-warning"
                            style={{ marginTop: '20px' }}
                            onClick={() => this.componentDidMount()}
                        >
                            <img
                                style={{}}
                                src={icon}
                            />

                        </button> 
                        <p
                            style={{ padding: "10px", fontSize: "3rem", cursor: "pointer" }}
                            onClick={() => this.componentDidMount()}
                        >
                            🔄
                        </p>

                        <p>
                            {this.state.output.location.street.name}{" str."}
                            ,{" "} <br />
                            {this.state.output.location.city}{" / "}
                            {this.state.output.location.country}


                        </p>
                    </div>*/}

                    <div class="ui card">
                        <div class="image">
                            <img style={{ cursor: "pointer" }} onClick={() => this.componentDidMount()} src={this.state.output.picture.large} />
                        </div>
                        <div class="content">
                            <p class="header">{this.state.output.name.title}.
                                {this.state.output.name.first}{" "}
                                {this.state.output.name.last}</p>
                            <div class="meta">
                                <span class="date">Born in {2021 - this.state.output.dob.age}</span>
                            </div>
                            <div class="description">
                                {this.state.output.name.first} is living in <br /> {this.state.output.location.city}{"/"}
                                {this.state.output.location.country}.
                            </div>
                        </div>
                        <div class="extra content" style={{ cursor: "pointer" }} onClick={() => this.componentDidMount()}>
                            <p  >
                                <i class="sync icon"></i>
                                refresh
                            </p>
                        </div>
                    </div>


                </center>


            </div >

        );
    }
}

export default Fetch;


