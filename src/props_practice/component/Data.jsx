import { useState } from "react"

export default function Data(props){
     /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */
    const[isShown,setIsShown] = useState(false)
    function toggleButton(){
        setIsShown(prevValue => !prevValue)
    }
    console.log(isShown)
    return(
        <>
            <div>
            {props.setup &&  <h4>Setup : {props.setup}</h4>}
               
            </div>
            <div>
                <h4>Punchline : {props.punchline}</h4>
            </div>
            <button onClick={toggleButton}>show punchline</button>
            <hr></hr>
        </>
    )
}