import React, { Component, useState } from 'react';
import './style.css';
import TodoItem from "./TodoItem"
import todosData from "./todosData"


class App extends Component {

    state = {
        data: todosData,
        newTodo: "",
        change: 0,
        event: "",
        isLoading: true
    }

    checkIt = (todo) => {
        const newTodos = [...this.state.data]
        const index = newTodos.indexOf(todo)
        newTodos[index].completed = !newTodos[index].completed
        this.setState({ data: newTodos })
    }

    checkItV1 = (id) => {
        let todoTemp
        this.setState({
            data: [...this.state.data].map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                    todoTemp = { ...todo }
                }
                return todo
            }
            )
        })
        let status = ""
        if (todoTemp.completed) {
            this.setState({ event: `the Status of todo number ${id} is changed to "completed"` })
        } else {
            this.setState({ event: `the Status of todo number ${id} is changed to "not completed"` })
        }
        // if (this.state.data[id - 1].completed) {
        //     this.setState({ event: `the Status of todo number ${id} is changed to "completed"` })
        // } else {
        //     this.setState({ event: `the Status of todo number ${id} is changed to "not completed"` })
        // }

    }

    checkItV2 = (id) => {
        const newTodos = [...this.state.data].map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }

            return todo
        }
        )
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
            this.setState({ event: `todo number ${newTodo.id} is added` })

        }
    }

    deleteTodo = (id) => {
        this.setState({ data: this.state.data.filter(todo => todo.id != id) })
        console.log(`todo number ${id} is deleted`)
        this.setState({ event: `todo number ${id} is deleted` })

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.data !== this.state.data) {
            console.log("DidUpdate")
            this.setState({ change: this.state.change + 1 })
        }

    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ isLoading: false })
        }, 2000)

    }

    render() {

        let dataAll = this.state.data.map(item => <TodoItem key={item.id} data={item} /*checkIt={this.checkIt}*/ checkIt={this.checkItV1} deleteTodo={this.deleteTodo} />)

        return (
            <div className="todo-list">

                {this.state.isLoading ? <p>Loading...</p> : dataAll}
                <input placeholder="new To-Do" type="text" onKeyUp={this.addTodo} onChange={this.setNewTodo} value={this.state.newTodo} />
                <p>Todo List is {this.state.change} times updated</p>
                <p>{this.state.event}</p>
            </div>
        )
    }
}

export default App


