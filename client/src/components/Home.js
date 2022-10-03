import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {


  return (
    <>
    <div className='flex h-screen justify-center items-center'>
      <Link to={`/tasks`}>
        <h1 className='font-bold px-3 py-2 text-slate-700 rounded-lg text-5xl'>Nascimento's task list</h1>
      </Link>
    </div>
    
    </>
  )
}

export default Home 