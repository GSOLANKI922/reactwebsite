import React from 'react'
import { useParams, useLocation, useNavigate  } from 'react-router-dom';


const Contect = () => {
    const { fname, lname } = useParams()
    const location = useLocation()
    const navigate = useNavigate ()
    console.log(navigate, "gautam");
    return (
        <>
            <div>
                Contect {fname} {lname}
            </div>
            <div>
                my current location {location.pathname}
                {location.pathname === `/contect/gautam/solanki` ?
                    (<button onClick={() =>  navigate(-1)}> Click me</button>) : null
                }
            </div>
        </>
    )
}

export default Contect