import axios from "axios";

const api = axios.create({
  baseURL: "http://7bcf-200-101-72-14.ngrok.io/api/app",
});

export default api;