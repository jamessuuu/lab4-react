import React, { useState } from 'react';

function Add({ onAddItem }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !date) return;

    const newItem = { name, date, isChecked: false, id: Date.now() };
    onAddItem(newItem);
    setName("");
    setDate("");
  }

  return (
    <div className="add">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="task-input"
          placeholder="Enter task..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="date"
          className="date-input"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button className="add-button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default Add;
