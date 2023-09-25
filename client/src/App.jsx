import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

import ProtectedRoute from './ProtectedRoute';
import HomePage from './pages/HomePage';
import TaskFormPage from './pages/TaskFormPage';
import TasksPage from './pages/TasksPage';
import Profile from './pages/Profile';
import { TaskProvider } from './context/TasksContext';
import Navbar from '../src/components/Navbar'

function App() {


  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
       <main className='container mx-auto px-10'>
       <Navbar/>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />

            <Route element={<ProtectedRoute />}>
              <Route path='/tasks' element={<TasksPage />} />
              <Route path='/add-task' element={<TaskFormPage />} />
              <Route path='/task/:id' element={<TaskFormPage />} />
              <Route path='/profile' element={<Profile />} />
            </Route>
          </Routes>
       </main>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  )
}

export default App
