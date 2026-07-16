import Entry from "./components/Entry";
import Header from "./components/Header";
import './index.css'
import data from "./data";

export default function ProjectThree(){
    const dataElements = data.map((el) => {
        return <Entry
            key={el.id} 
            entry={el} // entry prop, and passing the entire el object, instead of passing each value of an object
            />
    })
    return(
        <>
            <Header/>
            {dataElements}
        </>
    )
}