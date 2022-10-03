import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Navigation from '../Navigation'

const Register = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })

const handleChange = (event) => {
  const newRegistration = { ...formData, [event.target.name] : event.target.value }
  setFormData(newRegistration)
  }
const handleSubmit = async (event) => {
  event.preventDefault()
  try {
        await axios.post('/api/register', formData)
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
        <form 
            className='p-5 flex flex-col items-start border-2 border-indigo-300 shadow' 
            onSubmit={handleSubmit}>
            <label className='my-2'>Username</label>
            <input 
            className='bg-indigo-100 shadow-inner p-1'
            placeholder='username'
            type='text'
            name='username'
            value={formData.username}
            onChange={handleChange}
          />
            <label className='my-2'>Email</label>
            <input 
            className='bg-indigo-100 shadow-inner p-1'
            placeholder='Email'
            type='text' 
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
          <label className='my-2'>Password</label>
          <input 
            className='bg-indigo-100 shadow-inner p-1'
            placeholder='password'
            type='password' 
            name='password'
            value={formData.password}
            onChange={handleChange}
          />
          <label className='my-2'>Password confirmation</label>
          <input 
            className='bg-indigo-100 shadow-inner p-1'
            placeholder='Password confirmation'
            type='password' 
            name='passwordConfirmation'
            value={formData.passwordConfirmation}
            onChange={handleChange}
          />
          <button 
            className='my-4 hover:bg-violet-600 active:bg-violet-700 focus:outline-none' 
            type='submit'
          >Register</button>
        </form>
      </div>
    </div>
  </>
  )
}

export default Register