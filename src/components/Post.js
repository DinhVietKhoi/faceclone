import React from 'react'
import Avatar from './Avatar'
import '../sass/post.scss'
function Post({img,userCurrent,title,imgPost}) {
  return (
    <div className='post'>
        <div className='post__container'>
            <div className='post__avatar'>
                <Avatar img={img}/>
                <span>{userCurrent}</span>
            </div>
            <div className='post__title'>{title}</div>
            <div className='post__image'>
                <img src={imgPost}></img>
            </div>
            <div className='post__information'>
                    <span>0 Like</span>
                    <span>0 Bình luận</span>
            </div>
            <div className='post__interact'>
                <div className='post__interact-icon'>
                    <i className="fa-solid fa-thumbs-up"></i>
                    <span>Thích</span>
                </div>
                <div className='post__interact-icon'>
                    <i className="fa-solid fa-comments"></i>
                    <span>Bình luận</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post