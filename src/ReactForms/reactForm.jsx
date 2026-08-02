import "./form.css"
export default function ReactFormApp(){

    function signUp(formData){
        const email = formData.get("email")
        const password = formData.get("password")
        console.log(email)
        console.log(password)
        // gather the info from the form
        // send it to backend
    }

  return(
    <>
        <section>
            <h1>Signup Form</h1>
            <form action={signUp}>
                <label htmlFor="email">Email :</label>
                <input id="email" type="email" name="email" placeholder="joe_schmoe@mail.com"/>
                <br />
               
                <label htmlFor="password">Password :</label>
                <input id="password" type="password" name="password" />
                <br />

                <button>submit</button>
            </form>
        </section>
    </>
  )
}

/* 
event.preventDefault() is a method that prevents the browser's default behavior for an event.
In the context of a form, it stops the browser from submitting the form and reloading the page.

Q. What is the browser's default behavior?
    - When you click a Submit button inside a form, the browser automatically:
        1. Collects the form data.
        2. Sends it to the URL specified in the form's action attribute.
        3. Reloads or navigates to another page.

Q. Why is this a problem in React?
    - React applications are Single Page Applications (SPAs). Instead of letting the browser reload the page, React wants to:

        1. Validate the form
        2. Read the form values
        3. Call an API
        4. Update the UI
        5. Stay on the same page
    If the browser reloads the page immediately, your JavaScript may not finish running, and the React app will restart.
*/