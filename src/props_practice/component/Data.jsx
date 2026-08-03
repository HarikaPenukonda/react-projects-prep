import { useState } from "react"

export default function Data(props){
     /**
     * Challenge:
     *  only show the punchline paragraph if isShow is `true`
     */
    const[isShown,setIsShown] = useState(false)
    function toggleButton(){
        setIsShown(prevValue => !prevValue)
    }

    return(
        <>
            <div>
            {props.setup &&  <h4>Setup : {props.setup}</h4>}
               
            </div>
            <div>
                {isShown && <h4>Punchline : {props.punchline}</h4>}
            </div>
            {/* {isShown ? <button onClick={toggleButton}>hide punchline</button> : <button onClick={toggleButton}>show punchline</button>} */}
           <button onClick={toggleButton}>{isShown ? "hide" : "show"} punchline</button>
            <hr></hr>
        </>
    )
}