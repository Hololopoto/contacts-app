import { useState, useEffect } from "react";
import List from "./List/list";
import Form from "./Form/form";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
    console.log(contacts);
  }, [contacts]);
  return (
    <div
      id="container"
      className="w-[400px] border-8 shadow-md p-5 rounded-3xl bg-glowy">
      <h2 className="text-slate-700 m-3 text-2xl">My Contacts</h2>
      <List contacts={contacts} addContact={setContacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
