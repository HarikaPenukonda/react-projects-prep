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
    console.log(isShown)
    return(
        <>
            <div>
            {props.setup &&  <h4>Setup : {props.setup}</h4>}
               
            </div>
            <div>
                {isShown ? <h4>Punchline : {props.punchline}</h4> : <h4></h4>}
            </div>
            <button onClick={toggleButton}>show punchline</button>
            <hr></hr>
        </>
    )
}