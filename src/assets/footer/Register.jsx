import React from 'react'
import { useRef,useEffect,useState } from 'react'
import FormInput from './FormInput'
import Button from '../button'
import './Register.css'
import axios from 'axios'
import Footer from './footer'
import Navbar from '../navbar'
function Register() {

    const [values, setvalues]=useState(
      {
        "email":'',
        "password":'',
        "username":'',
        "confirmPassword":'',
        "DOB":''
      })
    
      console.log(values)
    
      const inputs=[
        {
          id:1,
          name: "email",
          type: "email",
          label:"Email",
          errormessage:'Email is not valid',
          required:true
          
        },
        {
          id:2,
          name: "username",
          type: "text",
          label:"Username",
          errormessage:'Username should be 3-16 Charecters',
          required:true,
          pattern:"^[A-Za-z0-9]{3,16}$"
        },
        {
          id:3,
          name: "password",
          type: "password",
          label:"Password",
          errormessage:'Password should be 8-20 Charecters and should include special and alpha-numeric charecters',
          required:true,

        },
        {
            id:4,
            name: "confirmPassword",
            type: "password",
            label:"ConfirmPassword",
            errormessage:'Passwords dont match',
            required:true
        },
        {
            id:5,
            name: "DOB",
            type: "date",
            label:"DOB",
            required:true
        }
      ]

      const handleSubmit = (e)=>{
        e.preventDefault()
        console.log('submitted')
        axios.post('http://localhost:3000/register', values )
        .then(Response=>console.log(Response))
        .catch(err=>console.log(err))
      }

      const onChange = (e)=>{
        setvalues({...values,[e.target.name]:e.target.value})
      }

  return (
    <>
    <Navbar></Navbar>
    <div className='Register'>
        <div id='formRegister'>
        <h1 id='register'>Register</h1>
        <form onSubmit={handleSubmit}>
            {inputs.map((input)=>(
                <FormInput key={input.id}{...input} value={values[input.name]} onChange={onChange} ></FormInput>    
            ))}
        <Button id ='black'name='Register'></Button>
        <Button id ='black'name='Login   '></Button>
        
        </form>
        </div>
    </div>  
    <Footer></Footer>
    </>
  )
}

export default Register