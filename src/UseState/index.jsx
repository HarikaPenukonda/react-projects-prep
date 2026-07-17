import { useState } from 'react'
import './index.css'

export default function UseStatePractice(){
    const result = useState("Hello") //  [Hello, ƒ()]
    console.log(result)

    return(
        <main>
            <h1 className="title">Is state important to know?</h1>
            <button className="value">Yes</button>
        </main>
    )
}