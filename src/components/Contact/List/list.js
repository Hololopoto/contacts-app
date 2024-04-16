import { useEffect, useState } from "react";

function List({ contacts, addContact }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }, [contacts]);

  useEffect(() => {
    const storedContacts = localStorage.getItem("contacts");
    if (storedContacts) {
      addContact(JSON.parse(storedContacts));
    }
  }, []);

  const deleteContact = (id) => {
    const updatedContacts = [...contacts];
    const itemIndex = updatedContacts.findIndex((contact) => contact.id === id);
    if (itemIndex !== -1) {
      updatedContacts.splice(itemIndex, 1);
      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      addContact(updatedContacts);
    }
  };
  const toggleComplete = (id) => {
    const checkedContacts = contacts.map((contact) => {
      if (contact.id === id) {
        return {
          ...contact,
          completed: !contact.completed,
        };
      }
      return contact;
    });
    localStorage.setItem("contacts", JSON.stringify(checkedContacts));
    addContact(checkedContacts);
  };

  return (
    <div>
      <input
        placeholder="Filter Todo"
        className="w-full p-1 box-border box"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <div className="list my-5 px-2 ">
        {filtered.map((contact, i) => (
          <div
            key={i}
            className={`bg-slate-200 p-1 mb-1  flex rounded-xl items-center justify-between ${
              contact.completed ? "line-through text-gray-400" : ""
            }`}>
            <span className="name ml-4 w-1/2">{contact.fullname}</span>
            <span className="phone pr-5 w-1/2">{contact.phone_number}</span>
            <input
              type="checkbox"
              className="m-1"
              name=""
              id=""
              checked={contact.completed}
              onChange={() => toggleComplete(contact.id)}
            />
            <button
              onClick={() => deleteContact(contact.id)}
              className="px-3 !text-black rounded-full hover:bg-slate-300 bg-slate-400">
              X
            </button>
          </div>
        ))}
      </div>
      <span className="flex text-slate-700 justify-between pb-3">
        <div>Total: {contacts.length}</div>
        <div>Filter: {filtered.length}</div>
      </span>
    </div>
  );
}

export default List;
