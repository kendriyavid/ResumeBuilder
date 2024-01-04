import React from 'react'
import './Forminput.css'
function FormInput(props) {

    const {errormessage,label,onChange,id,...inputProps} = props

  return (
    <>
        
    <div className='formInput'>
        <label > {label} </label>
        <input {...inputProps} onChange={onChange} required/>
  
    </div> 
    
    </>
    
  )
}

export default FormInput