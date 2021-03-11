
import React, { Component } from 'react';
class Counter extends Component {
    styles = {
        minWidth: 55
    }

    render() {
        return (
            <div>
                <button onClick={() => this.props.onDecrement(this.props.counter)} className='btn btn-danger btn-sm'>Decrement</button>
                <span style={this.styles} className={this.getBadgeclasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className='btn btn-success btn-sm'>Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }

    getBadgeclasses() {
        let classes = 'badge m-2 badge-';
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter
        return value === 0 ? 'zero' : value;
    }

}

export default Counter;

