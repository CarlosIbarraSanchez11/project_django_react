import axios from "axios";
const tasksApi = axios.create({
  baseURL: "http://127.0.0.1:8000/tasks/api/v1/tasks/",
});

export const getAllTasks = () =>
  // return axios.get("http://127.0.0.1:8000/tasks/api/v1/tasks/");
  tasksApi.get("/");
export const createTask = (task) => {
  // return axios.post("http://127.0.0.1:8000/tasks/api/v1/tasks/");
  return tasksApi.post("/", task);
};

export const deleteTask = (id) => {
  return tasksApi.delete(`/${id}`); // Concatenar para eliminar el id /tasks/api/v1/tasks/1
};
