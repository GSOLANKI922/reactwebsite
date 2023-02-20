import React, { useState, useEffect } from 'react'

const UseEff = () => {
    const [count, setCount] = useState(0)

    document.title=`Click me ${count}`

    useEffect(() => {
       alert("clicked")
    })
    return (
        <div>
            {count}
            <button onClick={() => {setCount(count + 1)}}>+</button>
        </div>
    )
}

export default UseEff