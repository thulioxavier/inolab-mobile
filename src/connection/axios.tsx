import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.8:8080/api/app",
  headers: {
    'Authorization': `Basic ${123456789}`
  }
});

export default api;