import React, { useState, useEffect } from 'react'
import "./CountInDe.css"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';


const CountInDe = () => {
    const date = new Date().toLocaleTimeString()
    const [count, setCount] = useState(0)
    // document.title="gayr"



    useEffect(() => {
        window.addEventListener("blur", () => { document.title = "gautam" })
        window.addEventListener("focus", () => { document.title = "Solanki" })
        return () => {
            window.removeEventListener("blur", () => { document.title = "gautam" })
            window.removeEventListener("focus", () => { document.title = "Solanki" })
        };
    }, [])

    return (
        <div className='main_div'>
            <div className="center_div">
                <h1> {count} </h1>
                <div className="button">
                    <Tooltip title="Increment">
                        <Button variant="contained" className='button_In' onClick={() => setCount(count + 1)}><AddIcon /></Button>
                    </Tooltip>
                    <Tooltip title="Decrement">
                        <Button variant="contained" className='button_De' onClick={() => {

                            if (count > 0) {
                                return setCount(count - 1)
                            } else {
                                alert("plz chack")
                            }
                        }}><RemoveIcon /></Button>
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}

export default CountInDe