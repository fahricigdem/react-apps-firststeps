import React, { Component, useState } from 'react';
import './style.css';
import TodoItem from "./TodoItem"
import todosData from "./todosData"


class App extends Component {

    state = {
        data: todosData,
        newTodo: ""
    }

    checkIt = (todo) => {
        const newTodos = [...this.state.data]
        const index = newTodos.indexOf(todo)
        newTodos[index].completed = !newTodos[index].completed
        this.setState({ data: newTodos })
    }

    setNewTodo = (e) => {
        this.setState({ newTodo: e.target.value })
    }

    addTodo = (e) => {

        if (e.key === "Enter") {
            const newTodo = {
                id: this.state.data.length + 1,
                text: this.state.newTodo,
                completed: false
            }
            this.setState({ newTodo: "" })
            const newTodos = [...this.state.data, newTodo]
            this.setState({ data: newTodos })
        }
    }

    deleteTodo = (id) => {
        this.setState({ data: this.state.data.filter(todo => todo.id != id) })
    }

    render() {

        let dataAll = this.state.data.map(item => <TodoItem key={item.id} data={item} checkIt={this.checkIt} deleteTodo={this.deleteTodo} />)

        return (
            <div className="todo-list">
                {dataAll}
                <input placeholder="new To-Do" type="text" onKeyUp={this.addTodo} onChange={this.setNewTodo} value={this.state.newTodo} />
            </div>
        )
    }
}

export default App


