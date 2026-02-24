import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../Pages/Home'

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/logout'>LogOut</Link></li>
        </ul>
      </nav>
     
    </div>
  )
}

export default Navbar
