import React, { useState, createContext } from 'react';
import { ProductsData } from "./ProductsData"

export const ProductContext = createContext()

export const ProductProvider = (props) => {

    const [products, setProducts] = useState(ProductsData)

    return (
        <ProductContext.Provider value={[products, setProducts]}>
            {props.children}
        </ProductContext.Provider>
    )
}


