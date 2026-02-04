import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
  <h1>Contact Us</h1>

  <form className="contact-form">
    <input type="text" placeholder="Name" required />
    <input type="email" placeholder="Email" required />
    <textarea placeholder="Message" required></textarea>
    <button type="submit">Submit</button>
  </form>
</div>

  );
};

export default Contact;
