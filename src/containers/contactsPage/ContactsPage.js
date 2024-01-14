import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    const isDuplicate = () => {
      const found = props.contacts.find((contact) => contact.name === name);
      if (found) {
        setDuplicate(true);
      } else {
        setDuplicate(false);
      }
    };
    isDuplicate();
  }, [name, props.contacts]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    }
    if (name === "phone") {
      setPhone(value);
    }
    if (name === "email") {
      setEmail(value);
    }
  };

  /*
  Add contact info and clear data
  if the contact name is not a duplicate
  */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!duplicate) {
      props.addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          duplicate={duplicate}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={props.contacts} />
      </section>
    </div>
  );
};
