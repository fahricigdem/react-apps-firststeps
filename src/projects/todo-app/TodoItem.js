import React, { useState } from "react"

function TodoItem(props) {

    let className = !props.data.completed == true ? "" : "checked"

    return (
        <div className="todo-item">
            <input type="checkbox"
                checked={props.data.completed}
                onChange={() => { console.log(`${props.data.id}.todo-item changed to ${props.data.completed}`) }}
                onClick={() => props.checkIt(props.data)} />
            <p className={className}>{props.data.text}</p>
        </div>
    )
}

export default TodoItem



