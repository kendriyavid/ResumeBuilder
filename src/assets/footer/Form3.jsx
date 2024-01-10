import React, { useState } from 'react';
import Navbar from '../navbar';
import Footer from './footer';
import FormInput from './FormInput';
import Button from '../button';

function Form2() {
  const [educationDetails, setEducationDetails] = useState([
    {
      id: 1,
      title: '',
      organization: '',
      location: '',
      startdate: '',
      enddate: '',
    },
  ]);

  const handleInputChange = (index, event, fieldName) => {
    const newEducationDetails = [...educationDetails];
    newEducationDetails[index][fieldName] = event.target.value;
    setEducationDetails(newEducationDetails);
  };

  const handleAddMore = () => {
    const newId = educationDetails.length + 1;
    setEducationDetails([
      ...educationDetails,
      {
        id: newId,
        title: '',
        organization: '',
        location: '',
        startdate: '',
        enddate: '',
      },
    ]);
  };

  const handleDeleteSection = (index) => {
    const newEducationDetails = [...educationDetails];
    newEducationDetails.splice(index, 1);
    setEducationDetails(newEducationDetails);
  };


  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(JSON.stringify(educationDetails))
  }

  return (
    <>
      <Navbar />
      <h2 id="r1form">Work Experience</h2>
      <div className="Form1">
        <form id="one" onSubmit={handleSubmit}>
          {educationDetails.map((education, index) => (
            <div key={education.id}>
              <FormInput
                label="Title/Post"
                value={education.title}
                onChange={(event) =>
                  handleInputChange(index, event, 'title')
                }
              />
              <FormInput
                label="Organization"
                value={education.organization}
                onChange={(event) =>
                  handleInputChange(index, event, 'organization')
                }
              />
              <FormInput
                label="Location"
                value={education.location}
                onChange={(event) => handleInputChange(index, event, 'location')}
              />
              <FormInput
                label="Start Date"
                value={education.startdate}
                onChange={(event) => handleInputChange(index, event, 'startdate')}
              />
              <FormInput
                label="End Date"
                value={education.enddate}
                onChange={(event) => handleInputChange(index, event, 'enddate')}
              />
              <Button
                name="Delete Section"
                id="black"
                type="button"
                onclick={() => handleDeleteSection(index)}
              />
            </div>
          ))}
          <Button name="Next" id="black" type="button" />
          <Button name="Add More" id="black" type="button" onclick={handleAddMore} />
          <Button name='Submit' id='black' type='submit' onclick={handleSubmit}></Button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Form2;
