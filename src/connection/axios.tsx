import axios from "axios";

const api = axios.create({
  baseURL: "https://inolab-api.onrender.com//api/app",
});

export default api;