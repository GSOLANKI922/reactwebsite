import React, { useState, useEffect } from 'react'
import axios from "axios"

const ComA = () => {
    const [num, setNum] = useState()
    const [name, setName] = useState("")
    const [moves, setMoves] = useState("")
    const [img, setImg] = useState("")

    useEffect(() => {
        async function getData() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            console.log(res.data);
            setName(res.data.name)
            setMoves(res.data.moves.length)
            setImg(res.data.sprites.back_default)
        }
        getData()
    })
    return (
        <div style={{display:"flex"}}>
            <div style={{width:"400px"}}>
                <h2>my name is {name}</h2>
                <h2>my number is {num}</h2>
                <h2>my movie is {moves}</h2>
                <select value={num} onChange={(e) => {
                    setNum(e.target.value)
                }}>
                    <option value="1">1</option>
                    <option value="25">25</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div style={{marginLeft:"50px"}}>
                <img src={img} alt="current" height="200px" />
            </div>
        </div>
    )
}

export default ComA