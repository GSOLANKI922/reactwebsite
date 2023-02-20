import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "90vh", backgroundColor: "#979743" }}>
            <div>
                <h1 style={{ margin: "0" }}> Error Found 404 ! </h1>
                <Link to="/" style={{fontSize:"22px", fontWeight:"bold", border:"2px solid black", display:"block", textAlign:"center", paddingInline:"10px", textDecoration:"none"}}>Go Back</Link>
            </div>
        </div>
    )
}

export default Error