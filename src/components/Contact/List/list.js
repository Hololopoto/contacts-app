import { useState } from "react";

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
  console.log(filtered);

  // const deleteContact = (id) => {
  //   const updatedContacts = [...filtered];
  //   const itemIndex = updatedContacts.findIndex((contact) => contact.id === id);
  // };
  const deleteContact = (id) => {
    const updatedContacts = [...contacts];
    const itemIndex = updatedContacts.findIndex((contact) => contact.id === id);
    if (itemIndex !== -1) {
      updatedContacts.splice(itemIndex, 1);
      console.log(itemIndex);
      addContact(updatedContacts);
    }
  };

  return (
    <div>
      <input
        placeholder="Filter Contact"
        className="w-full p-1 box-border box"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />

      <div className="list my-4 px-6 ">
        {filtered.map((contact, i) => (
          <div
            key={i}
            className=" bg-slate-200 p-1 mb-1 flex rounded-xl items-center  justify-between">
            <span className="name">{contact.fullname}</span>
            <span className="phone">{contact.phone_number}</span>
            <button
              onClick={() => deleteContact(contact.id)}
              className="px-3 rounded-full hover:bg-slate-300 bg-slate-400">
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
