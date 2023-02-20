import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
const Card = () => {
    return (
        <div>
            <h1>welcome Gautam</h1>
            <div className="container text-center">
                <div className="row" style={{ display: "flex" }}>
                    <div className="col">
                        <div className="card">
                            <img src="https://picsum.photos/201/300" className="card-img-top" alt="..."
                                height="200px" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build </p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="https://picsum.photos/200/301" className="card-img-top" alt="..."
                                height="200px" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build </p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="https://picsum.photos/200/300" className="card-img-top" alt="..."
                                height="200px" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build </p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card