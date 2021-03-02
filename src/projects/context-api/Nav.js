import React from 'react';
import { useState, useContext } from "react"
import { ProductContext } from "./ProductContext"


function Nav() {
    const [products, setProducts] = useContext(ProductContext)
    return (
        <nav className="routingNav">

            <h3>Context-Api</h3>

            <ul className="routingNavElements">

                <li>Products</li>
                <li className="badge badge-warning">{products.length}</li>

            </ul>
        </nav>
    )
}

export default Nav