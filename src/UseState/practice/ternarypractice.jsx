import '../tp.css'
export default function TernaryApp() {
    /**
     * Challenge: Move your ternary directly inside the jsx
     * so YES and NO are determined inside the H1
     * 
     * Hint: you will no longer need `answer` variable 
     */
    const isGoingOut = true
    
    //let answer = isGoingOut ? "Yes" : "No"// 👈 Use ternary here
    
    return (
        <main>
            <h1 className="title">Do I feel like going out tonight?</h1>
            <button className="value">{isGoingOut?"Yes":"No"}</button>
        </main>
    )
}