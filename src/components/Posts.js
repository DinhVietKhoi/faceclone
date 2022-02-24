import React, { useEffect, useRef, useState } from 'react'
import { uid } from 'uid'
import { ref, set, getDatabase, onValue} from 'firebase/database'
import db  from '../Firebase'
import Avatar from './Avatar'
import '../sass/posts.scss'
import Post from './Post'
function Posts({img,userCurrent,idPost,upID}) {
  const [listPost,setListpost] = useState([])
  const [text,setText] = useState("")
  const [image,setImage] = useState("")
  const [check,setCheck] = useState(false)
  const textArea = useRef(null)
  const inPut = useRef(null)
  const string = userCurrent + " ơi, bạn đang nghĩ gì thế?"
  const handleSubmit = ()=>{
    if(text!=="" && image!==""){
      upID();
      const image1 = image;
      const text1 = text;
      const uuid = idPost+1;
      handleCheck();
      inPut.current.value=""
      textArea.current.value=""
      setText("");
      setImage("");
      set(ref(db,`post/${uuid}`),{
        img:image1,
        imguser:img,
        name:userCurrent,
        title:text1
      })
      set(ref(db,'idpost'),{
        idpost:uuid
      })
    }
    else {
      window.alert("Còn thiếu cái gì kìa bạn ơi!")
      inPut.current.value=""
      textArea.current.value=""
      setText("");
      setImage("");
    }

  }
  const reverse = listPost.reduce((acc,b)=>([b,...acc]),[])
  const handleCheck = ()=>{
    setCheck(!check);
  }
  useEffect(()=>{
    onValue((ref(db,'post')),(snapshot)=>{
        const data = snapshot.val()
        setListpost(Object.values(data))
        // console.log('data hi',Object.values(data))
        // console.log("data userlist:",Object.entries(data));
    })
},[])
  return (
    <div className='posts'>
      <div className='posts__create'>
        <div className='posts__create-top'>
          <Avatar img={img}/>
          <input placeholder={string} onClick={handleCheck}></input>
        </div>
        <div className='posts__create-bottom'>
          <div className='posts__create-icon' onClick={handleCheck}>
            <i className="fa-solid fa-video video"></i>
            <span>Video trực tiếp</span>
          </div>
          <div className='posts__create-icon' onClick={handleCheck}>
            <i className="fa-solid fa-image image"></i>
            <span>Ảnh/Video</span>
          </div>
        </div>
        {
          check===true&&<div className='posts__create-overlay'></div>
        }
        {
          check===true&&<div className='posts__create-control'>
          <div className='posts__create-control--top'>
            <span>Tạo bài viết</span>
            <div className='posts__create-control--close' onClick={handleCheck} >
              <i className="fa-solid fa-x" ></i>
            </div>
          </div>
          <div className='posts__create-control--bottom'>
            <div className='posts__create-control--avatar'>
              <Avatar img={img}/>
              <span>{userCurrent}</span>
            </div>
            <textarea placeholder={string} onChange={(e)=>setText(e.target.value)} ref={textArea}>
            </textarea>
            <input className='' type='text' placeholder='Link ảnh' onChange={(e)=>setImage(e.target.value)} ref={inPut}></input>
            <button onClick={handleSubmit}>Đăng bài</button>
          </div>
        </div>
        }
      </div>
      {
        
        reverse.map((l,index)=>[
          <Post key={index} img={l.imguser} userCurrent={l.name} title={l.title} imgPost={l.img}/>
        ])
      }
    </div>
  )
}

export default Posts