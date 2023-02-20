import React from 'react'
import "./Footer.css"

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className='Footer'>
            <p><i>copyright ©</i> <b>{year}</b></p>
        </footer>
    )
}

export default Footer