export default function Contact() {
  return (
    <>
      <div className="contacts">
        <article className="contact-card">
          <img
            src="src/assets/mr-whiskerson.png"
            alt="Photo of Mr. Whiskerson"
          />
          <h3>Mr. Whiskerson</h3>
          <div className="info-group">
            <img src="src/assets/phone-icon.png" alt="phone icon" />
            <p>(212) 555-1234</p>
          </div>
          <div className="info-group">
            <img src="src/assets/mail-icon.png" alt="mail icon" />
            <p>mr.whiskaz@catnap.meow</p>
          </div>
        </article>
      </div>
    </>
  );
}
