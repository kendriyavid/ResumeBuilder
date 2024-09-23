// import React from 'react'
// import './login.css'
// import { useRef,useEffect,useState,useContext } from 'react'
// import useAuth from '../../hooks/useAuth'
// import FormInput from './FormInput'
// import Button from '../button'
// import axios from './../../api/axios'
// import Navbar from './../navbar'
// import Footer from './footer'
// import {Link ,useNavigate, useLocation} from 'react-router-dom'
// const LOGIN_URL = '/auth'

// function Login() {
//   const {setAuth} = useAuth()
//   const {auth} = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation
//   const from = location.state?.from?.pathname || "/"
//   const [values, setvalues]=useState({
//     email:'',
//     password:'',
//   })

//   console.log(values)

//   const inputs=[
//     {
//       id:1,
//       name: "email",
//       type: "text",
//       label:"Email",
      
//     },
//     {
//       id:2,
//       name: "password",
//       type: "password",
//       label:"Password",
      
//     }
//   ]

//   const handleSubmit = async(e)=>{
//     e.preventDefault();
//     console.log('submitted')
//     await axios.post(LOGIN_URL, values,
//       {
//         headers:{'Content-Type':'application/json'},
//         withCredentials:true
//       } )
//     // .then(Response=>{
//     //   if(Response.data ==="User not Found"){
//     //     console.log("inside the if")
//     //     navigate("/register")
//     //     return
//     //   }else{
//     //     console.log(Response.data)
//     //     console.log(Response.data.accessToken)
//     //     const accessToken = Response.data.accessToken;
//     //     localStorage.setItem("accessToken",accessToken)
//     //     console.log(accessToken)
//     //     console.log("here")
//     //     setAuth({accessToken:accessToken})
//     //   }
//     .then((response) => {
//       console.log("Response received:", response.data);
//       if (response.data.message === "User not Found") {
//           console.log("Redirecting to Register...");
//           navigate('/register');
//       } else {
//           console.log(response.data);
//           console.log(response.data.accessToken);
//           const accessToken = response.data.accessToken;
//           localStorage.setItem("accessToken", accessToken);
//           console.log(accessToken);
//           console.log("here");
//           setAuth({ accessToken: accessToken });
//           navigate("/")
//       }
//   })
//   .catch(err => console.log(err));
//   }

//       // if (Response.status==201){
//       //   console.log("here")
//       //   return <Navigate replace to={'/login'}></Navigate>
//       // }else{
//       //   return <Navigate replace to={'/register'}></Navigate>
//       // }
    

// const onChange = (e)=>{
//   setvalues({...values,[e.target.name]:e.target.value})
// };

//   return (
//     <>
//     <Navbar></Navbar>
//       <div id='lCard'>
//         <form id='login' onSubmit={handleSubmit}>
//         <h1>Login</h1>
//             {inputs.map((input)=>(
//               <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}></FormInput>
//             ))}
//             <Button id='black' name='LogIn' type='submit' ></Button>
//             <Button id='black' name='Register' type='submit'to='/register' ></Button>
//         </form>
//       </div>
//       <Footer></Footer>
//     </>
//   )
// }

// export default Login

import React, { useState } from 'react';
import './login.css';
import { useNavigate, useLocation } from 'react-router-dom';
import  useAuth  from '../../hooks/useAuth'; // Adjust path as needed
import axios from './../../api/axios';
import Navbar from './../navbar';
import Footer from './footer';
import FormInput from './FormInput';
import Button from '../button';

const LOGIN_URL = '/auth';

function Login() {
  const { auth,setAuth } = useAuth(); // Access setAuth here
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const inputs = [
    { id: 1, name: 'email', type: 'text', label: 'Email' },
    { id: 2, name: 'password', type: 'password', label: 'Password' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(LOGIN_URL, values, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });

      if (response.data.message === 'User not Found') {
        navigate('/register');
      } else {
        const accessToken = response.data.accessToken;
        localStorage.setItem('accessToken', accessToken);
        setAuth({ accessToken }); // Update auth state with accessToken
        console.log(auth)
        navigate(from, { replace: true });
      }
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <div id='lCard'>
        <form id='login' onSubmit={handleSubmit}>
          <h1>Login</h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <Button id='black' name='LogIn' type='submit' />
          <Button id='black' name='Register' type='button' to='/register' />
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Login;
