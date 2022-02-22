import React from 'react'
import Avatar from './Avatar'
import '../sass/listuser.scss'
function Listuser({user,img}) {
    console.log("list user",user);
  return (
    <div className='listuser'>
        <div className='listuser__container'>
            <h3>Người liên hệ</h3>
            <ul className='listuser__list'>
                {
                    user.map((u,index)=>[
                        <li key={index} className='listuser__item'>
                            <Avatar img={img}/>
                            <span>{u.username}</span>
                        </li>
                    ])
                }
                <li className='listuser__item'>
                    <Avatar img={img}/>
                    <span>Admin</span>
                </li>
                <li className='listuser__item'>
                    <Avatar img={img}/>
                    <span>Admin</span>
                </li>
                <li className='listuser__item'>
                    <Avatar img={img}/>
                    <span>Admin</span>
                </li>
                <li className='listuser__item'>
                    <Avatar img={img}/>
                    <span>Admin</span>
                </li>
                <li className='listuser__item'>
                    <Avatar img={img}/>
                    <span>Admin</span>
                </li>
                <li className='listuser__item'>
                    <Avatar img={img}/>
                    <span>Admin</span>
                </li>
                <li className='listuser__item'>
                    <Avatar img={img}/>
                    <span>Admin</span>
                </li>
                <li className='listuser__item'>
                    <Avatar img={img}/>
                    <span>Admin</span>
                </li>
                <li className='listuser__item'>
                    <Avatar img={img}/>
                    <span>Admin</span>
                </li>
                <li className='listuser__item'>
                    <Avatar img={img}/>
                    <span>Admin</span>
                </li>
                <li className='listuser__item'>
                    <Avatar img={img}/>
                    <span>Admin</span>
                </li>
                <li className='listuser__item'>
                    <Avatar img={img}/>
                    <span>Admin</span>
                </li>
                <li className='listuser__item'>
                    <Avatar img={img}/>
                    <span>Admin</span>
                </li>
                <li className='listuser__item'>
                    <Avatar img={img}/>
                    <span>Admin</span>
                </li>
                <li className='listuser__item'>
                    <Avatar img={img}/>
                    <span>Admin</span>
                </li>
                <li className='listuser__item'>
                    <Avatar img={img}/>
                    <span>Admin</span>
                </li>
                <li className='listuser__item'>
                    <Avatar img={img}/>
                    <span>Admin</span>
                </li>
                <li className='listuser__item'>
                    <Avatar img={img}/>
                    <span>Admin</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Listuser