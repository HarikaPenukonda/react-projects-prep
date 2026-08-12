import { useState } from "react"
import Body from "./components/Body"
import Header from "./components/Header"

import "./index.css"

export default function PropState() {
    const [userName, setUserName] = useState("Joe")
    return (
        <main>
            <Header name={userName}/>
            <Body name={userName}/>
        </main>
    )
}
