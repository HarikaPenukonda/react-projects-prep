// import reactDOM from "react-dom/client"

// reactDOM.createRoot(document.getElementById('root')).render(
//   <h1>Hello, React!</h1>
// )

// imperative coding - How it should be done : Describe to every step on how to do something, i will do
const h1 = document.createElement("h1")
h1.textContent = "This is imperative coding"
h1.className = "header"
document.getElementById("root").appendChild(h1)