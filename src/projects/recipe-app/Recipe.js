import React, { useState, useEffect } from 'react';

function Recipe({ label, calories, image }) {
    return (
        <div>
            <h1 style={{ color: 'white' }}>{label}</h1>
            <h2 style={{ color: '#ffbe0f' }}>calories: {Math.round(calories)}</h2>
            <img src={image} />
        </div>
    )
}

export default Recipe