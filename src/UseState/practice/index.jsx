import { useState } from 'react'
import '../index.css'

export default function UseStatePractice(){
    const [isImportant,setIsImportant] = useState("Yes") //  [Hello, ƒ()], returns an array, 
    // this function updates the state an re-renders the component
    
    function handleClick(){
        setIsImportant("No")
    }

    return(
        <main>
            <h1 className="title">Is state important to know?</h1>
            <button onClick={handleClick} className="value">{isImportant}</button>
        </main>
    )
}