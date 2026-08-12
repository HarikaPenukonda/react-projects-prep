import React from "react"
import avatar from "../../assets/user.png"
import starFilled from '../../assets/star-filled.png'
import starEmpty from "../../assets/star-empty.png"
import "../co.css"
import Star from "./Star"

export default function ComplexObjectApp() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })

    // Explicit Return
    function toggleFavorite() {
        setContact(prevContact => {
            return {
                ...prevContact,
                isFavorite : !prevContact.isFavorite
            }
        })
    }

    // Implicit Return - To tell JavaScript: "This is an object expression." ({}<-object)
    // function toggleFavorite() {
    //     setContact(prevContact => ({...prevContact,isFavorite : !prevContact.isFavorite}))
    // }
    
    // function toggleFavorite() {
    //     setContact(prevContact => (
    //         {
    //             ...prevContact,
    //             isFavorite : !prevContact.isFavorite
    //         }
    //     ))
    // }

    return (
        <main>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    <Star isFilled={contact.isFavorite} handleClick={toggleFavorite}/>
                    {/* How to enable the star component to make a change to its parents state */}
                    <h2 className="name">
                        {contact.firstName} {contact.lastName}
                       
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}