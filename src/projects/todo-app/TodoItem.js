import React, { useState } from "react"

function TodoItem(props) {

    let className = !props.data.completed == true ? "" : "checked"

    return (
        <div className="todo-item">
            <input type="checkbox"
                checked={props.data.completed}
                onChange={() => { console.log(`${props.data.id}.todo-item changed to ${props.data.completed}`) }}
                //onClick={() => props.checkIt(props.data)}     // /checIt takes todo-Object
                onClick={() => props.checkIt(props.data.id)}   //checItV1 and checkItV2 take id

            />
            <p className={className}>{props.data.text}</p>
            <button className="btn delete" onClick={() => props.deleteTodo(props.data)}><i className="fa fa-trash"></i></button>
        </div>
    )
}

export default TodoItem



