import { createContext, useContext, useState } from "react";
import { createTaskRequest, getTaskRequest } from '../api/tasks'


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
        const res = await getTaskRequest();
        setTasks(res.data)
    }

    const createTask = async (task) => {
      const res = await createTaskRequest(task)
      console.log(res);
    }

    return (
        <TaskContext.Provider value={{
            tasks,
            createTask
            , getTasks
        }}>
            {children}
        </TaskContext.Provider>
    )
}