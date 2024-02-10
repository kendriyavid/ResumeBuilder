import React, { useState } from 'react';
import Navbar from '../navbar';
import Footer from './footer';
import FormInput from './FormInput';
import Button from '../button';

function Form3(props) {
  // const [educationDetails, setEducationDetails] = useState([
  //   {
  //     id: 1,
  //     title: '',
  //     organization: '',
  //     location: '',
  //     startdate: '',
  //     enddate: '',
  //   },
  // ]);

  // const handleInputChange = (index, event, fieldName) => {
  //   const newEducationDetails = [...educationDetails];
  //   newEducationDetails[index][fieldName] = event.target.value;
  //   setEducationDetails(newEducationDetails);
  // };

  // const handleAddMore = () => {
  //   const newId = educationDetails.length + 1;
  //   setEducationDetails([
  //     ...educationDetails,
  //     {
  //       id: newId,
  //       title: '',
  //       organization: '',
  //       location: '',
  //       startdate: '',
  //       enddate: '',
  //     },
  //   ]);
  // };

  // const handleDeleteSection = (index) => {
  //   const newEducationDetails = [...educationDetails];
  //   newEducationDetails.splice(index, 1);
  //   setEducationDetails(newEducationDetails);
  // };


  // const handleSubmit=(e)=>{
  //   e.preventDefault()
  //   console.log(JSON.stringify(educationDetails))
  // }

  // return (
  //   <>
  //     <h2 id="r1form">Work Experience</h2>
  //     <div className="Form1">
  //       <form id="one" onSubmit={handleSubmit}>
  //         {educationDetails.map((education, index) => (
  //           <div key={education.id}>
  //             <FormInput
  //               label="Title/Post"
  //               value={education.title}
  //               onChange={(event) =>
  //                 handleInputChange(index, event, 'title')
  //               }
  //             />
  //             <FormInput
  //               label="Organization"
  //               value={education.organization}
  //               onChange={(event) =>
  //                 handleInputChange(index, event, 'organization')
  //               }
  //             />
  //             <FormInput
  //               label="Location"
  //               value={education.location}
  //               onChange={(event) => handleInputChange(index, event, 'location')}
  //             />
  //             <FormInput
  //               label="Start Date"
  //               value={education.startdate}
  //               onChange={(event) => handleInputChange(index, event, 'startdate')}
  //             />
  //             <FormInput
  //               label="End Date"
  //               value={education.enddate}
  //               onChange={(event) => handleInputChange(index, event, 'enddate')}
  //             />
  //             <Button
  //               name="Delete Section"
  //               id="black"
  //               type="button"
  //               onclick={() => handleDeleteSection(index)}
  //             />
  //           </div>
  //         ))}
  //         <Button name="Add More" id="black" type="button" onclick={handleAddMore} />
  //       </form>
  //     </div>
  //   </>
  // );

  const inputs=[
    {
      id:1,
      name: "title",
      type: "text",
      label:"Title",
      required:true
    },
    {
      id:2,
      name: "organization",
      type: "text",
      label:"Organization",
      required:true
    },
    {
      id:3,
      name: "location",
      type: "text",
      label:"Location",
      required:true
    },
    {
      id:4,
      name: "startdate",
      type: "date",
      label:"Start Date",
      required:true
    },
    {
      id:5,
      name: "enddate",
      type: "date",
      label:"End Date",
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
         <h2 id='r1form'>Work Experience</h2>
         <div className='Form1'>
            <form id='one' onSubmit={handleSubmit}>
              {inputs.map((input)=>(
                  <FormInput key={input.id}{...input} value={props.formdata[input.name]} onChange={onChange}></FormInput>    
              ))}
            </form>
         </div>
    </>
   
  )
}




export default Form3;
