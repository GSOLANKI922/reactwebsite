import React from 'react'
import { NavLink } from 'react-router-dom'
import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./../../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { useLocation } from 'react-router-dom';
import Input from '@mui/joy/Input';
import { useDispatch } from 'react-redux';
import { setSearch } from '../store/searchSlice';

const Navbar = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    return (
        <>
            <div className='container-fluid nav_bg'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <nav className="navbar navbar-expand-lg bg-light">
                            <div className="container-fluid d-flex">
                                <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                {location.pathname == "/service" && <Input style={{ border: "none", width: "500px", borderBottom: "1px solid black" }} placeholder="Type in here…" onChange={(e) => dispatch(setSearch(e.target.value))} />}
                                <div className="collapse d-flex flex-row-reverse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav  mr-auto mb-5  mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink className="nav-link menu_active " aria-current="page" to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link menu_active" to="/service">Services</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link menu_active" to="/about">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link menu_active" to="/contact">Contact</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar