import "./App.css";
import Button from "./components/button/index";
import Search from "./components/search/index";
import List from "./components/list/index";
import Items from "./components/list/items/index";
import {useState} from "react";

function App() {
  const [task, setTask] = useState("");

  const [list, setList] = useState([]);

  function handleChange(taskValue) {
    setTask(taskValue);
  }

  function handleButton() {
    setList([...list, task]);
  }

  return (
    <div className="contentWrapper">
      <div>
        <Search handleCallback={handleChange} />
        <Button handleChange={handleButton} />
      </div>
      <List />
    </div>
  );
}

export default App;
