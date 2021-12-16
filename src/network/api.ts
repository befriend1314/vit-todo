import axios from "axios";

export const getTodoList = () => {
  return axios.get('/todo/list')
}