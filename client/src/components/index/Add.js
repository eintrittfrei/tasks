import React, { useState } from 'react'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../auth/Payload'
import { useNavigate } from 'react-router-dom'
import Navigation from '../Navigation'

const Add = () => {
  const navigation = useNavigate()
  const [formData, setFormData] = useState({
    task: '',
    completed: '',
    category: '',
  })

  const handleChange = (event) => {
    const newTask = { ...formData, [event.target.name] : event.target.value }
      setFormData(newTask)
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
          await axios.post('/api/tasks', formData, 
          { 
            headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
          }
        )
      navigation('/tasks')
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
      <label className='my-2'>Task</label>
        <input 
          className='bg-indigo-100 shadow-inner p-1'
          placeholder='task'
          type='text'
          name='task'
          value={formData.task}
          onChange={handleChange}
        />
      <label className='my-2'>Completed</label>
        <input 
          className='bg-indigo-100 shadow-inner p-1'
          placeholder='completed'
          type='boolean'
          name='completed'
          value={formData.completed}
          onChange={handleChange}
        />
        <label className='my-2'>Category</label>
         <input 
          className='bg-indigo-100 shadow-inner p-1'
          placeholder='category'
          type='text'
          name='category'
          value={formData.category}
          onChange={handleChange}
        />
      <button 
        className='my-4 hover:bg-violet-600
       active:bg-violet-700 focus:outline-none' 
        type='submit'
       >Add task</button>
    </form>
    </div>
    </div> 
 

    </>
  )
}

export default Add