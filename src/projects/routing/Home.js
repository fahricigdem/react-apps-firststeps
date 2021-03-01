import React, { Component } from 'react';
import { Link } from "react-router-dom"

function Home() {
    return (
        <div>
            <h1>Homepage</h1>
            <br /><br /><br /><br /><br />
            <Link to='/shop'>go Shopping</Link>
        </div>
    )
}

export default Home