export default function Pad(props){

    const styles = {
        backgroundColor : props.color,
    }

    return(
        <>
            <button style={styles} className={props.on ? "on" : ""}></button>
        </>
    )
}