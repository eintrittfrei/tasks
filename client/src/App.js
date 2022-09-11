import React, { useEffect, useState } from 'react'
import axios from 'axios'


const App = () => {

  const [tasks, setTasks] = useState([])

useEffect(() => {
  const getData = async () => {
    const { data } = await axios.get('./api/tasks')
    console.log(data)
    setTasks(data)
  }
 getData()
},[])

const handleChange = () => {

}

const taskList = (
  <>
  <div className='m-10'>
    <div>
      {tasks.map(task => {
        if (task !== null) {
          return (
            <>
              <div key={task._id} className='grid grid-cols-4 divide-x-2 divide-y-2 '>
                <input type='checkbox' checked={task.completed} onChange={handleChange} />
                <p className='bg-slate-700 text-white rounded-sm px-4 py-4'>{task.task}</p>
                <p className='bg-red-400 text-white rounded-sm px-4 py-4'>{task.createdAt}</p>
                <button className='bg-slate-700 text-white rounded-sm px-4 py-4'>Details</button>
              </div>
            </>
          )
        } return null
      })}
    </div>
  </div>
  <div key='navig'>
    <input key='add' type="text" />
    <button key='sub' className='bg-slate-700 text-white rounded-sm px-4 py-4'>Add</button>
  </div>
  </>
)




  return (
    <>
   {taskList}
    </>

  )
}

export default App
