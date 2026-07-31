import "../ca.css"
import { useState } from "react"
export default function ComplexArraysApp() {
    /**
       * Challenge: Convert the code below to use an array
       * held in state instead of a local variable. Initialize 
       * the state array as an empty array
       * 
       * Don't worry about fixing `addFavoriteThing` quite yet.
       */
    //const myFavoriteThings = []
    const[myFavoriteThings,setMyFavouriteThings] = useState([])
    const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁", 
    "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
    const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)
  
    function addFavoriteThing() {
      // We'll work on this next, nothing to do here yet.
      myFavoriteThings.push("Test") // to add an new value into the existing array, push() or simply modifying the state directly is not enough as it does not re-render the component
      console.log(myFavoriteThings) // it adds Test to an array but it doesnt re-rendersss

    }
    
    return (
      <main>
        <button onClick={addFavoriteThing}>Add item</button>
        <section aria-live="polite">
          {thingsElements}
        </section>
      </main>
    )
  }