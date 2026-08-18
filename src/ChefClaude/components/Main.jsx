import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromChefClaude } from "../ai";

export default function Main(){

    const [ingredients, setIngredients] = useState([])

    const[recipe, setRecipe ] = useState("")

    function addIngredient(formData){
        const newIngredient = formData.get("ingredient") // Give me the value stored under the key ingredient.
        setIngredients(prevIngredients => [...prevIngredients,newIngredient])
    }

    async function getRecipe(){
        const recipeMarkdown = await getRecipeFromChefClaude(ingredients)
        setRecipe(recipeMarkdown)
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
           { ingredients.length > 0 && <IngredientsList ingredients={ingredients} getRecipe={getRecipe}/> }
            {recipe && <ClaudeRecipe recipe={recipe}/>}
        </main>
            
        </>
    )
}

        //event.preventDefault();   // Prevents page refresh
        //const formData = new FormData(event.currentTarget) 
        // event.currentTarget refers to the element on which the event listener is attached. the event listener is attached to the <form>.
        // FormData is a built-in JavaScript object. It scans the form and collects every input that has a name attribute.