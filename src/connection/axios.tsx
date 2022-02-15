import axios from "axios";

const api = axios.create({
  baseURL: "http://e798-2804-d59-c8e0-bf00-b44a-4a32-bde2-c1d3.ngrok.io/api/app",
});

export default api;