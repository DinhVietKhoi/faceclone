import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../sass/shortcut.scss'
import Avatar from './Avatar'
import celebrate from '../assets/celebrate.png'
import friend from '../assets/friend.png'
import group from '../assets/group.png'
import heart from '../assets/heart.png'
import live from '../assets/live.png'
import marketplace from '../assets/marketplace.png'
import playgame from '../assets/playgame.png'
import star from '../assets/star.png'
import watch from '../assets/watch.png'
import weather from '../assets/weather.png'

function Shortcut({userCurrent,img}) {
  const [check,setCheck] = useState(false)
  const [check1,setCheck1] = useState(false)
  const [extent,setExtent] = useState(3)
  const [extent1,setExtent1] = useState(3)

  const handleExtent = ()=>{
    setExtent(9);
    setCheck(true)
  }
  const handleZoomout = ()=>{
    setCheck(false)
    setExtent(3);
  }
  const handleExtent1 = ()=>{
    setCheck1(true)
    setExtent1(9);

  }
  const handleZoomout1 = ()=>{
    setCheck1(false)
    setExtent1(3);

  }
  const listShortcut =[
    {
      icon:heart,
      title:"Chiến dịch gây quỹ"
    },
    {
      icon:friend,
      title:"Bạn bè"
    },
    {
      icon:group,
      title:"Nhóm"
    },
    {
      icon:marketplace,
      title:"Mua/bán"
    },
    {
      icon:watch,
      title:"Xem video"
    },
    {
      icon:celebrate,
      title:"Kỷ niệm"
    },
    {
      icon:playgame,
      title:"Chơi game"
    },
    {
      icon:weather,
      title:"Thời tiết"
    },
    {
      icon:live,
      title:"Livestream trực tiếp"
    },
    {
      icon:star,
      title:"Yêu thích"
    }
    
  ]
  const listGroup = [
    "Học lập trình front-end",
    "Học javascript cơ bản",
    "Học html/css nâng cao",
    "Học Reactjs tại F8",
    "Học Responsive trên mọi thiết bị",
    "Tiếng anh học phần 1 2 3",
    "C/C++ cơ bản",
    "C# cơ bản",
    "Cấu trúc dữ liệu và thuật ngữ"
  ]
  return (
    <div className='shortcut'>
      <div className='shortcut__container'>
        <div className='shortcut__top'>
          <ul className='shortcut__top-list'>
            <li className='shortcut__top-item'>
              <Link className='shortcut__top-link' to="/faceclone/Friend">
                <Avatar img={img}/>
                <span>{userCurrent}</span>
              </Link>
            </li>
            {
              listShortcut.map((l,index)=>[
                index<=extent&&(
                <li key={index} className='shortcut__top-item'>
                  <Link className='shortcut__top-link' to="/faceclone/Friend">
                    <img className="shortcut__top-icon" src={l.icon}></img>
                    <span>{l.title}</span>
                  </Link>
                </li>
                )
              ])
            }
            {
              check===false&&<li className='shortcut__top-item' onClick={handleExtent}>
                              <div className='shortcut__top-link'>
                                <div className='shortcut__top-i'>
                                  <i className="fa-solid fa-angles-down"></i>
                                </div>
                                <span>Xem thêm</span>
                              </div>
                            </li>
            }
            {
              check===true&&<li className='shortcut__top-item' onClick={handleZoomout}>
              <div className='shortcut__top-link'>
                <div className='shortcut__top-i'>
                  <i class="fa-solid fa-angles-up"></i>
                </div>
                <span>Rút gọn</span>
              </div>
            </li>
            }
          </ul>
        </div>
        <div className='shortcut__bottom'>
          <ul className='shortcut__top-list'>
            {
            listGroup.map((l,index)=>[
              index<=extent1&&<li key={index} className='shortcut__top-item'>
              <Link className='shortcut__top-link' to="/faceclone/Group">
                    <img className="shortcut__top-icon" src={group}></img>
                    <span>{l}</span>
              </Link>
            </li>
            ])
            }
            {
              check1===false&&<li className='shortcut__top-item' onClick={handleExtent1}>
                              <div className='shortcut__top-link'>
                                <div className='shortcut__top-i'>
                                  <i className="fa-solid fa-angles-down"></i>
                                </div>
                                <span>Xem thêm</span>
                              </div>
                            </li>
            }
            {
              check1===true&&<li className='shortcut__top-item' onClick={handleZoomout1}>
              <div className='shortcut__top-link'>
                <div className='shortcut__top-i'>
                  <i className="fa-solid fa-angles-up"></i>
                </div>
                <span>Rút gọn</span>
              </div>
            </li>
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Shortcut