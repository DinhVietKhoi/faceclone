import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Notfound from '../components/Notfound'
import Application from '../pages/Application'
import Body from '../pages/Body'
import Home from '../pages/Home'
import Login from '../pages/Login'

function Router({user,handleUsercurrent,userCurrent,img,idPost,upID}) {
  return (
    <Routes>
        <Route path='/faceclone/*' element={<Notfound />}/>
        <Route path='/faceclone/' element={<Body user={user} userCurrent={userCurrent} img={img} idPost={idPost} upID={upID}/>}/>
        <Route path='/faceclone/' element={<Application userCurrent={userCurrent}/>}/>
    </Routes>
  )
}

export default Router