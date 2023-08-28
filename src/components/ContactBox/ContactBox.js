import "./ContactBox.css";

const ContactBox = () => {
  return (
    <>
      <h2 className="contactTitle">CONTACT</h2>
      <textarea className="textContact" placeholder="Enter your text here..." />
      <div className="myInfo">
        <h3>SEWERYN GOLBA</h3>
        <h3>EMAIL: SGOOLB@GMAIL.COM</h3>
        <h3>PHONE: 881 515 126</h3>
      </div>
    </>
  );
};

export default ContactBox;
