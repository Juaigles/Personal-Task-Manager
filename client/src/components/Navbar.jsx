import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Navbar() {

    const {isAuthenticated, logout, user} = useAuth()
    return (
        <nav className='bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg'>
            <Link to={isAuthenticated ? "/tasks" : "/"}>
                <h1 className='text-2xl font-bold hover:text-orange-500'>Tasks Manager</h1>
            </Link>
            <ul className='flex gap-x-2'>
                {isAuthenticated ? (
                    <>
                        <li>
                            <Link to='/tasks' className='hover:text-orange-500'>My Tasks</Link>
                        </li>
                        <li>
                            <hr />
                        </li>
                        <li>
                            <Link to='/add-task' className='hover:text-orange-500'>New Task</Link>
                        </li>

                        <li className='ml-5'>
                             <span className='text-orange-500  font-bold m-1'>Welcome</span>{user.username}
                        </li>
                        <li>
                            <Link to='/' className=' px-4 bg-gray-500 py-1 rounded-3xl hover:text-orange-500' onClick={()=>{
                                logout()
                            }}>Logout</Link>
                        </li>
                    </>
                ) : (
                    <>

                        <li>
                            <Link to='/login' className='px-4 bg-orange-400 py-1 rounded-xl  hover:text-sky-300'>Login</Link>
                        </li>
                        <li>
                            <Link to='/register' className='px-4 bg-orange-400 py-1 rounded-xl  hover:text-sky-300'>Register</Link>
                        </li>
                    </>
                )}


            </ul>
        </nav>
    )
}

export default Navbar