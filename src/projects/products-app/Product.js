import React, { Component } from 'react';

function Product(props) {

    const styleTable = {
        borderCollapse: 'collapse',
        width: '100%'
    }
    const styleTh = {
        border: '1px solid #ddd',
        padding: '8px'
    }

    const styleTd = {
        border: '1px solid #ddd',
        padding: '8px'
    }

    const styleTd0 = {
        border: '1px solid #ddd',
        padding: '8px',
        backgroundColor: '#bbb'
    }

    const styleTd1 = {
        border: '1px solid #ddd',
        padding: '8px',
        color: '#fff'
    }

    const items = props.data.map(product =>
        <tr key={product.id}
            style={product.price == 0 ? styleTd0 : styleTd}
        >
            <td style={styleTd}>{product.id}</td>
            <td style={styleTd}>{product.name}</td>
            <td style={product.price == 0 ? styleTd1 : styleTd}>{product.price.toLocaleString("de-De", { style: "currency", currency: "EUR" })}</td>
            <td style={styleTd}>{product.description}</td>
        </tr>)

    return (
        <table style={styleTable} >
            <caption style={{ captionSide: 'unset' }}><h1>Products</h1></caption>
            <thead>
                <tr style={styleTh}>
                    <th >id</th>
                    <th>Name</th>
                    <th style={{ width: 70 }}>Price</th>
                    <th>Description</th>
                </tr>

            </thead>
            <tbody>
                {items}
            </tbody>

        </table>
    )
}

export default Product



