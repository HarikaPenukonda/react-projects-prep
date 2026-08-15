
export default function Pad(props){
    const styles = {
        backgroundColor : props.color,
    }
    return(
        <>
            <button onClick={()=>props.onclick(props.id)} style={styles} className={props.on ? "on" : ""}></button>
        </>
    )
}

// props.onclick(props.id) calls the function immediately, So the function executes while React is rendering the component, not when the button is clicked.
// while () => props.onclick(props.id) creates a function that will call it later. "Here's a function. Don't execute it yet. Execute it when the button is clicked."