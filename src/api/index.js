import axios from "axios";
import Posts from "./Posts";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

export default {
  get posts() {
    return new Posts(api);
  },
};
