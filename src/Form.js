// Form.js
import React, { useState } from "react";
import "./App.css";
import List from "./List";
import Add from "./Add";
import Footer from "./Footer";

function Form({ onDeleteItem }) {
  const [items, setItems] = useState([]);

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  function handleDeleteItem(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?",
    );
    if (confirmed) {
      setItems((items) => items.filter((item) => item.id !== id));
    }
  }

  function handleCheckItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item,
      ),
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to clear the list?",
    );
    if (confirmed) {
      setItems([]);
    }
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
        <div className="button-container" style={{ textAlign: "center" }}>
          <button className="clear-button" onClick={handleClearList}>
            Clear
          </button>
        </div>
        <Footer items={items} style={{ textAlign: "center" }} />
      </div>
    </div>
  );
}

export default Form;
