import React, { Component } from 'react';
import productInfo from './productData';
import Product from "./Product"

function App() {
    return (
        <Product data={productInfo} />
    )
}

export default App

