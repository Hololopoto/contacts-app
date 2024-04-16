import { useState, useEffect } from "react";
import List from "./List/list";
import Form from "./Form/form";

function Contacts() {
  const [contacts, setContacts] = useState([]);

  return (
    <div
      id="container"
      className="w-[400px] border-8 shadow-md p-5 rounded-3xl bg-glowy">
      <h2 className="text-slate-700 m-3 text-2xl">Todos</h2>
      <List contacts={contacts} addContact={setContacts} />
      <Form contacts={contacts} addContact={setContacts} />
    </div>
  );
}

export default Contacts;
