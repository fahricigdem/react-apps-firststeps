import React from "react"
import Product from "./Product_v1"
import productsData from "./productData"

function App() {
    const productComponents = productsData.map(item => <Product key={item.id} product={item} />)

    return (
        <div>
            {productComponents}
        </div>
    )
}

export default App