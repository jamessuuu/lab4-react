import React from "react";
import { FaTrash, FaCheck } from "react-icons/fa";

function List({ items, onDeleteItem, onCheckItem }) {
  const sortedItems = [...items].sort((a, b) => {
    if (a.isChecked && !b.isChecked) return -1;
    if (!a.isChecked && b.isChecked) return 1;
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="list-container">
      <ul className="list">
        {sortedItems.map((item) => (
          <li className={item.isChecked ? "task-done" : "task"} key={item.id}>
            <span className="task-name">{item.name}</span>
            <span className="task-date">{item.date}</span>
            <span className="actions">
              <button
                onClick={() => onCheckItem(item.id)}
                className="icon-button"
              >
                {item.isChecked ? (
                  <FaCheck className="green-icon" />
                ) : (
                  <FaCheck className="white-icon" />
                )}
              </button>
              <button
                onClick={() => onDeleteItem(item.id)}
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
