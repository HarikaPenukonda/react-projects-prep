export default function Main(){
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    let result = ingredients.map(item => {
        return <li>{item}</li>
    })
    
    /**
     * Review Challenge:
     * Map over the list of ingredients and render them as list items
     * 
     * Note: We're doing things a weird way here. Don't worry,
     * we're building up to learning the right way 🙂
     */
    

    return(
        <>
        <main>
            <form className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add Ingredient">
                    </input>
                <button>Add ingredient</button>
            </form>
            <ul>
                {result}
            </ul>
        </main>
            
        </>
    )
}