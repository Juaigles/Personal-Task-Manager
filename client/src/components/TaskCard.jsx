import React from 'react'
import { useTasks } from '../context/TasksContext';
import { Link } from 'react-router-dom';
import days from 'dayjs'
import utc from 'dayjs/plugin/utc'
days.extend(utc)

function TaskCard({ task }) {
    const { deleteTask } = useTasks()
    const title = task.title.charAt(0).toUpperCase() + task.title.slice(1)
    const description = task.description.charAt(0).toUpperCase() + task.description.slice(1)

    return (
        <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>

            <h1 className='text-2xl font-bold'>{title}</h1>
            <hr className='p-2'/>

            <div className='bg-zinc-700 h-2/6 p-2 '>

                <p className=' text-slate-300'>{description}</p>
            </div>
            <p className='py-3'>{days(task.date).utc().format("DD/MM/YYYY")}</p>


            <div className='flex gap-2 items-center '>
                <button
                    className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md'
                    onClick={() => {
                        deleteTask(task._id);
                    }}>Delete</button>
                <Link to={`/task/${task._id}`}
                    className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md'
                >Edit</Link>
            </div>
        </div>
    )
}

export default TaskCard