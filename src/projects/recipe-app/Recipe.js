import React, { useState, useEffect } from 'react';

function Recipe({ label, calories, image }) {
    return (
        <div style={{ maxWidth: "300px" }}>
            <div style={{ height: '100px', alignItems: 'center', overflow: 'hidden' }} ><h1 style={{ color: 'white' }}>{label}</h1></div>
            <h2 style={{ color: '#ffbe0f' }}>calories: {Math.round(calories)}</h2>
            <img src={image} />
        </div >
    )
}

export default Recipe