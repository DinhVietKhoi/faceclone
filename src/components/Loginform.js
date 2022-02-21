import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import {useFormik} from 'formik'
import * as Yup from 'yup'
import '../sass/loginform.scss'
function Loginform({check,user,handleUsercurrent,handleChecklogin}) {
  const inputUsername = useRef(null);
  const inputPassword = useRef(null);
  const formik = useFormik({
    initialValues:{
      userName:"",
      passWord:""
    },
    validationSchema: Yup.object({
      userName: Yup.string()
      .required("Required")
      .min(4,"Must be 4 characters or more"),
      passWord: Yup.string()
      .required("Required")
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* ).{8,16}$/,
      "Password must be 8-16 characters and contain at least one letter and one number!")
    }),
    onSubmit:(values)=>{
          const checkResult = user.filter(f=>{
            return f.username === values.userName && f.password === values.passWord
          })
          if (checkResult.length<1 || checkResult === undefined){
            window.location.href="/";
            // window.onload()
            window.alert("Sai thông tin tài khoản mật khẩu rồi bạn :>")
          }
          else{
            inputUsername.current.value=""
            inputPassword.current.value=""
            handleUsercurrent(values.userName)
            handleChecklogin()
          }
          
    }
  })
  return (
    <form className='loginform' onSubmit={formik.handleSubmit}>
        <input 
          type="text" 
          placeholder='Username' 
          name="userName" 
          id="userName"
          onChange={formik.handleChange}
          ref={inputUsername}
        ></input>
        {
          formik.errors.userName && (
            <p className="error">{formik.errors.userName}</p>
          )
        }
        <input 
          type="password" 
          placeholder='Password' 
          name="passWord" 
          id="passWord"
          ref={inputPassword}
          onChange={formik.handleChange}
        ></input>
        {
          formik.errors.passWord && (
            <p className="error">{formik.errors.passWord}</p>
          )
        }
        <button type="submit">Log in</button>
        <Link to="/Forgot-password" >Forgot password?</Link>
        <button onClick={check}>Create a new account</button>
    </form>
  )
}

export default Loginform