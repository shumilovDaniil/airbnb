import axios from "axios";

export const CategoriesService = {
  async getAll() {
    return axios.get("http://localhost:3001/categories");
  },
};
