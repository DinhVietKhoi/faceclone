import React from 'react'
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { ref, set, getDatabase, onValue} from 'firebase/database'
import { useEffect, useState } from 'react';
import Router from '../router/Router';
import db  from '../Firebase'
import Notfound from '../components/Notfound';
import Home from './Home'
import Login from './Login'
import Header from '../components/Header';

function Application() {
  const [userImg,setUserimg] = useState([])
  //Check login storelocal
  // console.log('hhiih',Kq);
  // const storeCheck = JSON.parse(localStorage.getItem('checkLogin'));
  //Get user firebase
  const [user,setUser] = useState([])

  //get user hien tai
  const [userCurrent,setUsercurrent] = useState(false);
  const handleUsercurrent = (u)=>{
    setUsercurrent(u);
  }
  
  let [checkLogin,setChecklogin] = useState(false)
  const handleChecklogin = ()=>{
    const checkLogin1 = !checkLogin;
    // const checkLogin2 = JSON.stringify(checkLogin1)
    // localStorage.setItem("checkLogin", checkLogin2)
      setChecklogin(checkLogin1);
    
  }

  // console.log("local",storeCheck)
  // console.log("usestate",checkLogin)
  useEffect(()=>{
// Get user database 
  onValue((ref(db,'user')),(snapshot)=>{
    const data = snapshot.val();
    setUser(Object.values(data))
  })
},[db])
  return (
    <>
        {
          checkLogin === false && <Login user={user} handleUsercurrent={handleUsercurrent} handleChecklogin={handleChecklogin}/>
        }
        {
          checkLogin === true &&<Home userCurrent={userCurrent} user={user} handleChecklogin={handleChecklogin}/>
        }
    </>
  )
}

export default Application