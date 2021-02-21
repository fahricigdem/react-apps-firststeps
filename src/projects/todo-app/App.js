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
        totalTodoNum: null,
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
            this.setState({ event: `"${todoTemp.text}" is now "Completed"` })
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
            console.log("totalTodoNum", this.state.totalTodoNum)
            this.setState({ totalTodoNum: this.state.totalTodoNum + 1 })
            console.log("totalTodoNum", this.state.totalTodoNum)
            const newTodo = {
                id: this.state.totalTodoNum,
                text: this.state.newTodo,
                completed: false
            }
            if (this.state.newTodo) {
                this.setState({ newTodo: "" })
                const newTodos = [...this.state.data, newTodo]
                this.setState({ data: newTodos })
                this.setState({ event: `"${newTodo.text}" is added` })
            }
            console.log(newTodo.id, newTodo.text)
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
            this.setState({ totalTodoNum: this.state.data.length + 1 })
        }, 1500)
        this.howManyOk()
        console.log("didMounted")


    }


    render() {

        let dataAll = this.state.data.map(item => <TodoItem key={item.id} data={item} /*checkIt={this.checkIt}*/ checkIt={this.checkItV1} deleteTodo={this.deleteTodo} />)
        let length = this.state.data.length
        let ok = this.state.ok
        let notOk = length - ok

        return (
            <div className="todo-list">
                <h1>ToDO List {/*<span class="badge badge-info">{this.state.data.length}</span>*/}</h1>
                <center>
                    {!this.state.isLoading ? <div style={{ height: '50px', margin: '0px 0px 20px 0px' }}>
                        {ok > 0 && <p>Completed : <span className="badge badge-primary">{ok}</span></p>}
                        {notOk > 0 && <p>Uncompleted : <span className="badge badge-warning">{notOk}</span></p>}
                    </div> : <div className="spinner-border"></div>}
                </center>
                <hr style={{ border: '1px solid grey', width: '150px' }} />
                { this.state.isLoading ? <div className="spinner-border"></div> : dataAll}
                <input className="form-control" style={{ width: '80%', textAlign: 'center' }} placeholder="add new toDo!" type="text" onKeyUp={this.addTodo} onChange={this.setNewTodo} value={this.state.newTodo} />
                <p>Update Nu : <span className="badge badge-secondary">{this.state.change}</span></p>
                <p><span className="badge badge-info">{this.state.event}</span></p>
            </div>
        )
    }
}

export default App


