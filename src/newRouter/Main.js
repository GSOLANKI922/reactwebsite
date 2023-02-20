import React from 'react'
import Header from './Header'
import Home from './Home'
import About from './About'
import Context from './Context'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Error from './Error'



const Main = () => {
    return (
        <div style={{boxSizing:"border-box", height:"100vh"}}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/context' element={<Context />} />
                    <Route path='/context/:fname/:lname' element={<Context />} />
                    <Route path='*' element={<Home/>} />
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default Main