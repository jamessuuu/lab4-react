import React, { useState } from 'react';
import "./App.css";
import List from "./List";
import Add from "./Add";

function Form() {
  const [items, setItems] = useState([]);

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <div className="container">
      <div className="card">
        <div className="title">Tasks</div>
        <List items={items} />
        <Add onAddItem={handleAddItem} />
      </div>
    </div>
  );
}

export default Form;
