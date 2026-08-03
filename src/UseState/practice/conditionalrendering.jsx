import React from "react"
import "../cr.css"

export default function ConditionalApp() {
    const [unreadMessages, setUnreadMessages] = React.useState([])
    
    /**
     * Challenge:
     * If there are 0 unread messages , display a pargraph that says "You
     * have no unread messages"
     */
    
    return (
        <>
        <div>
            {unreadMessages.length > 0 && <h1>You have {unreadMessages.length} unread messages!</h1>}
            {unreadMessages.length === 0 && <p>You have no unread messages</p>}
        </div>
        </>
    )
}

/**
 *  - Conditional rendering is the process of displaying different UI elements or components based on a condition.
 *  - What are the common ways to perform conditional rendering in React?
        if...else
        Ternary operator (? :)
        Logical AND (&&) - Show something only when true
        Returning null 
    - When should you use && instead of a ternary?
        Use && when you only need to render something if a condition is true. 
        Use a ternary when you need to choose between two different UI elements.
 */