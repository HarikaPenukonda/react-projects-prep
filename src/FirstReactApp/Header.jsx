import reactLogo from '/src/assets/react.svg'
//import reactLogo from '../assets/react.svg'

function Header(){
    return(
        <>
        <header className='header'>
          <img className='react-logo' src={reactLogo}/>
          <nav>
             <ul className='nav-list'>
                <li className='nav-list-item'>Pricing</li>
                <li className='nav-list-item'>About</li>
                <li className='nav-list-item'>Contact</li>
             </ul>
          </nav>
        </header>
        
        </>
    )
 }

 export default Header