import "./style.css"
export default function ReactFormApp(){
  return(
    <>
        <section>
            <h1>Signup Form</h1>
            <form>
                <label htmlFor="email">Email :</label>
                <input id="email" type="email" name="email" placeholder="joe_schmoe@mail.com"/>
                <br></br>
                <br></br>
                <label>Password :</label>
                <input id="password" type="password" name="password" />

            </form>
        </section>
    </>
  )
}