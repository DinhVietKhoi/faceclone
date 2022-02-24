import React from 'react'
import Listuser from '../components/Listuser'
import Posts from '../components/Posts'
import Shortcut from '../components/Shortcut'
import Stories from '../components/Stories'
import '../sass/body.scss'
function Body({user,userCurrent,img,idPost,upID}) {
  return (
    <div className='body'>
              <div className="container">
                <div className='body__container'>
                  <div className='body__left'>
                    <Shortcut userCurrent={userCurrent} img={img}/>
                  </div>
                  <div className='body__middle'>
                    <Stories img={img}/>
                    <Posts img={img} userCurrent={userCurrent} idPost={idPost} upID={upID}/>
                  </div>
                  <div className='body__right'>
                    <Listuser user={user} img={img}/>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default Body