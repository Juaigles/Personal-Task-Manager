import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Navbar() {

    const {isAuthenticated, logout, user} = useAuth()
    return (
        <nav className='bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg'>
            <Link to={isAuthenticated ? "/tasks" : "/"}>
                <h1 className='text-2xl font-bold'>Tasks Manager</h1>
            </Link>
            <ul className='flex gap-x-2'>
                {isAuthenticated ? (
                    <>

                        <li>
                            Welcome {user.username}
                        </li>
                        <li>
                            <Link to='/tasks'>My Tasks</Link>
                        </li>
                        <li>
                            <Link to='/add-task'>New Task</Link>
                        </li>
                        <li>
                            <Link to='/' className='px-4 bg-orange-500 py-1 rounded-sm' onClick={()=>{
                                logout()
                            }}>Logout</Link>
                        </li>
                    </>
                ) : (
                    <>

                        <li>
                            <Link to='/login' className='px-4 bg-orange-500 py-1 rounded-sm'>Login</Link>
                        </li>
                        <li>
                            <Link to='/register' className='px-4 bg-orange-500 py-1 rounded-sm'>Register</Link>
                        </li>
                    </>
                )}


            </ul>
        </nav>
    )
}

export default Navbar