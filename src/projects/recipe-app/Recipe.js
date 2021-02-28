import React, { useState, useEffect } from 'react';
import "./recipe.style.css"

function Recipe({ label, calories, image }) {
    return (
        <div style={{ maxWidth: "300px" }}>
            <div className='label' ><h1>{label}</h1></div>
            <h2 style={{ color: '#ffbe0f' }}>calories: {Math.round(calories)}</h2>
            <img className="image" src={image} />
        </div>
    )
}

export default Recipe