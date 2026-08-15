import { useState } from "react"
import pads from "./pads"
import "./index.css"
import Pad from "./Pad"

export default function SPOne() {
    
    const [pad, setPad] = useState(pads)

    function toggle(){
        console.log("clicked!")
    }

      /**
     * Challenge: Create a toggle() function that logs
     * "clicked!" to the console
     * 
     * Pass that function down to each of the Pad components
     * and set it up so when they get clicked, the function runs
     */

    const buttonsElements = pad.map(pad => (<Pad 
        key={pad.id}
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
