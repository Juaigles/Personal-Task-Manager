import React from 'react'

function HomePage() {
  return (
    <div className='flex items-center  justify-center  h-[calc(90vh-90px)] '>
      <div className='  bg-zinc-800 max-w-2xl  p-10 rounded-md'>
        <h1 className='text-2xl font-bold mb-6'>WELCOME TO THE PERSONAL TASK MANAGER</h1>
        <p>Hi! I'm Jota, and this is my personal project which implements MERN technology. It's a straightforward task manager with protected routes. The login/register functionality is built using Express and MongoDB, employing the JWT authentication strategy. The styles have been designed using Tailwind CSS.</p>
      </div>
     
     

    </div>
  )
}

export default HomePage