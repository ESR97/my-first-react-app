import axios from "axios";

export const getStudentList = () => {
  return axios.get("http://localhost:8888/studentList");
};
