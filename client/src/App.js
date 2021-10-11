import React, { useState, useEffect, useCallback } from "react";
import { TodoItem } from "./components";
import axios from "axios";
import "./App.css";

function App() {
  const app_env = window.REACT_APP_ENVIRONMENT;
  const endpoint = window.REACT_APP_API_URL;

  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    if (input !== "") {
      axios
        .post(
          endpoint + "/api/task",
          {
            task: input,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((rez) => {
          console.log("added task: ", rez);

          getItems();
          setInput("");
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }

  function removeItem(id) {
    axios
      .delete(endpoint + "/api/deleteTask/" + id, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        console.log("deleted task: ", id);
        getItems();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function checkItem(id) {
    axios
      .put(endpoint + "/api/tasks/" + id, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        console.log("finished task: ", id);
        getItems();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function undoItem(id) {
    axios
      .put(endpoint + "/api/undoTask/" + id, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        console.log("undo task: ", id);
        getItems();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  const getItems = useCallback(() => {
    axios
      .get(endpoint + "/api/tasks")
      .then((rez) => {
        if (rez.data) {
          setItems([...rez.data]);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, [endpoint]);

  useEffect(() => {
    getItems();
  }, [getItems]);

  return (
    <div className="todolist">
      <div className="heading">
        <h1>To-Do List</h1>
        <p>{app_env}</p>
      </div>
      <input
        type="text"
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />
      <button onClick={addItem}>Add</button>

      <div className="items">
        <ul>
          {items.map((item) => (
            <TodoItem
              key={item._id}
              id={item._id}
              item={item}
              onCheck={checkItem}
              onRemove={removeItem}
              onUndo={undoItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
