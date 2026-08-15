import { useState } from "react"

export default function Pad(props){

const [state,setState] = useState(props.on)

    const styles = {
        backgroundColor : props.color,
    }

    return(
        <>
            <button onClick={props.onclick} style={styles} className={state ? "on" : ""}></button>
        </>
    )
}