import React from "react"
import { useState, useEffect, useContext } from "react"
import { ProductContext } from "./ProductContext"
import { ProductsData as defaultProducts } from "./ProductsData"

function Product() {

    const [products, setProducts] = useContext(ProductContext)

    useEffect(() => {
        getLocalTodos()
    }, [])


    useEffect(() => {
        saveLocalTodos()
    }, [products])

    const saveLocalTodos = () => {

        localStorage.setItem("products", JSON.stringify(products))

        // console.log("stateData (in saveLocalTodos) ", this.state.data)
        // console.log("todoLocal (in saveLocalTodos) ", JSON.parse(localStorage.getItem("todos")))
    }

    const getLocalTodos = () => {

        if (localStorage.getItem("products") === null) {
            localStorage.setItem("products", JSON.stringify([]))
        } else {
            let todoLocal = JSON.parse(localStorage.getItem("products"))
            // console.log("in getLocalTodos todoLocal", todoLocal)
            setProducts(todoLocal)
        }
    }


    const handleDelete = (id) => {
        setProducts(prevProducts => prevProducts.filter(item => item.id != id))
    }

    return (
        <div>

            {products.map(i => <div key={i.id}><h3 style={{ display: 'inline-block' }}>{i.name}</h3> <span>{Number(i.price).toLocaleString("en-US", { style: "currency", currency: "USD" })} - {i.description}</span> <span style={{ color: "red" }} onClick={() => handleDelete(i.id)} >delete</span></div>)}




        </div>
    )
}

export default Product