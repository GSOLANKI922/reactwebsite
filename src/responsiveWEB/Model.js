import React, { useState } from 'react'

const Model = (props) => {
    console.log(props)
    const [modelData, setModelData] = useState(null)

    return (
        <>
            <button onClick={() => setModelData(props)} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                More
            </button>

            {modelData && <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel" style={{ textTransform: "uppercase" }}>{modelData.title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setModelData(null)
                            }></button>
                        </div>
                        <div className="modal-body d-flex" style={{ alignItems: "center" }}>
                            <img src={modelData.proImg} alt="profile" style={{ width: "50px", borderRadius: "50%", height: "50px", marginRight: "20px" }} />
                            <h1>{modelData.bio}</h1>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default Model