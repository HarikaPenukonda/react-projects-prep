
export default function Data(props){
    return(
        <>
            <div>
            {props.setup &&  <h4>Setup : {props.setup}</h4>}
               
            </div>
            <div>
                <h4>Punchline : {props.punchline}</h4>
            </div>
            <hr></hr>
        </>
    )
}