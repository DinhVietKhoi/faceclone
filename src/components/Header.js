import React from 'react'
import { Link } from 'react-router-dom'
import '../sass/header.scss'
import Avatar from './Avatar'
function Header({userCurrent,user,handleChecklogin}) {
  console.log(userCurrent);
  console.log(user);

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
            <ul className='header__middle-list'>
              <li className='header__middle-item '>
                <Link className='header__middle-link header__middle-link--active' to="/faceclone"> 
                  <i class="fa-solid fa-house"></i>
                </Link>
              </li>
              <li className='header__middle-item'>
                <Link className='header__middle-link' to="/faceclone"> 
                  <i class="fa-solid fa-user-group"></i>
                </Link>
              </li>
              <li className='header__middle-item'>
                <Link className='header__middle-link' to="/faceclone"> 
                  <i class="fa-solid fa-clapperboard"></i>
                </Link>
              </li>
              <li className='header__middle-item'>
                <Link className='header__middle-link' to="/faceclone"> 
                  <i class="fa-solid fa-store"></i>
                </Link>
              </li>
              <li className='header__middle-item'>
                <Link className='header__middle-link' to="/faceclone"> 
                  <i class="fa-solid fa-chess-board"></i>
                </Link>
              </li>
            </ul>
          </div>
          <div className='header__right'>
            <div className='header__right-user'>
              <Avatar />
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
                <i class="fa-solid fa-arrow-right-from-bracket" onClick={handleChecklogin}></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default Header