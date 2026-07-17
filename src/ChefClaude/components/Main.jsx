export default function Main(){
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    let ingredientListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(event){
        event.preventDefault();   // Prevents page refresh
        // console.log("Form Submitted!!")
        // grabbing the form data and displaying
        const formData = new FormData(event.currentTarget) 
        // event.currentTarget refers to the element on which the event listener is attached. the event listener is attached to the <form>.
        // FormData is a built-in JavaScript object. It scans the form and collects every input that has a name attribute.
        const newIngredient = formData.get("ingredient") // Give me the value stored under the key ingredient.
        ingredients.push(newIngredient)
        console.log(ingredients)
    }
    
    return(
        <>
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add Ingredient"
                    name="ingredient">
                    </input>
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientListItems}
            </ul>
        </main>
            
        </>
    )
}