import { useState } from "react";

export default function Main(){

    const [ingredients, setIngredients] = useState([])

    let ingredientListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function addIngredient(formData){
        const newIngredient = formData.get("ingredient") // Give me the value stored under the key ingredient.
        setIngredients(prevIngredients => [...prevIngredients,newIngredient])
    }

     /**
     * Challenge:
     * Using conditional rendering, only render the new <section> IF
     * there are ingredients added to the list of ingredients.
     */
    
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
           { ingredients.length > 0 && 
            <section>
            <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientListItems}</ul>
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>
            </section> }
            
        </main>
            
        </>
    )
}

        //event.preventDefault();   // Prevents page refresh
        //const formData = new FormData(event.currentTarget) 
        // event.currentTarget refers to the element on which the event listener is attached. the event listener is attached to the <form>.
        // FormData is a built-in JavaScript object. It scans the form and collects every input that has a name attribute.