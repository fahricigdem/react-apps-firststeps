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
        <div className="container">
            <form className="ui form" onSubmit={handleSubmit}>
                <input className="field"
                    type="text"
                    name="name"
                    className="form-control"
                    // style={{ width: "45vw" }}
                    placeholder="Name"
                    onChange={updateName}
                    value={name}
                    required
                />
                <br />

                <input className="field"
                    type="number"
                    name="price"
                    className="form-control"
                    // style={{ width: "45vw" }}
                    placeholder="price"
                    onChange={updatePrice}
                    value={price}
                    required
                />
                <input className="field"
                    type="text"
                    name="description"
                    className="form-control"
                    // style={{ width: "45vw" }}
                    placeholder="Description"
                    onChange={updateDescription}
                    value={description}
                />
                <button className="ui button"
                >Add</button>
            </form>
        </div>
    )
}

export default AddProduct