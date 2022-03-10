import axios from "axios";

const api = axios.create({
  baseURL: "http://6c8c-2804-d59-c8e0-bf00-86e-8d80-7e6a-46e.ngrok.io/api/app",
});

export default api;