import React, { useState } from "react";
import "./App.css";
import List from "./List";
import Add from "./Add";

function Form({ onDeleteItem }) {
  const [items, setItems] = useState([]);

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleCheckItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
    alert("Task completed!");
  }

  return (
    <div className="container">
      <div className="card">
        <div className="title">Tasks</div>
        <List
          items={items}
          onDeleteItem={handleDeleteItem}
          onCheckItem={handleCheckItem}
        />
        <Add onAddItem={handleAddItem} />
      </div>
    </div>
  );
}

export default Form;
