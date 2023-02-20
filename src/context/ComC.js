import React, { useContext } from 'react'
import { firstName, lastName, surName } from './Context'

const ComC = () => {
    const fname = useContext(firstName)
    const lname = useContext(lastName)
    const sname = useContext(surName)
    return (
        <div>
            <h1> {fname} {lname}</h1>
            <button onClick={sname}>+</button>
        </div>
    )
}

export default ComC