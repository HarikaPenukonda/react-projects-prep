import { useState } from 'react'
import './index.css'

export default function UseStatePractice(){
    const result = useState() //  [undefined, ƒ]
    console.log(result)

    return(
        <main>
            <h1 className="title">Is state important to know?</h1>
            <button className="value">Yes</button>
        </main>
    )
}