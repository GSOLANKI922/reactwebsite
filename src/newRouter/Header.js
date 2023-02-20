import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div style={{ display: "flex", justifyContent: "space-around", backgroundColor: "lightblue" }}>
            <Link to="/"> <h1>Home</h1></Link>
            <Link to="/about"><h1>About</h1></Link>
            <Link to="context"> <h1>Context</h1></Link>
        </div>
    )
}

export default Header