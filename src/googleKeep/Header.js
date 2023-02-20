import React from 'react'
import "./Header.css"
import logo from "./image/keep.png"
const Header = () => {
  return (
    <div className='header'>
    <img src={logo} alt="logo" height="60px" width="60px"/>
    <h1>GKeep</h1>
    </div>
  )
}

export default Header