import axios from "axios";

const API_URL = "http://localhost:3001";

export const RoomService = {
  async getAll() {
    return axios.get("http://localhost:3001/rooms");
  },

  async getSingle(id: number) {
    return axios.get(`http://localhost:3001/rooms?id=${id}`);
  },
};
