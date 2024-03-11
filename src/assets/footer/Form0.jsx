import React from 'react'
import Navbar from '../navbar'
import Footer from './footer'
import Card from './Card'
import ResumeCard from './ResumeCard'

function Form0({ onSelectTemplate }) {

  function handleSelectTemplate(name) {
    onSelectTemplate({ name });
    console.log(name)
}

  return (
    <>
    <h2 id='r1form'>Select the Template</h2>
    <ResumeCard onCardClick={handleSelectTemplate}></ResumeCard>
    </>
  )
}

export default Form0