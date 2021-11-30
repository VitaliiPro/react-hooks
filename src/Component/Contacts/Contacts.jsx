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
  const [search, setContact] = useState("");
  function handleInput(event) {
    setContact(event.target.value);
  }

  const filterContacts = contacts.filter((list) => {
    return (
      list.lastName.toLowerCase().includes(search.toLowerCase()) ||
      list.firstName.toLowerCase().includes(search.toLowerCase())
    );
  });

  const mapContacts = filterContacts.map((item, index) => {
    return (
      <Contact
        key={index}
        firstName={item.firstName}
        lastName={item.lastName}
        phone={item.phone}
        gender={item.gender}
      />
    );
  });

  return (
    <div className="container">
      <input
        value={search}
        className="input"
        name="search"
        type="search"
        placeholder="Search..."
        onChange={handleInput}
      />
      {mapContacts}
    </div>
  );
};

export default Contacts;
