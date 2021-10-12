import React, { useState } from "react";
import { TodoList, LoaderOverlay } from "../components";
import axios from "../utils/axios";

export default function Home() {
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
