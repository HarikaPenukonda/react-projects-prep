import React, { useState } from "react"
import '../style.css'
export default function AppOne() {
    const[count, setCount] = useState(0)

    /**
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.
     */

    function add(){
        setCount(prevCount => prevCount + 1)
    }

    // Challenge: update `substract` to use a callback function

    function minus(){
        setCount(prevCount => prevCount - 1)
    }



    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button onClick={minus} className="minus" aria-label="Decrease count">–</button>
                <h2 className="count">{count}</h2>
                <button onClick={add} className="plus" aria-label="Increase count">+</button>
            </div>
        </main>
    )
}