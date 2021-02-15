import React, { Component, useState } from 'react';
import './style.css';
import TodoItem from "./TodoItem"
import todosData from "./todosData"


class App extends Component {

    state = { data: todosData }

    checkIt = (todo) => {
        const newTodos = [...this.state.data]
        const index = newTodos.indexOf(todo)
        newTodos[index].completed = !newTodos[index].completed
        this.setState({ data: newTodos })
    }

    render() {

        let dataAll = this.state.data.map(item => <TodoItem key={item.id} data={item} checkIt={this.checkIt} />)

        return (
            <div className="todo-list">
                {dataAll}
            </div>
        )
    }
}

export default App



