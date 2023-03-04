import axios from "axios";

const api = axios.create({
  baseURL: "https://campaigns-api-challenge.herokuapp.com/v1",
});

export default api;