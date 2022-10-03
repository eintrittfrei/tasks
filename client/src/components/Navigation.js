import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getPayload } from './auth/Payload'

const Nav = () => {
  const navigate = useNavigate()
  // const [userinfo, setUserInfo] = useState([])

  const handleLogout = () => {
    window.localStorage.removeItem('token')
    navigate('/tasks')
  }

  const userIsLoggedIn = () => {
    const payload = getPayload()
    if (!payload) return false
    const currentTime = Math.round(Date.now() /1000)
    return currentTime < payload.exp // bool 
  }

  // const userId = () => {
  //   const payload = getPayload()
  //   if (!payload) return false
  //   console.log('SUB',payload.sub)
  //   return payload.sub
  // }

  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await axios.get()
  //   }
  // }) 

  return (
    <nav className='flex justify-center space-x-4 m-5'>
      <a href='/' className='font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 
      hover:text-slate-900'>Home</a>
      <a href='/tasks' className='font-bold px-3 py-2 text-slade-700 rounded-lg 
      hover:bg-slate-100 hover:text-slate-900'>Back to tasklist</a>

      {userIsLoggedIn() ?
      <>
        <a href='/new-task' className='font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900'>Add task</a>
        <button onClick={handleLogout} className='font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900'>Logout</button>
      </> 
      :
      <>
        <a href='/login' className='font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900'>Login</a>
        <a href='/register' className='font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900'>Register</a>
      </>
      }
    </nav>
  )
}

export default Nav