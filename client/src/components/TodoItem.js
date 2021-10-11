import React from "react";
import { BsCheckLg, BsXLg, BsArrowCounterclockwise } from "react-icons/bs";

function TodoItem({ id, item, onCheck }) {
  return (
    <li>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {item}
        <div>
          <BsCheckLg
            style={{ color: "#2a9d8f", marginLeft: 10 }}
            onClick={() => {
              onCheck(id);
            }}
          />
          <BsXLg
            style={{ color: "#e63946", marginLeft: 10 }}
            onClick={() => {
              onCheck(id);
            }}
          />
          <BsArrowCounterclockwise
            style={{ color: "#ffb703", marginLeft: 10 }}
            onClick={() => {
              onCheck(id);
            }}
          />
        </div>
      </div>
    </li>
  );
}

export default TodoItem;
