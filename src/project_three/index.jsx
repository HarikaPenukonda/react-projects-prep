import Entry from "./components/Entry";
import Header from "./components/Header";
import './index.css'
import data from "./data";

export default function ProjectThree(){
    const dataElements = data.map((el) => {
        return <Entry
            key={el.id} 
            {...el} // spreading objects as props
            // img={el.img}
            // title={el.title}
            // country={el.country}
            //entry={el} // entry prop, and passing the entire el object, instead of passing each value of an object
            />
    })
    return(
        <>
            <Header/>
            {dataElements}
        </>
    )
}

// 1. why reusability is important?
// 2. Props
// 3. creating components from an array of data
// 4. 