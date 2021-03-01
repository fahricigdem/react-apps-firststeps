import React, { useState, useEffect } from 'react';

function ItemDetail({ match }) {

    const [data, setData] = useState({})
    console.log(data)
    const fetchItems = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/${match.params.id}`)
        const item = await response.json()
        setData(item)
    }

    useEffect(() => {
        fetchItems()
    }, [])

    return (
        <div>
            <h1>{data.title}</h1>
            <img src={data.image} style={{ maxWidth: '100vw' }} />
        </div>
    )
}

export default ItemDetail


