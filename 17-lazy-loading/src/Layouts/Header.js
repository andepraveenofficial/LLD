import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Link to="/" style={{marginRight:"20px"}}>Home</Link>
      <Link to="/my-component">MyComponent</Link>
 </div>
  )
}

export default Header
