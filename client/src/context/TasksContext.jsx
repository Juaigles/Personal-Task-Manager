import { createContext, useContext, useState } from "react";
import { createTaskRequest, deleteTaskRequest, getTaskRequest, getTasksRequest, updateTaskRequest } from '../api/tasks'


const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error("useTask must be used whithin a TaskProvider");

    }
    return context;
}

export function TaskProvider({ children }) {

    const [tasks, setTasks] = useState([]);

    const getTasks = async () => {
        try {
            const res = await getTasksRequest();
            setTasks(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    const createTask = async (task) => {
        try {
            const response = await createTaskRequest(task);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error.response.data);

        }
    }

    const deleteTask = async (id) => {

        try {
            const response = await deleteTaskRequest(id);
            if (response.status === 204) setTasks(tasks.filter(tasks => tasks._id !== id))
        } catch (error) {
            console.log(error.response);

        }
    }

    const updateTask = async (id, task) => {

        try {
            await updateTaskRequest(id,task);

        } catch (error) {
            console.log(error.response);

        }
    }

    const getTask = async (id) => {

        try {
            const response = await getTaskRequest(id);
            return response.data;
        } catch (error) {
            console.log(error.response);

        }
    }

    return (
        <TaskContext.Provider value={{
            tasks,
            createTask,
            getTasks,
            deleteTask,
            updateTask,
            getTask
        }}>
            {children}
        </TaskContext.Provider>
    )
}