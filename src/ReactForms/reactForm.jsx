import "./form.css"
export default function ReactFormApp(){

    function handleSubmit(event){
        event.preventDefault()
        console.log("submitted")
        const formEl = event.currentTarget
        const formData = new FormData(formEl)
        const email = formData.get("email")
        console.log(email)
        // gather the info from the form
        // send it to backend
    }

  return(
    <>
        <section>
            <h1>Signup Form</h1>
            <form onSubmit={handleSubmit} method="post">
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