import React, { useState, useEffect, useCallback } from "react";
import TodoItem from "./TodoItem";
import axios from "../utils/axios";

function TodoList() {
  const app_env = window.REACT_APP_ENVIRONMENT;

  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    if (input !== "") {
      axios
        .post(
          "/api/task",
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
      .delete("/api/deleteTask/" + id, {
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
      .put("/api/tasks/" + id, {
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
      .put("/api/undoTask/" + id, {
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
      .get("/api/tasks")
      .then((rez) => {
        if (rez.data) {
          setItems([...rez.data]);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

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

export default TodoList;
