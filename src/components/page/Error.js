import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate()
  useEffect(() => {
   setTimeout(() => {
    navigate('/')
   }, 2000);
  }, [navigate])
  return (
    <div className='notfound'>
      <h3>page not found</h3>
    </div>
  )
}

export default Error
