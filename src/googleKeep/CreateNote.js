import React, { useState } from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import "./CreateNote.css"

const CreateNote = (props) => {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const changeHandler = (e) => {
        const { name, value } = e.target
        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value,
            }
        })
    }

    const addEvent = () => {
        props.passNote(note)
        setNote({
            title: "",
            content: ""
        })
    }

    return (
        <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
            <form style={{display:"flex", flexDirection:"column", width:"40%"}}>
                <input type="text" name='title' onChange={changeHandler} value={note.title} placeholder='Title' autoCapitalize='off' />
                <textarea rows="" column="" name='content' onChange={changeHandler} value={note.content} placeholder='Write a note ...' />
                <Button onClick={addEvent} variant="contained"><AddIcon /></Button>
            </form>

        </div>
    )
}

export default CreateNote