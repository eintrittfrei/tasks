import React from 'react'
import { Link } from 'react-router-dom'

const DisplayTasks = ({ task, _id, completed }) => {


  return (
    (
      <>
      <div className=''>
        <div key={_id} className='flex flex-row items-center '>
          <div><input type='checkbox' checked={completed} /></div>
          <div><p className='px-4 py-2'>{task}</p></div>
          <div><Link to={`/tasks/${_id}/`}className=''>Details</Link></div>
        </div>
      </div>
      </>
    )
  )
}

export default DisplayTasks
