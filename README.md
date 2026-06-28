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