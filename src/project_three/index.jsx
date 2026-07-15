import Entry from "./components/Entry";
import Header from "./components/Header";
import './index.css'
import data from "./data";

export default function ProjectThree(){
    const dataElements = data.map((el) => {
        return <Entry
            key={el.id} 
            img={
                    {   
                        src:el.img.src,
                        alt:el.img.alt
                    }
                }
            //img = { {}<-object  }<- javascript
            title={el.title}
            country={el.country}
            googleMapsLink={el.googleMapsLink}
            dates={el.dates}
            text={el.text}
            />
    })
    return(
        <>
            <Header/>
            {dataElements}
        </>
    )
}