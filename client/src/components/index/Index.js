import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DisplayTasks from './TasksList'
import Navigation from '../Navigation'



const Index = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/tasks')
      console.table(data)
      setTasks(data)
    }
   getData()
  },[])
  
  return (
  <>
  <Navigation />
  <div className='flex justify-center'>
  <table className='border rounded dark:border-slate-600 w-full text-sm m-2 max-w-xl'>
    <thead className='bg-slate-100'>
      <tr className=''>
        <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 text-slate-400 dark:text-slate-200 text-left'>Completed</th>
        <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 text-slate-400 dark:text-slate-200 text-left'>Task</th>
        <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 text-slate-400 dark:text-slate-200 text-left'>Date</th>
      </tr>
    </thead>
    <tbody className='bg-white dark:bg-slate-800'>
      {tasks.map(task => {
        return <DisplayTasks key={task._id} {...task}/>
      })}
      </tbody>
  </table>
  </div>
  </>
  )

}

export default Index