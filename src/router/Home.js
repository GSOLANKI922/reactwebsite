import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <ol>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/contect/gautam"><li>Contect</li></Link>
        <Link to="/Search"><li>Search</li></Link>
      </ol>

    </>
  )
}

export default Home