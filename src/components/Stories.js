import React from 'react'
import Story from './Story'
import '../sass/stories.scss'
import { Link } from 'react-router-dom'
function Stories({img}) {
  return (
    <div className="stories">
        <div className='stories__container row'>
            <Story img={img}/>
            <Story img={img}/>
            <Story img={img}/>
            <Story img={img}/>
            <Story img={img}/>
            <Link to="/faceclone/Stories" className='stories__button'>
                <i className="fa-solid fa-right-long"></i>  
            </Link>
        </div>
    </div>
  )
}

export default Stories