import React from 'react'
import { useState } from 'react'
import 'react-quill/dist/quill.snow.css';
import Button from '../button';
import Textarea from './Textarea';

function Form6(props){
    const inputs =[{
        id:1,
        name: "aboutuser",
        type: "text-area",
        label:"About User",
        required:true
      }]

      const onChange = (e)=>{
        props.setformdata({...props.formdata,[e.target.name]:e.target.value})
      }

    
      
      return (
        <>
             <h2 id='r1form'>Tell About Yourself</h2>
             <div className='Form1'>
                <form id='one' >
                  {inputs.map((input)=>(
                    <Textarea key={input.id}{...input} value={props.formdata[input.name]} onChange={onChange}></Textarea>  
                  ))}
                </form>
             </div>
        </>
       
      )
    }
  export default Form6
