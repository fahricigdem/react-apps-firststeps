import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
    render() {
        const { onReset, onClear, onDeleteAll, counters, onDelete, onIncrement, onDecrement } = this.props
        return (
            <div>
                {/* <p>{this.state.counters.filter((c) => c.value !== 0).length}</p> */}
                <button
                    onClick={onReset}
                    className="btn btn-primary btn-sm-m-2 m-2">
                    Reset
                </button>
                <button
                    onClick={onClear}
                    className="btn btn-primary btn-sm-m-2 m-2">
                    Clear zero
                </button>
                <button
                    onClick={onDeleteAll}
                    className="btn btn-primary btn-sm-m-2 m-2">
                    Delete All
                </button>

                {counters.map(counter => (
                    <Counter
                        key={counter.id}
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        counter={counter}
                    />
                ))}

            </div>
        );
    }
}

export default Counters;
