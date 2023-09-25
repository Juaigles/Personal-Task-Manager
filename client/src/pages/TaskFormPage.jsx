import { useForm } from 'react-hook-form'
import { useTasks, } from '../context/TasksContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)


function TaskFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id)
        console.log(task)
        setValue('title', task.title);
        setValue('description', task.description)
      };
    }
    loadTask()
  }, [])


  const onSubmit = handleSubmit(async (data) => {

    if (params.id) {
      updateTask(params.id, {
        ...data,
        date: dayjs.utc(data.date).format()
      })
    } else {
      createTask({
        ...data,
        date: dayjs.utc(data.date).format()
      })

    }

    navigate('/tasks')
  })
  return (
    <div className='flex items-center justify-center h-[calc(100vh-100px)]'>
      <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
      <h1 className='text-3xl font-bold my-2'>New Task</h1>
        <form onSubmit={onSubmit}>
          <label htmlFor="title">Title:</label>
          <input type="text" placeholder='Title'
            {...register('title')}
            className='w-full bg-zinc-600 text-white px-4 py-2 rounded-md
        my-2'
            autoFocus />

          <label htmlFor="description">Description:</label>
          <textarea rows="3" placeholder='Description'
            {...register('description')}
            className='w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2'
          ></textarea>
          <label htmlFor="date">Date:</label>
          <input type="date" {...register('date')}
            className='w-full bg-zinc-600 text-white px-4 py-2 rounded-md
          my-2' />

          <button className='bg-orange-500 px-3 py-2 rounded-md'>Save</button>
        </form>
      </div>
    </div>
  )
}

export default TaskFormPage;