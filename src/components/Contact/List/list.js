import { useState } from "react";

function List({ contacts, addContact }) {
  const deleteContact = (index) => {
    const updatedContacts = [...filtered];
    const itemIndex = updatedContacts.findIndex(() => filtered > 0);
    console.log("index", itemIndex);
  };

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
            onClick={() => deleteContact()}
            key={i}
            className=" bg-slate-200 p-1 mb-1 flex rounded-xl items-center  justify-between">
            <span className="name">{contact.fullname}</span>
            <span className="phone">{contact.phone_number}</span>
            <button className="p-3 bg-red-400">X</button>
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
