import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Form from "./Form";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item){
    setItems(items=>[...items, item])
    console.log(items);
  }

  return (
    <div className="App">
      <Header />
      <Form onAddItem= {handleAddItem}/>
    </div>
  );
}

export default App;
