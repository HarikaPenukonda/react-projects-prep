export default function Contact(props) {
  console.log(props) // prints email,img,name,phone from index.jsx
  return (
    <>
      
        <article className="contact-card">
          <img
            src={props.img}
            alt="Photo of Mr. Whiskerson"
          />
          <h3>{props.name}</h3>
          <div className="info-group">
            <img src="src/assets/phone-icon.png" alt="phone icon" />
            <p>{props.phone}</p>
          </div>
          <div className="info-group">
            <img src="src/assets/mail-icon.png" alt="mail icon" />
            <p>{props.email}</p>
          </div>
        </article>
    </>
  );
}


/**
Object
email: "mr.whiskaz@catnap.meow"
img: "src/assets/mr-whiskerson.png"
name: "Mr. Whiskerson"
phone: "(212) 555-1234"  
 */