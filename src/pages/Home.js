import React, { useEffect, useState } from 'react'
import { ref, set, getDatabase, onValue} from 'firebase/database'

import db  from '../Firebase'

import Header from '../components/Header'
import Notfound from '../components/Notfound'
import Router from '../router/Router'
import '../sass/home.scss'
import Body from './Body'
function Home({userCurrent,user,handleChecklogin}) {
  const [img,setImg] = useState("https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg")
  const [i,setI] = useState("")
  const [userImage,setUserimage] = useState([]);
  useEffect(()=>{
    onValue((ref(db,`imgs/${userCurrent}`)),(snapshot)=>{
      const data = snapshot.val();
      setI(Object.values(data))

    })
    onValue((ref(db,`imgs`)),(snapshot)=>{
      const data1 = snapshot.val();
      setUserimage(data1)

    })
  },[])
  
  return (
    <>
      <Header userCurrent={userCurrent} user={user} handleChecklogin={handleChecklogin} img={i===""?img:i}/>
          <Router user={user} userCurrent={userCurrent} img={i===""?img:i}>
            <Notfound />
            <Body />
          </Router>
    </>
  )
}

export default Home