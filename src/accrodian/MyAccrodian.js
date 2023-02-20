import React, { useState } from 'react'

const MyAccrodian = ({ curElem, setData, id }) => {
    const [show, setShow] = useState(false)

    const clickHandler = () => {
        setShow(!show)
    }

    const deleteHandler = (id) => {
        setData((oldItem) => {
            return oldItem.filters((arrElem, index) => {
                return index !== id;
            })
        })
    }

    return (
        <div>
            <button onClick={clickHandler}>{show ? "➖" : "➕"}</button>
            <button onClick={deleteHandler}>🙈</button>
            <h3>{curElem.question}</h3>
            <p>{show && curElem.answer}</p>
        </div>
    )
}

export default MyAccrodian