import React, { useState } from 'react'
import Avatar from './Avatar'
import '../sass/posts.scss'
function Posts({img,userCurrent}) {
  const [check,setCheck] = useState(false)
  const string = userCurrent + " ơi, bạn đang nghĩ gì thế?"
  const handleCheck = ()=>{
    setCheck(!check);
  }
  return (
    <div className='posts'>
      <div className='posts__create'>
        <div className='posts__create-top'>
          <Avatar img={img}/>
          <input placeholder={string} onClick={handleCheck}></input>
        </div>
        <div className='posts__create-bottom'>
          <div className='posts__create-icon' onClick={handleCheck}>
            <i class="fa-solid fa-video video"></i>
            <span>Video trực tiếp</span>
          </div>
          <div className='posts__create-icon' onClick={handleCheck}>
            <i class="fa-solid fa-image image"></i>
            <span>Ảnh/Video</span>
          </div>
        </div>
        {
          check===true&&<div className='posts__create-overlay'></div>
        }
        {
          check===true&&<div className='posts__create-control'>
          <div className='posts__create-control--title'>
            <span>Tạo bài viết</span>
            <div className='posts__create-control--close' onClick={handleCheck}>
              <i className="fa-solid fa-x" ></i>
            </div>
          </div>
        </div>
        }
        
      </div>
    </div>
  )
}

export default Posts