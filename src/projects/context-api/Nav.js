import React from 'react';
import { useState, useContext } from "react"
import { ProductContext } from "./ProductContext"


function Nav() {
    const [products, setProducts] = useContext(ProductContext)
    return (
        <nav className="routingNav">

            <h3>Context-Api</h3>
            <h4>Products <span className="badge badge-warning">{products.length}</span></h4>

        </nav >
    )
}

export default Nav