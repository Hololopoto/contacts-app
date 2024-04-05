import { useState } from "react";

function List({ contacts, deleteContact }) {
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
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />

      <ul className="list">
        {filtered.map((contact, i) => (
          <li onClick={deleteContact} key={i}>
            <span className="name">{contact.fullname}</span>
            <span className="phone">{contact.phone_number}</span>
          </li>
        ))}
      </ul>
      <span id="Counter">
        <div>Total: {contacts.length}</div>
        <div>Filter: {filtered.length}</div>
      </span>
    </div>
  );
}

export default List;
