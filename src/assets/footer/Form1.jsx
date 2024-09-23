import React from 'react'
import FormInput from './FormInput'
import Button from '../button'
import './Form.css'
import { useState, useContext } from 'react'
import Mainform from './Mainform'
function Form(props) {

  
  // const [values, setvalues] = useState(
  //   {
  //     "firstName":'',
  //     "lastName":'',
  //     "profession":'',
  //     "city":'',
  //     "country":'',
  //     "pincode":'',
  //     "phone":'',
  //   }
  // )

  const inputs=[
    {
      id:1,
      name: "firstName",
      type: "text",
      label:"First Name",
      required:true
    },
    {
      id:2,
      name: "lastName",
      type: "text",
      label:"Last Name",
      required:true
    },
    {
      id:3,
      name: "email",
      type: "text",
      label:"Email",
      required:true
    },
    {
      id:4,
      name: "city",
      type: "text",
      label:"City",
      required:true
    },
    {
      id:5,
      name: "country",
      type: "text",
      label:"Country",
      required:true
    },
    {
      id:6,
      name: "pincode",
      type: "number",
      label:"Pin-Code",
      required:true
    },
    {
      id:7,
      name: "phone",
      type: "number",
      label:"Phone",
      required:true
    },
  ]
  
  
  const onChange = (e)=>{
    props.setformdata({...props.formdata,[e.target.name]:e.target.value})
  }

  // const {setformData} = useContext(formContext)

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log('submitted')
    // setformData(props.formdata)
    console.log(props.formdata);
  }

  
  return (
    <>
         <h2 id='r1form'>Personal Details</h2>
         <div className='Form1'>
            <form id='one' onSubmit={handleSubmit}>
              {inputs.map((input)=>(
                  <FormInput key={input.id}{...input} value={props.formdata[input.name]} onChange={onChange}></FormInput>    
              ))}
            </form>
         </div>
    </>
   
  )
}

export default Form