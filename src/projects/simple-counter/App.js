import React, { useState, useEffect } from 'react';
import randomColor from "randomcolor"

function App() {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    const [color, setColor] = useState("")
    const [finish, setFinish] = useState(false)

    var color1 = randomColor()

    const decrement = () => {
        // let value = count2 - 1
        // setCount2(value)
        setCount2(i => i - 1)
    }

    const deleteAll = () => {
        setFinish(true)
    }

    useEffect(() => {
        setInterval(() => {
            setCount1(i => i + 1)
        }, 1000);
    }, [])


    useEffect(() => {
        setColor(randomColor())
    }, [count1])

    return (
        <div style={{ textAlign: 'center', backgroundColor: '#8f4068' }}>
            {!finish ?
                <div >
                    <h1 style={{ color: color }} >{count1}</h1>
                    <button style={{ backgroundColor: "blue", color: 'whitesmoke' }} onClick={() => setCount1(prevCount => prevCount + 1)}>Plus!</button>
                    <br /><button onClick={deleteAll} style={{ borderRadius: '50%', backgroundColor: "red", color: 'whitesmoke' }}>delete</button><br />
                    <button style={{ backgroundColor: "yellow" }} onClick={decrement}>Minus!</button>
                    <h1>  {count2}</h1>
                </div>
                :

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '202px', color: color1 }}>
                    <h1>Good by!</h1>
                </div>
            }
        </div>
    )
}

export default App
