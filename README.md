1. Where does React put all of the elements I create in JSX when I 
   call `root.render()`?
- From root -> index.html
- All the elements I render get put inside the div with the id of "root"


2. What would show up in my console if I were to run this line of code:
```
console.log(<h1>Hello world!</h1>)
```
- An object


3. What's wrong with this code:
```
root.render(
    <h1>Hi there</h1>
    <p>This is my website!</p>
)
```
- JSX must return only one parent, multiple parents are not allowed

4. What does it mean for something to be "declarative" instead of "imperative"?
- Imperative means we need to give specific step-by-step instructions on how to accomplish a task.
- Declarative means we can write our code to simply "describe" what should show up on the page and allow the tool(react) to handle the details on how 
to put those things on the page

5. What does it mean for something to be "composable"?
- breaking the larger pieces into small individual pieces and reusing them.

1. What is a React component?
- It is a function which returns a JSX code and reusable
- A function that returns React elements

2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```
- No parent? X
- Pascal case

3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <img src="./react-logo.png" width="40px" alt="React logo" />
        </header>
    )
}

root.render(Header())
```
- multiple parents? X
- <Header/> not Header()

1. What do props help us accomplish?
- props are similar to passing arguments to the function, we pass props as arguments in our functional components. so the data is dynamic not hardcoded.
- Make a component reusable

2. How do you pass a prop into a component?
- props are passed into the functional components as arguments.
- <Contact name="Mr.Kitty">

3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
- No, Native HTML elements (<div>, <button>, etc.) only support valid HTML attributes.
- React passes unknown props to the DOM, which can result in invalid HTML or warnings (depending on the prop and React version).
   
4. How do I receive props in a component?
function Navbar() {
    return (
        <header>
            ...
        </header>
    )
}
- function Navbar(props) {
    return (
        <header>
            ...
        </header>
    )
}

5. What data type is `props` when the component receives it?
- object