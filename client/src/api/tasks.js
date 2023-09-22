import axios from "./axios";


export const getTasksRequest = () => axios.get('/tasks')

export const getTaskRequest = (id) => axios.get(`/task/${id}`)

export const createTaskRequest = async (task) => {
    try {
      const response = await axios.post('/task', task);
      return response.data;
    } catch (error) {
      console.error('Error al crear una tarea:', error);
      throw error;
    }
  }

export const updateTaskRequest = (task) => axios.put(`/task/${task._id}`,task)

export const deleteTaskRequest = (id) => axios.delete(`/task/${id}`)