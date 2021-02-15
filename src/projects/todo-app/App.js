import React, { Component } from 'react';
import './style.css';
import TodoItem from "./TodoItem"
import todosData from "./todosData"

function App() {
    let data = todosData.map(item => <TodoItem key={item.id} data={item} />)
    return (
        <div className="todo-list">
            {data = data}
        </div>
    )
}

export default App



