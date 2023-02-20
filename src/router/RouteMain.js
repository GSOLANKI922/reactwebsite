import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import About from './About'
import Contect from './Contect'
import Home from './Home'
import Error from './Error'
import Search from './serchFun/Search'

const RouteMain = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/Search' element={<Search/>} />
                    <Route path='/contect/:fname/:lname' element={<Contect />} />
                    <Route path="*" element={<Error/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default RouteMain