import React, { useEffect, useState } from 'react'
import { ref, set, getDatabase, onValue} from 'firebase/database'
import db  from '../Firebase'
import Avatar from './Avatar'
import '../sass/listuser.scss'
function Listuser({user,img}) {
    const [listUser,setListuser] = useState([])
    useEffect(()=>{
        onValue((ref(db,'imgs')),(snapshot)=>{
            const data = snapshot.val()
            setListuser(Object.entries(data))
        })
    },[])
    
  return (
    <div className='listuser'>
        <div className='listuser__container'>
            <h3>Người liên hệ</h3>
            <ul className='listuser__list'>
                {/* {
                    user.map((u,index)=>[
                        <li key={index} className='listuser__item'>
                            <Avatar img={img}/>
                            <span>{u.username}</span>
                        </li>
                    ])
                } */}
                {
                    listUser.map((l,index)=>[
                        <li key={index} className='listuser__item'>
                            <Avatar img={Object.values(l[1]).toString()}/>
                            <span>{l[0]}</span>
                        </li>
                    ])
                }
            </ul>
        </div>
    </div>
  )
}

export default Listuser