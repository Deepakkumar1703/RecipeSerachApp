import React from 'react'
import "./recipe.css"

function Recipe({ title, calories, image }) {
    return (
        <div className="recipes-main col-sm-3 col-md-9 col-lg-11">
            <div className="Recipes">
                <img src={image} alt="recipes pic" />
                <div className="recipe-title">
                    <h5>{title}</h5>
                    <p>cal: {calories}</p>
                </div>
            </div>
        </div>
    )
}

export default Recipe;
