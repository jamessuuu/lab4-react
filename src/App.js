import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Form from "./Form";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
    console.log(items);
  }

  // function handleDeleteItem(id) {
  //   setItems((items) => items.filter((item) => item.id !== id));
  // }
  // handleDeleteItem dapat nasa Form.js na kasi yun yung parent ng List component

  return (
    <div className="App">
      <Header />
      <Form onAddItem={handleAddItem} />
    </div>
  );
}

export default App;
