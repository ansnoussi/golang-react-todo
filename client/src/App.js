import React, { useState } from "react";
import { TodoList, LoaderOverlay } from "./components";
import axios from "./utils/axios";
import "./App.css";

function App() {
  const [isLoading, setLoading] = useState(false);

  axios.interceptors.request.use(
    (config) => {
      if (!config.hideLoading) setLoading(true);
      return config;
    },
    (error) => {
      setLoading(false);
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response) => {
      setLoading(false);
      return response;
    },
    (error) => {
      setLoading(false);
      if (error.response?.status === 419) window.location.reload();
      return Promise.reject(error);
    }
  );

  return (
    <div style={{ display: "flex", flex: 1, position: "relative" }}>
      <TodoList />
      {isLoading && <LoaderOverlay />}
    </div>
  );
}

export default App;
