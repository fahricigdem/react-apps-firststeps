import React, { useState, useEffect } from 'react';
import "./recipe.style.css"

function Recipe({ label, calories, image, ingredients }) {
    return (
        <div style={{ maxWidth: "300px" }}>
            <div style={{ height: '100px', overflow: 'hidden', color: 'whitesmoke' }} ><h2>{label}</h2></div>
            <h2 style={{ color: '#ffbe0f' }}>calories: {Math.round(calories)}</h2>
            <img className="image" src={image} />
            <h4 style={{ color: 'whitesmoke' }}>Ingredients</h4>
            {/* <p className='label'>{ingredients.map((i, index) => <span key={index}>{i.text}</span>)}</p> */}
            <p className="ingredients">{ingredients}</p>
        </div>
    )
}

export default Recipe