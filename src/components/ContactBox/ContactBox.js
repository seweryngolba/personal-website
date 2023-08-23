import "./ContactBox.css";

const ContactBox = () => {
  return (
    <div className="contact">
      <div className="avatarBox"></div>
      <div className="contactContainer">
        <h2 className="contactTitle">CONTACT</h2>
        <textarea
          className="textContact"
          placeholder="Enter your text here..."
        />
        <div className="myInfo">
          <h3>SEWERYN GOLBA</h3>
          <h3>EMAIL: SGOOLB@GMAIL.COM</h3>
          <h3>PHONE: 881 515 126</h3>
        </div>
      </div>
    </div>
  );
};

export default ContactBox;
