import React, { useState, useContext } from 'react';
import { ProductContext } from "./ProductContext"

function AddProduct() {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [products, setProducts] = useContext(ProductContext)

    const updateName = (e) => {
        setName(e.target.value)
    }

    const updatePrice = (e) => {
        setPrice(e.target.value)
    }

    const updateDescription = (e) => {
        setDescription(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setProducts(prevProducts => [...prevProducts, { id: prevProducts.length + 1, name, price, description }])
        setName("")
        setPrice("")
        setDescription("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                className="form-control"
                style={{ width: "45vw" }}
                placeholder="Name"
                onChange={updateName}
                value={name}
                required
            />
            <br />

            <input
                type="number"
                name="price"
                className="form-control"
                style={{ width: "45vw" }}
                placeholder="price"
                onChange={updatePrice}
                value={price}
                required
            />
            <input
                type="text"
                name="description"
                className="form-control"
                style={{ width: "45vw" }}
                placeholder="Description"
                onChange={updateDescription}
                value={description}
            />
            <button>Add</button>
        </form>
    )
}

export default AddProduct