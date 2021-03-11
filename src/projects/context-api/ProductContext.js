import React, { useState, createContext } from 'react';

export const ProductContext = createContext()

export const ProductProvider = (props) => {

    const [products, setProducts] = useState([
        {
            id: "1",
            name: "Pencil",
            price: 1,
            description: "Perfect for those who can't remember things! 5/5 Highly recommend."
        }
    ])

    return (
        <ProductContext.Provider value={[products, setProducts]}>
            {props.children}
        </ProductContext.Provider>
    )
}


