import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DisplayTasks from './TasksList'
import Navigation from '../Navigation'



const Index = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/tasks')
      console.log(data)
      setTasks(data)
    }
   getData()
  },[])
  
  return (
  <>
  <Navigation />
  <div key='wrapper_1' className='m-10'>
    <div key='wrapper_2' >
      {tasks.map(task => {
        return <DisplayTasks key={task._id} {...task}/>
      })}
      <div className='m-3'>
      </div>
      </div>
  </div>

  </>
  )

}

export default Index