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

     /**
     * Challenge: Move the star image into its own component (Star)
     * - It should receive a prop called `isFilled` that it
     *   uses to determine which icon it will display. (You'll
     *   need to import the 2 star icons into that new component first).
     * - Import and render that component, passing the value of
     *   `isFavorite` to the new `isFilled` prop.
     * - Don't worry about the abiliity to flip this value quite yet.
     *   Instead, you can test if it's working by manually changing
     *   `isFavorite` in state above.
     */

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
                    <Star isFilled={contact.isFavorite}/>
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