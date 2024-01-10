import React from 'react'
import Navbar from '../navbar'
import Footer from './footer'
import FormInput from './FormInput'
import Button from '../button'
import './Form.css'
import { useState } from 'react'


function Form() {

  const [values, setvalues] = useState(
    {
      "firstName":'',
      "lastName":'',
      "profession":'',
      "city":'',
      "country":'',
      "pincode":'',
      "phone":'',
    }
  )
  
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
      name: "profession",
      type: "text",
      label:"Profession",
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
      type: "text",
      label:"Pin-Code",
      required:true
    },
    {
      id:7,
      name: "phone",
      type: "text",
      label:"Phone",
      required:true
    },
  ]
  
  
  
  const onChange = (e)=>{
    setvalues({...values,[e.target.name]:e.target.value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log('submitted')
    // axios.post('http://localhost:3000/register', values )
    // .then(Response=>console.log(Response))
    // .catch(err=>console.log(err))
    console.log(values)
  }


  return (
    <>
         <Navbar></Navbar>
         <h2 id='r1form'>Personal Details</h2>
         <div className='Form1'>
            <form id='one' onSubmit={handleSubmit}>
              {inputs.map((input)=>(
                  <FormInput key={input.id}{...input} value={values[input.name]} onChange={onChange}></FormInput>    
              ))}
                <Button name='Next' id='black'></Button>
            </form>
         </div>
        <Footer></Footer>
    </>
   
  )
}

export default Form