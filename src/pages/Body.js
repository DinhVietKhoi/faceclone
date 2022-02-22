import React from 'react'
import Listfriend from '../components/Listfriend'
import Post from '../components/Post'
import Shortcut from '../components/Shortcut'

function Body({userCurrent}) {
  return (
    <div className='body'>
              <div className="container">
                <div className='body__container'>
                  <div className='body__left'>
                    <Shortcut userCurrent={userCurrent}/>
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
  )
}

export default Body