import { Button } from '@mantine/core'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const navigate = useNavigate();
  const onClick = () =>{
    localStorage.setItem("state","false")
    navigate("/")
  }
  return (
    <div>
      <Button className='bg-blue-500' onClick={onClick}>log out</Button>
    </div>
  )
}

export default Profile