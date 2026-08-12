import avatar from "../../assets/user_new.png"

/**
 * challenge : 
 * Raise state up a level and pass it down to both
 * Header and Body components through props
 */

export default function Header(props) {
   

    return (
        <header>
            <img src={avatar} />
            <p>{props.name}</p>
        </header>
    )
}
