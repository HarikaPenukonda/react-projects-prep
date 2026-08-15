import { useState } from "react"
import pads from "./pads"
import "./index.css"
import Pad from "./Pad"

export default function SPOne() {
    

    const [pad, setPad] = useState(pads)

    const buttonsElements = pad.map(pad => (<Pad 
        key={pad.id}
        color={pad.color}
        on={pad.on}
        />))

    return (
        <main>
            <div className="pad-container">
                {buttonsElements}
            </div>
        </main>
    )}
