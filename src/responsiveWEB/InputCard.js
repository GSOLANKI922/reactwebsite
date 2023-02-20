import React from 'react'

const InputCard = (props) => {

    return (
        <>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">{props.name}</label>
                <input type="text" name={props.dName} class="form-control" id="exampleFormControlInput1" placeholder={props.placeholder} onChange={props.dataChangeHandler} value={props.value} />
            </div>
        </>

    )
}


export default InputCard