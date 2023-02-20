import React, { createContext } from 'react'
import ComA from './ComA'

const firstName = createContext();
const lastName = createContext();
const surName = createContext();

const Context = () => {
    const clickHandler = () => {
        alert("gautam")
    }
    return (
        <div>
            <firstName.Provider value={"Gautam"}>
                <lastName.Provider value={"Soalnki"}>
                    <surName.Provider value={clickHandler}>
                        <ComA />
                    </surName.Provider>
                </lastName.Provider>
            </firstName.Provider>
        </div>
    )
}

export default Context
export { firstName, lastName, surName }