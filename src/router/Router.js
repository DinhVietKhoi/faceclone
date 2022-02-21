import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'

function Router({user,handleUsercurrent,userCurrent}) {
  return (
    <Routes>
        <Route path='/' element={<Login user={user} handleUsercurrent={handleUsercurrent}/>}/>
        <Route path='/' element={<Home userCurrent={userCurrent}/>}/>
    </Routes>
  )
}

export default Router