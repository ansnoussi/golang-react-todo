import axios from "axios";

const baseURL = window.REACT_APP_API_URL;

export default axios.create({
  baseURL,
});
