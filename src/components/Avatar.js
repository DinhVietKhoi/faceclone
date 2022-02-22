import React, { useState } from 'react'
import '../sass/avatar.scss'
function Avatar({img}) {
  const [imgg,setImg] = useState("");
  
  return (
    <div className="avatar">
      {
        <img src={img}></img>
      }
    </div>
  )
}

export default Avatar