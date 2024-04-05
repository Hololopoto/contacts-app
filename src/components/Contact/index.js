import { useState, useEffect } from "react";
import List from "./List/list";
import Form from "./Form/form";

function Contacts() {
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
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
