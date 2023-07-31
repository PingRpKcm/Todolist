import ToDo from "./components/ToDo";
import "./App.css";
import { useEffect, useState } from "react";
import { addToDo, getAllToDo, updateToDo, deleteToDo, updateChangeStatus } from "./utils/HandleApi";

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");
  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (_id,text) => {
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  }

  const handleProgressUpdate = async (todoId, newProgress) => {
    try {
      await updateChangeStatus(todoId, newProgress,setToDo,setIsUpdating);
      setToDo((prevToDo) =>
        prevToDo.map((item) =>
          item._id === todoId ? { ...item, status: newProgress } : item
        )
      );
    } catch (error) {
      console.error('Error updating progress:', error);
    }
  };
  return (
    <>
      <div className="container">
        <h1>
          <b>ToDo App</b>
        </h1>
        <div className="top">
          <input
            type="text"
            placeholder="Add ToDo..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>
          <div
            className="add"
            onClick={
              isUpdating
                ? () => updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
                : () => addToDo(text, setText, setToDo)
            }
          >
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>
        <div className="list">
          {toDo.map((item) => (
            <ToDo key={item._id} text={item.text} progress={item.status}
            updateMode= {() => updateMode(item._id,item.text)} 
            deleteToDo={() => deleteToDo(item._id, setToDo)}
            updateProgress={(newProgress) => handleProgressUpdate(item._id, newProgress)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
