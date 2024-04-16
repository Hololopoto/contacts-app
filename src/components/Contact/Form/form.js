import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const initialFormValues = { fullname: "", phone_number: "" };

function Form({ addContact, contacts }) {
  const [form, setForm] = useState(initialFormValues);
  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }

    addContact([...contacts, { id: uuidv4(), ...form }]);
  };

  return (
    <form className="" onSubmit={onSubmit}>
      <div>
        <input
          name="fullname"
          className="w-full p-1 m-1 box-border box"
          placeholder="Todo Title"
          value={form.fullname}
          onChange={onChangeInput}
        />
      </div>
      <div>
        <input
          name="phone_number"
          className="w-full p-1 m-1 box-border box"
          placeholder="Todo Content"
          value={form.phone_number}
          onChange={onChangeInput}
        />
      </div>
      <div className="btn flex justify-end p-3">
        <button className="px-10 py-1 border-2 bg-slate-300 hover:bg-slate-400 hover:text-slate-100 transition-all text-slate-800 rounded-xl">
          Add
        </button>
      </div>
    </form>
  );
}

export default Form;
