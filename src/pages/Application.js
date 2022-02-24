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
  const local = localStorage.getItem('check')
  const userr = localStorage.getItem('user')
  // console.log(userr)
  const [checkLocal,setChecklocal] = useState(false)
  const [userLocal,setUserlocal] = useState(false)

  const [imgsUser,setImgsuser] = useState([]);
  const [idPost,setIdpost] = useState()
  const [userImg,setUserimg] = useState([])
  
  const [user,setUser] = useState([])
  const upID= ()=>{
    // setIdpost((pre)=>pre+1);
  }
  //get user hien tai
  const [userCurrent,setUsercurrent] = useState(userr!==null?userr:false);
  const handleUsercurrent = (u)=>{
    localStorage.setItem('user',u)
    setUsercurrent(u);
  }
  let [checkLogin,setChecklogin] = useState(local!==null?JSON.parse(local):false)
  // console.log("cehck",Boolean(local))
  // console.log()
  const handleChecklogin = ()=>{
    const checkLogin1 = !checkLogin;
      localStorage.setItem('check',checkLogin1)
      setChecklogin(checkLogin1);
    
  }

  useEffect(()=>{
// Get user database 
  onValue((ref(db,'user')),(snapshot)=>{
    const data = snapshot.val();
    setUser(Object.values(data))
  })
  onValue((ref(db,'idpost')),(snapshot)=>{
    const data = snapshot.val();
    setIdpost(Number(Object.values(data)));
  })
  
},[db])
  return (
    <>
        {
          checkLogin === false?<Login user={user} handleUsercurrent={handleUsercurrent} handleChecklogin={handleChecklogin}/>:checkLogin === true &&<Home userCurrent={userCurrent} user={user} handleChecklogin={handleChecklogin} idPost={idPost} upID={upID}/>
        }
        {/* {
          
        } */}
    </>
  )
}

export default Application