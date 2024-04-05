import { useState, useEffect } from "react";
import List from "./List/list";
import Form from "./Form/form";

function Contacts() {
  const deleteContact = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
  };

  // Usage: <List contacts={contacts} deleteContact={deleteContact} />
  const [contacts, setContacts] = useState([
    // {
    //   fullname: "Betül",
    //   phone_number: 3333333333,
    // },
    // {
    //   fullname: "Alper",
    //   phone_number: 123123123,
    // },
    // {
    //   fullname: "Fatma",
    //   phone_number: 444444444,
    // },
  ]);
  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
      <h2>My Contacts</h2>
      <List contacts={contacts} deleteContact={deleteContact} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
