import "./ContactBox.css";

const ContactBox = () => {
  return (
    <div className="contact">
      <div className="avatarBox"></div>
      <div className="contactContainer">
        <h2 className="contactTitle">CONTACT</h2>
        <textarea
          className="textContact"
          rows={4}
          cols={50}
          placeholder="Enter your text here..."
        />
      </div>
    </div>
  );
};

export default ContactBox;
