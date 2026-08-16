import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";

export default function Main(){

     /**
     * Challenge: clean up our code!
     * Let's make a couple new components to make things a
     * little cleaner. (Notice: I'm not suggesting what we
     * have now is bad or wrong. I'm mostly finding an excuse
     * to get in some hands-on practice 🙂)
     * 
     * 1. Move the entire recipe <section> into its own
     *    ClaudeRecipe component
     * 2. Move the list of ingredients <section> into its
     *    own IngredientsList component.
     * 
     * While you're considering how to structure things, consider
     * where state is, think about if it makes sense or not to
     * move it somewhere else, how you'll communicate between
     * the parent/child components, etc.
     * 
     * The app should function as it currently does when you're
     * done, so there will likely be some extra work to be done
     * beyond what I've listed above.
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