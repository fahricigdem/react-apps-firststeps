//imrc
import React, { Component } from 'react';
//cc  : create class
class Counter extends Component {
    // state = {
    //     value: this.props.counter.value//,
    //     //imgUrl : 'https://picsum.photos/70'
    // };

    styles = {
        // fontSize : 15,
        // fontWeight : "bold"
    }

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);    
    // }

    // handleIncrement = () => {   // arrow function instead of constructer
    //     //console.log('Increment is clicked', this)
    //     //console.log(product)
    //     this.setState({ value: this.props.counter.value + 1 })
    // }

    render() {
        // console.log(this.props);
        return (
            <div>
                {/* <img src={this.state.imgUrl}/> */}
                {/* {this.props.children} */}
                {/* <span>id:{this.props.id}</span> */}
                <span style={this.styles} className={this.getBadgeclasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm'>Increment</button>
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
        const { value: count } = this.props.counter
        return count === 0 ? 'zero' : count;
    }
}

export default Counter;

