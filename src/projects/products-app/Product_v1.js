import React from "react"
import styled from 'styled-components'

function Product(props) {

    const Title = styled.h2`
        color : red;
    `

    return (
        <>
            <Title>  {props.product.name}</Title>
            <p>{props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })} - {props.product.description}</p>
        </>
    )
}

export default Product