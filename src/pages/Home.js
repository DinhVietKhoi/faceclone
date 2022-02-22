import React, { useState } from 'react'
import Header from '../components/Header'
import Notfound from '../components/Notfound'
import Router from '../router/Router'
import '../sass/home.scss'
import Body from './Body'
function Home({userCurrent,user,handleChecklogin}) {
  const [img,setImg] = useState("https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg")

  return (
    <>
      <Header userCurrent={userCurrent} user={user} handleChecklogin={handleChecklogin} img={img}/>
        {/* <Router user={user} handleUsercurrent={handleUsercurrent} userCurrent={userCurrent}> */}
          <Router user={user} userCurrent={userCurrent} img={img}>
            <Notfound />
            <Body />
          </Router>
    </>
  )
}

export default Home