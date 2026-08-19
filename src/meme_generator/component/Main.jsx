import { useState } from "react"

export default function Main() {
     /**
     * Challenge: move the hardcoded meme info into React
     * state. Use an object with `topText`, `bottomText`,
     * and `imageUrl` properties, and set the initial values to
     * the ones hardcoded below.
     */

    const[meme, setMeme] = useState({topText:"One does not simply",bottomText:"Walk into Mordor",imageUrl:"http://i.imgflip.com/1bij.jpg"})
    function handleChange(event){ 
        const {value} = event.currentTarget // event.currentTarget - When the user types something, the event object contains information about the input.
        setMeme(prevValue => ({
            ...prevValue,
            topText : value
        }))
        /**
         * Challenge: update the topText value in the meme state
         * object every time the topText input box is changed
         * 
         * Note: don't worry about bottomText at this point.
         */
    }
    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                    />
                </label>
                <button>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}

/**
 * Without destructuring - const value = event.currentTarget.value
 * event.currentTarget = {
    value: "Harika",
    name: "username",
    type: "text"
}
const { value } = event.currentTarget
    extracts
    value
    ↓
    "Harika"

-- Why use destructuring? It's mainly for convenience and readability.

Instead of repeatedly writing:
    event.currentTarget.value
    event.currentTarget.name
    event.currentTarget.type

you can do: const { value, name, type } = event.currentTarget
 * 
 */