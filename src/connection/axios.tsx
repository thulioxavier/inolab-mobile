import axios from "axios";

const api = axios.create({
  baseURL: "http://690d-2804-d59-c8e0-bf00-b9c3-5741-3813-6b90.ngrok.io/api/app",
});

export default api;