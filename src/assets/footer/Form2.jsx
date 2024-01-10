import React, { useState } from 'react';
import Navbar from '../navbar';
import Footer from './footer';
import FormInput from './FormInput';
import Button from '../button';

function Form2() {
  const [educationDetails, setEducationDetails] = useState([
    {
      id: 1,
      schoolName: '',
      slocation: '',
      degree: '',
      fos: '',
      gdate: '',
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
        schoolName: '',
        slocation: '',
        degree: '',
        fos: '',
        gdate: '',
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
      <h2 id="r1form">Education</h2>
      <div className="Form1">
        <form id="one" onSubmit={handleSubmit}>
          {educationDetails.map((education, index) => (
            <div key={education.id}>
              <FormInput
                label="School Name"
                value={education.schoolName}
                onChange={(event) =>
                  handleInputChange(index, event, 'schoolName')
                }
              />
              <FormInput
                label="School Location"
                value={education.slocation}
                onChange={(event) =>
                  handleInputChange(index, event, 'slocation')
                }
              />
              <FormInput
                label="Degree"
                value={education.degree}
                onChange={(event) => handleInputChange(index, event, 'degree')}
              />
              <FormInput
                label="Field of Study"
                value={education.fos}
                onChange={(event) => handleInputChange(index, event, 'fos')}
              />
              <FormInput
                label="Graduation Date"
                value={education.gdate}
                onChange={(event) => handleInputChange(index, event, 'gdate')}
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
