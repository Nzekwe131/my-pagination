import React from 'react'
import UserCard from './UserCard'
import './Userlist.css'

const Userlist = ({userdata}) => {
  return (
    <div className='user-list'>
      {userdata.map((user,index)=>{
        return (
          <UserCard 
             key={user.id}
            image={user.image}
            name={user.name}
            phone={user.phone}
           />
        
        )
      })}
    </div>
  )
}

export default Userlist
