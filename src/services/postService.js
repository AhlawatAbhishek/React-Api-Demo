import axios from "axios";

const api = axios.create({
  baseURL: "http://jsonplaceholder.typicode.com",
});

const getPosts = () => api.get("/posts");

export default getPosts;
