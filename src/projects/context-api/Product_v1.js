import React from "react"
import { useState, useContext } from "react"
import { ProductContext } from "./ProductContext"

function Product(props) {

    const [products, setProducts] = useContext(ProductContext)

    return (
        <div>

            {products.map(i => <div key={i.id}><h3 style={{ display: 'inline-block' }}>{i.name}</h3> <span>{i.price.toLocaleString("en-US", { style: "currency", currency: "USD" })} - {i.description}</span></div>)}


        </div>
    )
}

export default Product