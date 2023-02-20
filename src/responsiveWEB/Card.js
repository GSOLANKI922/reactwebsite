import React from 'react'
import Model from './Model'

const Card = (props) => {
    return (
        <>
            {props.title.length <= 0 ? <h1>No data Found</h1> : <div className="card col-4 px-2 py-2 my-2"    >
                <img src={props.web} className="card-img-top" height="320px" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Model title={props.title} proImg={props.proImg} bio={props.bio} />
                </div>
            </div>}
        </>
    )
}

export default Card