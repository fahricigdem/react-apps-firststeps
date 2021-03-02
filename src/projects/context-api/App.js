import React, { useState, useEffect } from 'react';
import Product from "./Product_v1"
import Nav from "./Nav"
import AddProduct from "./AddProduct"
import { ProductProvider } from "./ProductContext"


function App() {

    return (
        <ProductProvider>
            <div className="container">
                <Nav />
                <AddProduct />
                <Product />
            </div>
        </ProductProvider>
    )
}

export default App


