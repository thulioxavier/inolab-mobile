import axios from "axios";

const api = axios.create({
  baseURL: "http://87a9-2804-d59-c8e1-500-b9e0-2072-a22-4315.ngrok.io/api/app",
});

export default api;