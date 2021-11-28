import React, { useState } from "react";
import "./Contacts.css";
import Contact from "../Contact/Contact";

const contacts = [
  {
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male",
  },
  {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female",
  },
  {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666",
  },
  {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female",
  },
  {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male",
  },
  {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319522",
    gender: "male",
  },
];

const Contacts = () => {
  const [contact, setContact] = useState("");
  function getContact(event) {
    setContact(event.target.value);
  }

  return (
    <div className="container">
      <input
        className="input"
        name="search"
        type="search"
        placeholder="Search..."
        onChange={getContact}
      />
      {contacts
        .filter((contacts) => {
          if (contact === "") {
            return contacts;
          } else if (
            contacts.lastName.toLowerCase().includes(contact.toLowerCase())
          ) {
            return contacts;
          }
        })
        .map((item) => {
          return (
            <Contact
              key={item.lastName}
              firstName={item.firstName}
              lastName={item.lastName}
              phone={item.phone}
              gender={item.gender}
            />
          );
        })}
    </div>
  );
};

export default Contacts;
