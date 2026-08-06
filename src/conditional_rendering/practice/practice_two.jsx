import React from "react"
import "../cr.css"
export default function CRAppTwo() {
    const [messages, setMessages] = React.useState(["a","b"])
    /**
     * Challenge:
     * - If there are no unread messages, display "You're all caught up!"
     * - If there's exactly 1 unread message, it should read "You have 
     *   1 unread message" (singular)
     * - If there are > 1 unread messages, display "You have <n> unread
     *   messages" (plural)
     */

    let text = ""
    if(messages.length === 0){
        text = "You're all caught up!"
    }else if(messages.length === 1){
        text = "You have 1 unread message"
    }else{
        text = `You have ${messages.length} unread messages`
    }

    return (
        <div>
            {<h1>{text}</h1>}
        </div>
    )
}