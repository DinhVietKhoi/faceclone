import React from 'react'
import Header from '../components/Header'
import Listfriend from '../components/Listfriend'
import Notfound from '../components/Notfound'
import Post from '../components/Post'
import Shortcut from '../components/Shortcut'
import Router from '../router/Router'
import '../sass/home.scss'
import Body from './Body'
function Home({userCurrent,user,handleChecklogin}) {
  return (
    <>
      <Header userCurrent={userCurrent} user={user} handleChecklogin={handleChecklogin}/>
        
        {/* <Router user={user} handleUsercurrent={handleUsercurrent} userCurrent={userCurrent}> */}
          <Router userCurrent={userCurrent}>
            <Notfound />
            <Body />
          </Router>
      
    </>
  )
}

export default Home