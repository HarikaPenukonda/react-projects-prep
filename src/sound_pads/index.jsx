import { useState } from "react"
import padsData from "./pads"
import "./index.css"
import Pad from "./Pad"

export default function SPOne() {
    
    const [pads, setPads] = useState(padsData)

    function toggle(id){
        setPads(prevPad => prevPad.map( // prevPad - array of pads [pad1,pad2,pad3,...], .map() gives you one individual item at a time.
            item => {return item.id === id ? {...item, on : !item.on} : item }  // item → one individual pad   
        ))
    }

     /**
         * Challenge:
         * Call setPads to update the state of the one pad that was
         * clicked. Map over the previous pads array, and if the current
         * item you're iterating over has the same id as the `id` passed
         * to this function, then return a new object with the `on` value
         * set to the opposite of what it was before.
         * Otherwise (if the ids don't match), just return the previous
         * item as it was, unchanged.
         */

    const buttonsElements = pads.map(pad => (<Pad 
        key={pad.id}
        id={pad.id}
        color={pad.color}
        on={pad.on}
        onclick = {toggle}
        />))

    return (
        <main>
            <div className="pad-container">
                {buttonsElements}
            </div>
        </main>
    )}
