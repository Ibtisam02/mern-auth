import React from 'react'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <nav className='flex justify-end gap-3 mx-3'>
        <Link to={"/"}>Home</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/register"}>Register</Link>
    </nav>
  )
}

export default Nav