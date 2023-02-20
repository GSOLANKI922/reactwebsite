import React, { useState } from 'react'
import SResult from './SResult'

const Search = () => {
  const [image, setImage] = useState("")

  const changeHandler = (e) => {
    setImage(e.target.value)
  }

  return (
    <>
    <div>
      <input type="text" value={image} placeholder='Search Anything' onChange={changeHandler} />
    </div>
    <div>
      <SResult find={image}/>
    </div>
    </>

  )
}

export default Search