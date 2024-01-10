import React from 'react'
import { useState } from 'react'
import ReactQuill from 'react-quill';
import { useQuill } from 'react-quilljs';
import Navbar from '../navbar';
import Footer from './footer';
import 'react-quill/dist/quill.snow.css';
import Button from '../button';
function Form4() {

    function submit(){
        console.log(quill.getText())
    }
    
    return(
      <>
      <Navbar></Navbar>
      <div id='container1'>
      <h2 id='r1form'>Write about your experience</h2>
      <form id='two'>
        <input className='textarea' type='textarea'></input>
      </form>
      <Button name='Next' id='black'></Button>
      </div>
      <Footer></Footer>
      </>
    )
    
}

export default Form4