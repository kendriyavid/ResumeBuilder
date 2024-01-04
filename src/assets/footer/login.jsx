import React from 'react'
import './login.css'
import { useRef,useEffect,useState } from 'react'
import FormInput from './FormInput'
import Button from '../button'
import axios from 'axios'
import Navbar from './../navbar'
import Footer from './footer'
import {Link ,NavLink} from 'react-router-dom'

function Login() {

  const [values, setvalues]=useState({
    email:'',
    password:'',
  })

  console.log(values)

  const inputs=[
    {
      id:1,
      name: "email",
      type: "text",
      label:"Email",
      
    },
    {
      id:2,
      name: "password",
      type: "password",
      label:"Password",
      
    }
  ]

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log('submitted')
    axios.post('http://localhost:3000/auth', values )
    .then(Response=>console.log(Response))
    .catch(err=>console.log(err))
  }

const onChange = (e)=>{
  setvalues({...values,[e.target.name]:e.target.value})
};

  return (
    <>
    <Navbar></Navbar>
      <div id='lCard'>
        <form id='login' onSubmit={handleSubmit}>
        <h1>Login</h1>
            {inputs.map((input)=>(
              <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}></FormInput>
            ))}
            <Button id='black' name='LogIn' type='submit' ></Button>
            <Button id='black' name='Register' type='submit' ></Button>
        </form>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Login