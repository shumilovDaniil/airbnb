import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com";

export const UserService = {
  async getAll() {
    return axios.get("https://jsonplaceholder.typicode.com/users");
  },
};
