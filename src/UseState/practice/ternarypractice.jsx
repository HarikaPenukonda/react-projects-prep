import '../tp.css'
export default function TernaryApp() {
    /**
     * Challenge: Replace the if/else below with a ternary
     * to determine the text that should display on the page
     */
    const isGoingOut = false
    
    let answer = isGoingOut ? "Yes" : "No"// 👈 Use ternary here
    
    // Remove the code below 👇 once your ternary is done
    // if(isGoingOut === true) {
    //     answer = "Yes"
    // } else {
    //     answer = "No"
    // }
    
    return (
        <main>
            <h1 className="title">Do I feel like going out tonight?</h1>
            <button className="value">{answer}</button>
        </main>
    )
}