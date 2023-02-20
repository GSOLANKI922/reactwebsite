import React from 'react'
import { useParams } from "react-router-dom"

const Context = () => {
  const { fname, lname } = useParams()
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "90vh", backgroundColor: "lightsalmon" }}>
      <div>
        <h1 style={{ margin: "0" }}>Context {fname} {lname} Page</h1>
      </div>
    </div>
  )
}

export default Context