import reactDOM from "react-dom/client"

function MainContent(){
  return(
    <h1>React is great</h1>
  )
}

reactDOM.createRoot(document.getElementById('root')).render(
  <MainContent/>
)