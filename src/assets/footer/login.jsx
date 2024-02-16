import React from 'react'
import './login.css'
import { useRef,useEffect,useState,useContext } from 'react'
import useAuth from '../../hooks/useAuth'
import FormInput from './FormInput'
import Button from '../button'
import axios from './../../api/axios'
import Navbar from './../navbar'
import Footer from './footer'
import {Link ,useNavigate, useLocation} from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const LOGIN_URL = '/auth'

function Login() {
  const {setAuth} = useAuth()
  const {auth} = useAuth();
  const navigate = useNavigate();
  const location = useLocation
  const from = location.state?.from?.pathname || "/"
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

  const handleSubmit = async(e)=>{
    e.preventDefault();
    console.log('submitted')
    await axios.post(LOGIN_URL, values,
      {
        headers:{'Content-Type':'application/json'},
        withCredentials:true
      } )
    .then(Response=>{
      console.log(Response.data.accessToken)
      const accessToken = Response.data.accessToken;
      console.log(accessToken)
      console.log("here")
      setAuth({accessToken:accessToken})

      // if (Response.status==201){
      //   console.log("here")
      //   return <Navigate replace to={'/login'}></Navigate>
      // }else{
      //   return <Navigate replace to={'/register'}></Navigate>
      // }
    })
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
            <Button id='black' name='Register' type='submit'to='/register' ></Button>
        </form>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Login