import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './components/index/Index'
import Home from './components/Home'
import Show from './components/index/Show'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Add from './components/index/Add'


const App = () => {




return (

  <BrowserRouter >
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/tasks/' element={<Index/>} />
      <Route path='/tasks/:id/' element={<Show />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />} />
      <Route path='/new-task' element={<Add />} />
    </Routes>
  </BrowserRouter>
)


}

export default App
