import React, { useState, useEffect } from "react";

const Spinner = () => {
  const endpoint = window.REACT_APP_API_URL;
  const [task, setTask] = useState("");
  const [items, setItems] = useState("");

  useEffect(() => {
    // fetch todos
  }, []);

  return (
    <div>
      <p>TODOs ( {endpoint} ) </p>
    </div>
  );
};
export default Spinner;
