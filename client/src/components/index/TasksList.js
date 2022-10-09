import React from 'react'
import { Link } from 'react-router-dom'

const DisplayTasks = ({ task, _id, completed }) => {


  return (
    (
      <>
      
        <tr key={_id} className=''>
          <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-left text-slate-500 dark:text-slate-400'><input type='checkbox' checked={completed} /></td>
          <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-4 text-slate-500 dark:text-slate-400'><p className='px-4 py-2'>{task}</p></td>
          <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'><Link to={`/tasks/${_id}/`}className=''>Details</Link></td>
        </tr>
      
      </>
    )
  )
}

export default DisplayTasks
