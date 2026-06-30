import reactLogo from '/src/assets/react.svg'

export default function Navbar(){
    return(
        <>
             <header>
                <nav>
                    <img src={reactLogo}/>
                    <span>React Facts</span>
                </nav>
             </header>
        </>
       
    )
}