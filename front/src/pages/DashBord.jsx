import React from 'react'
import { useContext } from 'react'
import { userContext } from '../../context/UserContext'

function DashBord() {
    let {user}=useContext(userContext)
  return (
    <div><h1>HI {user&&user.name}!</h1></div>
  )
}

export default DashBord