import React, { useState, useEffect } from 'react';

function Recipe({ label, calories, image }) {
    return (
        <div>
            <h1>{label}</h1>
            <h2>calories: {Math.round(calories)}</h2>
            <img src={image} />
        </div>
    )
}

export default Recipe