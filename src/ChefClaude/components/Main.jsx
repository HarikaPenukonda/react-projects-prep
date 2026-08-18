import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";

export default function Main(){

/**
 * Challenge: Get a recipe from the AI!
 * 
 * This will be a bit harder of a challenge that will require you
 * to think critically and synthesize the skills you've been
 * learning and practicing up to this point.
 * 
 * We'll start with a mini-quiz:
 * 
 * 1. Think about where the recipe response should live and how you're
 *    going to make sure it doesn't disappear between each state change in
 *    the app. (I don't mean between refreshes of your mini-browser.
 *    You don't need to save this to localStorage or anything more permanent
 *    than in React's memory for now.)
 *  
 * 
 * 2. What action from the user should trigger getting the recipe?
 * 
 */

    const [ingredients, setIngredients] = useState(["all the main spices", "pasta", "ground beef", "tomato paste"])

    const[recipeShown, setRecipeShown] = useState(false)

    function addIngredient(formData){
        const newIngredient = formData.get("ingredient") // Give me the value stored under the key ingredient.
        setIngredients(prevIngredients => [...prevIngredients,newIngredient])
    }

    function handleRecipe(){
        setRecipeShown(prevShown => !prevShown)
    }
    
    return(
        <>
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add Ingredient"
                    name="ingredient">
                    </input>
                <button>Add ingredient</button>
            </form>
           { ingredients.length > 0 && <IngredientsList ingredients={ingredients} getRecipe={handleRecipe}/> }
            {recipeShown && <ClaudeRecipe/>}
        </main>
            
        </>
    )
}

        //event.preventDefault();   // Prevents page refresh
        //const formData = new FormData(event.currentTarget) 
        // event.currentTarget refers to the element on which the event listener is attached. the event listener is attached to the <form>.
        // FormData is a built-in JavaScript object. It scans the form and collects every input that has a name attribute.