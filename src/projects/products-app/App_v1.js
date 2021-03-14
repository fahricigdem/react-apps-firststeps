import React from "react"
import Product from "./Product_v1"
import productsData from "./productData"
import styled from 'styled-components'


function App() {
    const productComponents = productsData.map(item => <Product key={item.id} product={item} />)

    const ProductList = styled.div`
    color:blue;
    `

    return (
        <ProductList>
            "Used styled component"
            {productComponents}
        </ProductList>
    )
}

export default App