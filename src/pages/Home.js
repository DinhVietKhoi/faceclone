import React from 'react'
import Header from '../components/Header'
import Listfriend from '../components/Listfriend'
import Post from '../components/Post'
import Shortcut from '../components/Shortcut'
import '../sass/home.scss'
function Home({userCurrent,user,handleChecklogin}) {
  return (
    <>
      <Header userCurrent={userCurrent} user={user} handleChecklogin={handleChecklogin}/>
      <div className='body'>
        <div class="container">
          <div className='body__container'>
            <div className='body__left'>
              <Shortcut />
            </div>
            <div className='body__middle'>
              <Post />
            </div>
            <div className='body__right'>
              <Listfriend />
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Home