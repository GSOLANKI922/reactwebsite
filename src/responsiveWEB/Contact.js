import React, { useState } from 'react'
import InputCard from './InputCard'

const Contact = () => {
  const [iData, setIData] = useState({
    fname: "",
    lname: "",
    email: "",
    comment: ""
  })

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setIData(prevState => ({ ...prevState, [name]: value }));
  }
  return (
    <div>
      <div style={{ textAlign: "center", fontWeight: "bold", fontSize: "22px", marginTop: "50px" }}>
        Contact
      </div>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <div style={{ width: "80%" }}>
          <InputCard placeholder={"Enter First Name"} name={"First Name"} dName={"fname"} dataChangeHandler={changeHandler} value={iData.fname} />
          <InputCard placeholder={"Enter Last Name"} name={"Last Name"} dName={"lname"} dataChangeHandler={changeHandler} value={iData.lname} />
          <InputCard placeholder={"Enter Email"} name={"Email address"} dName={"email"} dataChangeHandler={changeHandler} value={iData.email} />
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" type="text" name='comment' onChange={changeHandler} value={iData.comment}></textarea>
          </div>
        </div>
        <div >
          <button class="btn btn-primary" style={{ padding: "10px 100px" }} type="submit">Submit form</button>
        </div>
      </div>
      <h1>FName: {iData.fname}</h1>
      <h1>LName: {iData.lname}</h1>
      <h1>Email: {iData.email}</h1>
      <h1>Comment: {iData.comment}</h1>
    </div>
  )
}

export default Contact