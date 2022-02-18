import axios from "axios";

const api = axios.create({
  baseURL: "http://552d-2804-d59-c8e0-bf00-b954-9b0d-7926-1428.ngrok.io/api/app",
});

export default api;