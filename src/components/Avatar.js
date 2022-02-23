import React, { useState } from 'react'
import '../sass/avatar.scss'
function Avatar({img}) {
  const [imgg,setImg] = useState("https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg");
  console.log();
  return (
    <div className="avatar">
      {
        <img src={img?img:imgg}></img>
      }
    </div>
  )
}

export default Avatar