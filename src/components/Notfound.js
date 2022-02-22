import React from 'react'
import { Link } from 'react-router-dom'
import notfound from '../assets/notfound.jpg'
import '../sass/notfound.scss'
function Notfound() {
  return (
    <div className='notfound'>
      <div className='container'>
        <img src={notfound}></img>
      </div>
    </div>
  )
}

export default Notfound