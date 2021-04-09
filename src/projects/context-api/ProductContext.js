import React, { useState, createContext } from 'react';

export const ProductContext = createContext()

export const ProductProvider = (props) => {

    const [products, setProducts] = useState([
        {
            id: "1",
            name: "Pencil",
            price: 1,
            description: "Perfect for those who can't remember things! Highly recommend."
        },
        {
            id: "2",
            name: "Buch",
            price: 10,
            description: "Perfect for those who likes reading."
        },
        {
            id: "3",
            name: "eraser",
            price: 5,
            description: "Perfect for those who can't remember things! really recommended."
        },
        {
            id: "4",
            name: "Book",
            price: 7,
            description: "Perfect for those who can't remember things! 5/5 Highly recommend."
        },
        {
            id: "5",
            name: "notebook",
            price: 3,
            description: "Perfect for those who can't remember things! 5/5 Highly recommend."
        }
    ])

    return (
        <ProductContext.Provider value={[products, setProducts]}>
            {props.children}
        </ProductContext.Provider>
    )
}


