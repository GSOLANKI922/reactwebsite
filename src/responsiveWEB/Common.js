import React from 'react'
import { NavLink } from 'react-router-dom'


const Common = (props) => {
    return (
        <>
            <section id='header' className='f-flex align-items-center' style={{ Height: "100vh" }}>
                <div className='container-fluid'>
                
                    <div className='row'>
                        <div style={{ marginTop: "12%", marginLeft: "300px", display: "flex" }}>
                            <div className='col-md-4 pt-5 pt-lg-0 order-2 order-lg-1'>
                                <h1>{props.CName}<strong className='brand_name'> {props.Name}</strong></h1>
                                <h2 className='my-3 fs-5'>{props.tag}</h2>
                                <div className='mt-3'>
                                    <NavLink to={props.path} className='btn btn-primary' style={{ borderRadius: "20px" }}>
                                        {props.btn}
                                    </NavLink>
                                </div>
                            </div>
                            <div className='col-lg-6 order-lg-6 header-img' style={{ marginLeft: "50px", width: "600px" }}>
                                <img src={props.web} className="img-fluid animated" alt='home img' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Common