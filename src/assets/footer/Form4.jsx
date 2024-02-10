import React from 'react'
import { useState } from 'react'
import 'react-quill/dist/quill.snow.css';
import Button from '../button';
import Textarea from './textarea';
function Form4(props) {

    // function submit(){
    //     console.log()
    // }
    // // function Addex(){
    // //   // props.setfromdata({...props.formdata,[e.target.name]:Quill.getText()})
    // //   // console.log(props.from)
      
    // // }
    
    // return(
    //   <>
    //   <div id='container1'>
    //   <h2 id='r1form'>Write about your experience</h2>
    //   <form id='two'>
    //     <input className='textarea' type='textarea' name='experience'></input>
    //     <Button name="Add Experience" id="white" onclick={submit}></Button>
    //   </form>
    //   </div>
    //   </>
    // )
    
    const inputs=[
      {
        id:1,
        name: "experience",
        type: "text-area",
        label:"Experience",
        required:true
      }
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
           <h2 id='r1form'>Add Your Experience</h2>
           <div className='Form1'>
              <form id='one' onSubmit={handleSubmit}>
                {inputs.map((input)=>(
                  <Textarea key={input.id}{...input} value={props.formdata[input.name]} onChange={onChange}></Textarea>  
                ))}
              </form>
           </div>
      </>
     
    )
  }


export default Form4