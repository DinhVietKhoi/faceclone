import React from 'react'
import { ref, set, getDatabase, onValue} from 'firebase/database'
import db  from '../Firebase'
import { uid } from 'uid'

import '../sass/registerform.scss'
import {useFormik} from 'formik'
import * as Yup from 'yup'
function Registerform({user,uncheck}) {
  const formik = useFormik({
    initialValues:{
      userName:"",
      passWord:"",
      confirmPassword:""
    },
    validationSchema: Yup.object ({
      userName: Yup.string()
      .required("Required")
      .min(4,"Must be 4 characters or more"),
      passWord: Yup.string()
      .required("Required")
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* ).{8,16}$/,
      "Password must be 8-16 characters and contain at least one letter and one number!"),
      confirmPassword: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("passWord"),null], "Password must match")
    }),
    onSubmit: (values)=>{
      const uuid = uid();
      const checkRegister = user.filter(user=>{
        return user.username === values.userName
      })
     
      if(checkRegister.length < 1 || checkRegister == undefined){
        set(ref(db,`user/${values.userName}`),{
          username:values.userName,
          password:values.passWord,
        })
        set(ref(db,`user/${values.userName}/check`),{
          check:false
        })
        set(ref(db,`imgs/${values.userName}`),{
          img:"https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg"
        })
        window.alert("Dang ky thanh cong!")
        uncheck();
      }
      else {
        window.alert("Tai khoan bi trung roi!");
      }

      
    }
  })
  
  return (
    <form className='registerform' onSubmit={formik.handleSubmit}>
        <div className="registerform__group">
          <label>Registration</label>
          <i onClick={uncheck} className="fa-solid fa-xmark"></i>        
        </div>
        <input 
        type="text" 
        placeholder='Username' 
        id="userName" 
        name="userName"
        onChange={formik.handleChange}
        ></input>
{
          formik.errors.userName&&(
            <p className="error">{formik.errors.userName}</p>
          )
        }
        <input 
        type="password" 
        placeholder='Password' 
        id="passWord" 
        name="passWord"
        onChange={formik.handleChange}
        ></input>
{
          formik.errors.passWord&&(
            <p className="error">{formik.errors.passWord}</p>
          )
        }
        <input 
        type="password" 
        placeholder='Confirm password' 
        id="confirmPassword" 
        name="confirmPassword"
        onChange={formik.handleChange}
        ></input>
        {
          formik.errors.confirmPassword&&(
            <p className="error">{formik.errors.confirmPassword}</p>
          )
        }
        <button type="submit">Registration</button>
    </form>
  )
}

export default Registerform