import React, { useState, useEffect } from 'react';
import "./recipe.style.css"
import Recipe from "./Recipe"


const App = () => {

    const [recipes, setRecipes] = useState([])
    const [name, setName] = useState("")
    const [calories, setCalories] = useState(10000)
    const [filter, setFilter] = useState("")

    const APP_ID = "fdd263e4"
    const APP_KEY = "a43678d2012a0b9c6d815c7bbbfea1ef"

    const getRecipes = async () => {

        const response = await fetch(`https://api.edamam.com/search?q=${filter}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const data = await response.json()
        setRecipes(data.hits)
        console.log("data fetched")

    }

    useEffect(() => {

        getRecipes()

    }, [filter])

    // recipes.map(i => console.log(i.recipe.label))

    const handleName = (e) => {

        setName(e.target.value.toLowerCase())

    }

    const handleCalories = (e) => {

        setCalories(e.target.value)

    }

    const handleSubmit = (e) => {

        e.preventDefault();
        setFilter(name)

    }

    console.log("filter: ", filter)

    var results = 0

    const data = recipes.map((recipe, index) => {

        if (
            // recipe.recipe.label.toLowerCase().includes(filter) &&
            Number(recipe.recipe.calories) < calories) {

            results++

            return (
                <Recipe key={index} label={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} />
            )
        }
    }
    )

    console.log("results: ", results)

    const style = {
        display: 'flex', flexDirection: "column", justifyContent: 'space-around', alignItems: 'center', flexFlow: 'row wrap'
    }

    return (
        <div className="recipe" style={{ backgroundColor: '#bd2000' }}>

            <form className="search-form" onSubmit={handleSubmit}>

                <input type="text" className="search-bar" placeholder="Search! chicken etc..." onChange={handleName} value={name} /><br />
                {/* <input type="text" className="search-bar" placeholder="Filter by Max Calories!..." onChange={handleCalories} /><br /> */}
                <select
                    name="favColor"
                    // value={calories}
                    onChange={handleCalories}
                    className="form-select form-select-sm"

                >
                    <option selected value="10000">Filter by Max Calories!...</option>
                    <option value="10000">reset</option>
                    <option value="5000">5000</option>
                    <option value="4000">4000</option>
                    <option value="3000">3000</option>
                    <option value="2000">2000</option>
                    <option value="1000">1000</option>

                </select><br />

                <button className="btn btn-success" style={{ borderRadius: "50%" }} >Submit</button></form><br />

            {results < 10 ? <h2><span className="badge badge-danger">results: {results}</span> </h2> : <h2><span className="badge badge-warning">All Products: {results}  </span></h2>}<br />

            <div style={style} >
                {data}  </div></div>

    )
}

export default App

