import React from "react";
import "./Contact.css";

const Contact = ({ firstName, lastName, phone, gender }) => {
  return (
    <div className="contact">
      <h3>
        {firstName} {lastName}
      </h3>
      <p>{phone}</p>
      <p>{gender}</p>
    </div>
  );
};

export default Contact;
