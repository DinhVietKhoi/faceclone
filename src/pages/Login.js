import React, { useState } from 'react'
import Loginform from '../components/Loginform'
import Registerform from '../components/Registerform'
import '../sass/login.scss'
import logo from '../assets/logo.png'
function Login({user,handleUsercurrent,handleChecklogin}) {
    
  const [check,setCheck] = useState(false)
  const handleCheck = (e)=>{
    e.preventDefault();
    setCheck(true);
  }
  const handleCheck1 = ()=>{
    setCheck(false);
  }
  return (
    <div className='login'>
        <div className='container'>
            <div className='login__container'>
                <div className='login__title'>
                    <img src={logo}></img>
                    <span>Facebook helps you connect and share with the people in your life.</span>
                </div>
                <Loginform user={user} check={handleCheck} handleUsercurrent={handleUsercurrent} handleChecklogin={handleChecklogin}/>
            </div>
        </div>
        {check&&<div className='login__overlay'></div>}
        {check&&<Registerform user={user} uncheck={handleCheck1} />}
    </div>
  )
}

export default Login