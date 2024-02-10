// Form5.jsx

import React, { useState } from 'react';
import Button from '../button';

function Form5({ formdata, setformdata }) {
  const [skills, setSkills] = useState([]);
  const [currentSkill, setCurrentSkill] = useState('');

  function handleForm(e) {
    e.preventDefault();
    // Do something with the skills array, e.g., send it to an API, etc.
    console.log(skills);
    setformdata(prevFormData => ({
      ...prevFormData,
      skills: skills,
    }));
  }

  function onChange(e) {
    const val = e.target.value;
    setCurrentSkill(val);
  }

  function handleAddMore() {
    if (currentSkill.trim() !== '') {
      setSkills([...skills, currentSkill]); // Add currentSkill to the skills array
      setCurrentSkill(''); // Reset currentSkill
    } else {
      alert('Please enter a skill before adding more.');
    }
  }

  return (
    <>
      <h2 id="r1form">Add Skills </h2>
      <form onSubmit={handleForm} id="one">
        <input type="text" value={currentSkill} onChange={onChange} placeholder="Enter skill" />
        <Button id="black" name="Add More" onclick={handleAddMore}></Button>
        <div id="skills">
          {skills.map((skill, index) => (
            <p id="skillissue" key={index}>
              {skill}
            </p>
          ))}
        </div>
      </form>
    </>
  );
}

export default Form5;
