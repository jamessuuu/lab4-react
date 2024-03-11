import React from "react";
import { FaTrash, FaCheck } from "react-icons/fa";

function List({ items, onDeleteItem, onCheckItem }) {
  return (
    <div className="list-container">
      <ul className="list">
        {items.map((item) => (
          <li className="task" key={item.id}>
            <span className="task-name">{item.name}</span>
            <span className="task-date">{item.date}</span>
            <span className="actions">
              <button
                onClick={() => onCheckItem(item.id)} // Changed handleDeleteItem to onDeleteItem
                className="icon-button"
              >
                <FaCheck className="white-icon" />
              </button>
              <button
                onClick={() => onDeleteItem(item.id)} // Changed handleDeleteItem to onDeleteItem
                className="icon-button"
              >
                <FaTrash className="white-icon" />
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
