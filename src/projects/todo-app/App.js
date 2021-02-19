import React, { Component, useState } from 'react';
import './style.css';
import TodoItem from "./TodoItem"
import todosData from "./todosData"


class App extends Component {

    state = {
        data: todosData,
        newTodo: "",
        ok: null,
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

        if (todoTemp.completed) {
            this.setState({ event: `"${todoTemp.text}" is now "completed"` })
        } else {
            this.setState({ event: `"${todoTemp.text}" is now "Uncompleted"` })
        }
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
            if (this.state.newTodo) {
                this.setState({ newTodo: "" })
                const newTodos = [...this.state.data, newTodo]
                this.setState({ data: newTodos })
                this.setState({ event: `"${newTodo.text}" is added` })
            }


        }
    }

    deleteTodo = (todo) => {
        let id = todo.id
        this.setState({ data: this.state.data.filter(todo => todo.id != id) })
        console.log(`todo number ${todo.text} is deleted`)
        this.setState({ event: `"${todo.text}" is deleted` })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.data !== this.state.data) {
            console.log("DidUpdate")
            this.setState({ change: this.state.change + 1 })
            this.howManyOk()
        }

    }

    howManyOk = () => {
        let currentData = [...this.state.data]
        let ok = 0
        currentData = currentData.map(todo => {
            if (todo.completed) {
                ok++
            }
            return todo
        })

        this.setState({ ok })
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ isLoading: false })
        }, 2000)
        this.howManyOk()
    }


    render() {

        let dataAll = this.state.data.map(item => <TodoItem key={item.id} data={item} /*checkIt={this.checkIt}*/ checkIt={this.checkItV1} deleteTodo={this.deleteTodo} />)
        let length = this.state.data.length
        let ok = this.state.ok
        let notOk = length - ok

        return (
            <div className="todo-list">
                <h1>ToDO List ({this.state.data.length})</h1>
                {(ok > 0 && !this.state.isLoading) && <p>Completed : {ok}</p>}
                {(notOk > 0 && !this.state.isLoading) && <p>Uncompleted : {notOk}</p>}
                {this.state.isLoading ? <p>Loading...</p> : dataAll}
                <input placeholder="new To-Do" type="text" onKeyUp={this.addTodo} onChange={this.setNewTodo} value={this.state.newTodo} />
                <p>Update Nu :{" " + this.state.change}</p>
                <p>{this.state.event}</p>
            </div>
        )
    }
}

export default App


