import axios from "axios";

const api = axios.create({
  baseURL: "http://88bb-2804-d59-c8e1-500-836a-42ce-d6f7-e632.ngrok.io/api/app",
});

export default api;