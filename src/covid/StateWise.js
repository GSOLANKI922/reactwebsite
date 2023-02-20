import React, { useEffect, useState } from 'react'
import "./StateWise.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const StateWise = () => {

    const [data, setData] = useState([])

    const getCovidData = async () => {
        const res = await fetch("https://data.covid19india.org/data.json")
        const currData = await res.json()
        setData(currData.statewise)
    }

    useEffect(() => {
        getCovidData()
    }, [])

    return (
        <>
            <div className="container-fluid">
                <div className="main-heading">
                    <h1 className='mb-5' style={{textAlign:"center"}}> <span> INDIA </span> COVID-19 Dashboard</h1>
                </div>
                <table className="table table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">State</th>
                            <th scope="col">Confirmed</th>
                            <th scope="col">Recovered</th>
                            <th scope="col">Deaths</th>
                            <th scope="col">Active</th>
                            <th scope="col">Updated Date</th>
                        </tr>
                    </thead>

                    <tbody className="table-striped">
                        {
                            data.map((cData, Index) => {
                                return (
                                    <tr key={Index} className="hover">
                                        <td>{cData.state}</td>
                                        <td>{cData.confirmed}</td>
                                        <td>{cData.recovered}</td>
                                        <td>{cData.deaths}</td>
                                        <td>{cData.active}</td>
                                        <td>{cData.lastupdatedtime}</td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default StateWise
