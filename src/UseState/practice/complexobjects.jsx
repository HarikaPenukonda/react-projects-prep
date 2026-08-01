import React from "react"
import avatar from "../../assets/user.png"
import starFilled from '../../assets/star-filled.png'
import starEmpty from "../../assets/star-empty.png"
import "../co.css"

export default function ComplexObjectApp() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })
    /**
     * Challenge: 
     * Update the following:
     * - aria-pressed should reflect the same value as contact.isFavourite
     * - aria-label should switch to say "Remove from favourites" is contact.isFavourite is `true`
     * - img-alt should say "filled-star-icon" when filled
     * 
     */

    let starIcon = contact.isFavorite ? starFilled : starEmpty

    function toggleFavorite() {
        console.log("Toggle Favorite")
    }

    return (
        <main>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    <button
                        onClick={toggleFavorite}
                        aria-pressed={contact.isFavorite}
                        aria-label={contact.isFavorite ? "Remove from favourites" : "Add to favourites"}
                        className="favorite-button"
                    >
                        <img
                            src={starIcon}
                            alt={contact.isFavorite ? "filled-star-icon" : "empty star icon"}
                            className="favorite"
                        />
                    </button>
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