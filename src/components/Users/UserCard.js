import React from 'react'
import './Usercard.css'


const UserCard = ({image,name,phone}) => {
  return (
    <div className='card'>
      <div className='card-image'>
     <img src={image} alt={name}></img>
      </div>
       <div className='card-info'>
       <h2>{name}</h2>
          <h3>{phone}</h3>
      
      </div>
    </div>
  )
}

export default UserCard
