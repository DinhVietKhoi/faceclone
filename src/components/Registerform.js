import React from 'react'
import { ref, set, getDatabase, onValue} from 'firebase/database'
import db  from '../Firebase'
import { uid } from 'uid'

import '../sass/registerform.scss'
import {useFormik} from 'formik'
import * as Yup from 'yup'
function Registerform({user,uncheck}) {
  console.log(user);
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
      console.log(`userName: ${values.userName}`)
      console.log("kiem tra:",checkRegister)
      if(checkRegister.length < 1 || checkRegister == undefined){
        set(ref(db,`user/${uuid}`),{
          username:values.userName,
          password:values.passWord
        })
        window.alert("Dang ky thanh cong!")
        uncheck();
      }
      else {
        window.alert("Tai khoan bi trung roi!");
      }

      
      console.log(checkRegister)
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