import React from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit'
import RecipeList from './RecipeList'

export default function RecipeEdit() {
    return (
        <div className="recipe-edit">
            <div>
                <button>&times;</button>
            </div>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
                <label htmlFor="cooktime">Cook Time</label>
                <input type="text" name="cooktime" id="cooktime" />
                <label htmlFor="servings">Servings</label>
                <input type="number" min="1" name="servings" id="servings" />
                <label htmlFor="instructions">Instructions</label>
                <textarea type="text" name="instructions" id="instructions"></textarea>
            </div>
            <br/>
            <label>Ingredients</label>
            <div>
                <div>Name</div>
                <div>Amount</div>
                <div></div>
                <RecipeIngredientEdit />
                <RecipeIngredientEdit />

                {/* Ingredient Component */}
            </div>
            <div><button>Add Igredient</button></div>
        </div>
    )
}
