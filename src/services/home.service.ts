import axios from "axios";

const API_URL = "http://localhost:3001";

export const HomeService = {
  async getAll() {
    return axios.get("http://localhost:3001/homes");
  },
};
