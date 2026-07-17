import { useState } from 'react'
import './index.css'

export default function UseStatePractice(){
    const [result,func] = useState("Yes") //  [Hello, ƒ()], returns an array
    console.log(result)

    return(
        <main>
            <h1 className="title">Is state important to know?</h1>
            <button className="value">{result}</button>
        </main>
    )
}