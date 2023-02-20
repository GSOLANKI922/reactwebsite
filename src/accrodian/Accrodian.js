import React, { useState } from 'react'
import "./Accrodian.css"
import { questions } from './api'
import MyAccrodian from './MyAccrodian'

const Accrodian = () => {
    const [data, setData] = useState(questions)
    return (
        <div>
            {
                data.map((curElem) => {
                    return <MyAccrodian setDat={setData} curElem={curElem} key={curElem.id} id={curElem.id}/>
                })
            }
        </div>
    )
}

export default Accrodian