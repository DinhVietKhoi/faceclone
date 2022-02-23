import React, { useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ref, set, getDatabase, onValue} from 'firebase/database'

import db  from '../Firebase'
import '../sass/header.scss'
import Avatar from './Avatar'
function Header({userCurrent,user,handleChecklogin,img}) {
  const [check,setCheck] = useState(false)
  const [imgInput,setImginput] = useState("");
  const handleClick = ()=>{
    setCheck(!check)
  }
  const handleSetimg = ()=>{
    handleClick();
    const checkImg = imgInput;
    set(ref(db,`imgs/${userCurrent}`),{
      img:checkImg
    })
  }
  return (
    <div className='header'>
      <div className="container">
        <div className='header__container'>
          <div className="header__left">
            <div className="header__left-logo">
              <Link to="/faceclone">
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
            </div>
            <div className='header__left-search'>
                <i className="fa-solid fa-magnifying-glass"></i>
              <input placeholder='Tìm kiếm trên facebook'></input>
            </div>
          </div>
          <div className='header__middle'>
            <ul className='header__middle-list' >
              <li className='header__middle-item '>
                <NavLink className='header__middle-link' to="/faceclone/" activeClassName="active"> 
                  <i className="fa-solid fa-house"></i>
                </NavLink>
              </li>
              <li className='header__middle-item'>
                <NavLink className='header__middle-link' to="/faceclone/Friend" activeClassName="active" >
                  <i className="fa-solid fa-user-group"></i>
                </NavLink>
              </li>
              <li className='header__middle-item'>
                <NavLink className='header__middle-link' to="/faceclone/Watch"  activeClassName="active">
                  <i className="fa-solid fa-clapperboard"></i>
                </NavLink>
              </li>
              <li className='header__middle-item'>
                <NavLink className='header__middle-link' to="/faceclone/Marketplace"  activeClassName="active">
                  <i className="fa-solid fa-store"></i>
                </NavLink>
              </li>
              <li className='header__middle-item'>
                <NavLink className='header__middle-link' to="/faceclone/Game" activeClassName="active"> 
                  <i className="fa-solid fa-chess-board"></i>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className='header__right'>
            <button className='header__right-changeA' onClick={handleClick}>Đổi avatar</button>
            {
              check===true&&<div className='header__right-overlayA' onClick={handleClick}></div>
            }
            {
              check===true&&<div className='header__right-inputA'>
                <input placeholder='Nhập link ảnh....' onChange={(e)=>setImginput(e.target.value)}></input>
                <button onClick={handleSetimg}>OK</button>
              </div>
            }
            <div className='header__right-user'>
              <Avatar img={img}/>
              <span className='header__right-nickname'>{userCurrent}</span>
            </div>
            <ul className='header__right-list'>
              <li className='header__right-item'>
                <i className="fa-solid fa-bars"></i>
              </li>
              <li className='header__right-item'>
                <i className="fa-brands fa-facebook-messenger"></i>
              </li>
              <li className='header__right-item'>
                <i className="fa-solid fa-bell"></i>
              </li>
              <li className='header__right-item'>
                <Link to="/faceclone/">
                  <i className="fa-solid fa-arrow-right-from-bracket" onClick={handleChecklogin}></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default Header