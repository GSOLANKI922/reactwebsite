import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from './responsiveWEB/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from './responsiveWEB/About'
import Service from './responsiveWEB/Service'
import Contact from './responsiveWEB/Contact'
import Navbar from './responsiveWEB/Navbar'

const App = () => {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/service' element={<Service />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='*' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App