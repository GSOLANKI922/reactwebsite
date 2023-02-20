import React, { useState } from 'react'

const Filter = () => {
    const Gautam = ["aa", "bb", "ab", "abc", "dd"]
    const [state, setstate] = useState("")

    const changeHandler = (e) => {
        setstate(e.target.value)
    }
    return (
        <div>
            <input type="text" onChange={changeHandler} value={state} />
            {
                Gautam.filter(name => name.includes(`${state}`)).map((c) => {

                    return <h1>{c}</h1>
                })
            }
        </div>
    )
}

export default Filter