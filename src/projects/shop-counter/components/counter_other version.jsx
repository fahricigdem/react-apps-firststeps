//imrc
import React, { Component } from 'react';
//cc  : create class
class Counter extends Component {
    state = {
        count : 0,
        tags : []
    };

    renderTags() {
        //return this.state.tags.length === 0 ? "no tags": this.state.tags.map(tag => <li key={tag}>{tag}</li>)
        if (this.state.tags.length === 0) return <p>no tags</p>
        else return this.state.tags.map(tag => <li key={tag}>{tag}</li>)
    }
    render() {
        
        return (
            <div>
                <ul>
                    {this.state.tags.length === 0 && 'Please add a tag'}
                    {this.renderTags()}
                </ul>
            </div>
        );
    }

}

export default Counter;

