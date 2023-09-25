import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function LoginPage() {

    const { register, handleSubmit, formState: { errors }, } = useForm();
    const { signin, errors: signInErrors, isAuthenticated } = useAuth();
    const navigate = useNavigate()


    const onSubmit = handleSubmit((data) => {
        signin(data);
    })

    useEffect(() => {
        if (isAuthenticated) navigate("/tasks")
    }, [isAuthenticated])

    return (
        <div className='flex items-center justify-center h-[calc(100vh-100px)]'>
            <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
                {
                    signInErrors.map((error, i) => (
                        <div className='bg-red-500 p-2 text-white text-center my-2' key={i}>
                            {error}
                        </div>
                    ))
                }

                <h1 className='text-3xl font-bold my-2'>Login</h1>
                <form onSubmit={onSubmit}>

                    <input type="email"  {...register('email', { required: true })}
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                        placeholder='Email'
                    />
                    {
                        errors.email && (
                            <p className='text-red-500'>
                                Email is required
                            </p>
                        )
                    }
                    <input type="password" {...register('password', { required: true })}
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                        placeholder='Password'
                    />
                    {
                        errors.password && (
                            <p className='text-red-500'>
                                Password is required
                            </p>
                        )
                    }
                    <button type='submit'
                     className='bg-orange-500 text-white px-4 py-2 rounded-3xl  my-2  hover:text-sky-500'>
                    
                        Login
                    </button>
                </form>
                <p className='flex gap-x-2 justify-between  text-violet-400'>
                    Don't have an account yet? <Link to="/register" className='text-sky-500 hover:text-white'>Sign up</Link>
                </p>
            </div>
        </div>
    )
}

export default LoginPage