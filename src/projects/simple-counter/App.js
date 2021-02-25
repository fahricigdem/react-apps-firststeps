import React, { Component, useState } from 'react';

function App() {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    const [style, setStyle] = useState({ display: "block" })
    const [style1, setStyle1] = useState({ display: "none" })



    const increment = () => {
        // let value = count2 - 1
        // setCount2(value)
        setCount2(i => i - 1)
    }

    const deleteAll = () => {
        let style = { display: "none" }
        setStyle(style)
        let style1 = { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '202px', border: '3px solid green' }
        setStyle1(style1)
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <div style={style}>
                <h1 >{count1}</h1>
                <button onClick={() => setCount1(prevCount => prevCount + 1)}>Plus!</button>
                <br /><button onClick={deleteAll} style={{ borderRadius: '50%' }}>delete</button><br />
                <button onClick={increment}>Minus!</button>
                <h1>  {count2}</h1>
            </div>
            <div style={style1}>
                <h1>Good by!</h1>
            </div>
        </div>
    )
}

export default App
