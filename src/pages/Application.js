import React from 'react'
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { ref, set, getDatabase, onValue} from 'firebase/database'
import { useEffect, useState } from 'react';
import Router from '../router/Router';
import db  from '../Firebase'
import Notfound from '../components/Notfound';
import Home from './Home'
import Login from './Login'

function Application() {
    const [user,setUser] = useState([])
  let [userCurrent,setUsercurrent] = useState("");
  const handleUsercurrent = (u)=>{
    setUsercurrent(u);
    console.log(u);
  }
  const [checkLogin,setChecklogin] = useState(false)
  const handleChecklogin = ()=>{
    setChecklogin(!checkLogin);
    console.log("dang nhap thanh cong")
  }
  useEffect(()=>{
// Get database 
  onValue((ref(db,'user')),(snapshot)=>{
    const data = snapshot.val();
    const {id,name} = data;
    const listuser = Object.values(data)
    listuser.map(l=>{
      setUser(pre=>[...pre,l])
    })
  })
  },[])
  return (
    <>
        {checkLogin === false&&<Login user={user} handleUsercurrent={handleUsercurrent} handleChecklogin={handleChecklogin}/>}
        {
        checkLogin===true&&<Home userCurrent={userCurrent} user={user} handleChecklogin={handleChecklogin}/>
        }
    </>
  )
}

export default Application