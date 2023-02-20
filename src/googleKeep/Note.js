import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Note = (props) => {
    const deleteNote = () => {
        props.deleteItem(props.id)
    };

    return (
        <div className="main_div" style={{  boxSizing:"border-box", display:"grid" ,gridColumn:"1/2" }}>
            <div className='note' style={{ border: "2px solid black", width: "300px", margin:"20px" }}>
                <h3 style={{ borderBottom: "2px solid black", display:"flex", overflowX:"scroll", justifyContent:"center", margin:"0px", WebkitScrollSnapType:"none" }}>{props.title}</h3>
                <p style={{margin:"0px", height:"70px", overflowY:"scroll"}}>{props.content}</p>
                <div style={{ display: "flex", justifyContent: "end" }}>
                    <button className='btn' onClick={deleteNote} style={{paddingInline:"20px", border:"2px solid red", color:"red"}}>
                        <DeleteOutlineIcon className='deleteIcon' />
                    </button>
                </div>

            </div>
        </div>

    )
}

export default Note