import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.8:5000/api/app",
});

export default api;