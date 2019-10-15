import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.15.14:3001/api"
  //baseURL: "http://localhost:3001/api"
  //baseURL: "localhost:3001/api"
  //baseURL: "https://rocketseat-node/herokuapp.com/api"
});

export default api;
