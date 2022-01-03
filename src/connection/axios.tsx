import axios from "axios";

const api = axios.create({
  baseURL: "http://e405-168-228-213-134.ngrok.io/api/app",
});

export default api;