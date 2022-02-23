import React from 'react'
import '../sass/story.scss'
import girl from '../assets/girl.jpg'
import Avatar from './Avatar'
function Story({img}) {
  return (
    <div className='story col c-2_4'>
        <div className='story__container'>
            <img className="story__img"src={girl}></img>
            <div className='story__content'>
                <Avatar img={girl}/>
                <span>Tên người đăng</span>
            </div>
        </div> 
    </div>
  )
}

export default Story