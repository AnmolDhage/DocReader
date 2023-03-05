import React from 'react'
import "./card.css"
import { useNavigate } from 'react-router-dom'

const Card = (props) => {
  const navigate=useNavigate();
  return (
        <div className='card' onClick={()=>navigate(props.link)}>
        <div className='card-logo'>{props.logo}</div>
        <div className='card-title'>{props.title}</div>
        <div className='card-desc'>{props.desc}</div>
    </div>
  )
}

export default Card