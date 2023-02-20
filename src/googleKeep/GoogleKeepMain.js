import React, { useState } from "react"
import CreateNote from './CreateNote';
import Footer from './Footer';
import Header from './Header';
import Note from './Note';

const GoogleKeepMain = () => {
    const [addItem, setAddItem] = useState([]);

    const addNote = (note) => {
        setAddItem((prevData) => {
            return [...prevData, note]
        })
    }

    const onDelete = (id) => {
        setAddItem((oldItem) =>
            oldItem.filter((curr, index) => {
                return index !== id
            })
        )
    }

    return (
        <div>
            <Header />
            <CreateNote passNote={addNote} />
            <div style={{ display: "flex", flexWrap: "wrap", marginTop: "30px" }}>
                {
                    addItem.map((val, index) => {
                        return <Note deleteItem={onDelete} key={index} id={index} title={val.title} content={val.content} />
                    })
                }
            </div>
            <Footer />
        </div>
    );
}

export default GoogleKeepMain;

