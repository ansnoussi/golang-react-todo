import axios from "axios";

// const baseURL = window.REACT_APP_API_URL;
const baseURL = "http://localhost:9000";

export default axios.create({
  baseURL,
});
