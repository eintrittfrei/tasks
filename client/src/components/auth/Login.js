import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { getPayload } from './Payload'
import Navigation from '../Navigation'


const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const setTokenToLocalStorage = (token) => {
    window.localStorage.setItem('token', token)
  }

  const handleChange = (event) => {
    const newLoginCredentials = { ...formData, [event.target.name] : event.target.value }  
    setFormData(newLoginCredentials)  
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const { data } = await axios.post('/api/login', formData)
        setTokenToLocalStorage(data.token)
        getPayload()
        navigate('/tasks')
    
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
    <Navigation />
    <div>
      <div className='m-auto grid place-items-center h-screen'>
    <form className='p-5 flex flex-col items-start border-2 border-indigo-300 shadow' onSubmit={handleSubmit}>
      <label className='my-2'>Email</label>
        <input 
          className='bg-indigo-100 shadow-inner p-1'
          name='email'
          placeholder='Email'
          onChange={handleChange}
          value={formData.email}
        />
      <label className='my-2'>Password</label>
        <input
          className='bg-indigo-100 shadow-inner p-1'
          type='password'
          placeholder='password'
          onChange={handleChange}
          name='password'
          value={formData.password}
        />
      <button 
        type='submit'
        className='my-4 hover:bg-violet-600 active:bg-violet-700 focus:outline-none'
      >Login</button>
    </form>
    </div>
    </div>
    </>
  )
} 

export default Login