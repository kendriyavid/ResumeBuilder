import React, { useState } from 'react';
import FormInput from './FormInput';
import Button from '../button';

function Form2(props) {
//   const [educationDetails, setEducationDetails] = useState([
//     {
//       id: 1,
//       schoolName: '',
//       slocation: '',
//       degree: '',
//       fos: '',
//       gdate: '',
//     },
//   ]);

//   const handleInputChange = (index, event, fieldName) => {
//     const newEducationDetails = [...educationDetails];
//     newEducationDetails[index][fieldName] = event.target.value;
//     setEducationDetails(newEducationDetails);
//   };

//   const handleAddMore = () => {
//     const newId = educationDetails.length + 1;
//     setEducationDetails([
//       ...educationDetails,
//       {
//         id: newId,
//         schoolName: '',
//         slocation: '',
//         degree: '',
//         fos: '',
//         gdate: '',
//       },
//     ]);
//   };

//   const handleDeleteSection = (index) => {
//     const newEducationDetails = [...educationDetails];
//     newEducationDetails.splice(index, 1);
//     setEducationDetails(newEducationDetails);
//   };




//   return (
//     <>
//       <h2 id="r1form">Education</h2>
//       <div className="Form1">
//         <form id="one" onSubmit={handleSubmit}>
//           {educationDetails.map((education, index) => (
//             <div key={education.id}>
//               <FormInput
//                 label="School Name"
//                 value={education.schoolName}
//                 onChange={(event) =>
//                   handleInputChange(index, event, 'schoolName')
//                 }
//               />
//               <FormInput
//                 label="School Location"
//                 value={education.slocation}
//                 onChange={(event) =>
//                   handleInputChange(index, event, 'slocation')
//                 }
//               />
//               <FormInput
//                 label="Degree"
//                 value={education.degree}
//                 onChange={(event) => handleInputChange(index, event, 'degree')}
//               />
//               <FormInput
//                 label="Field of Study"
//                 value={education.fos}
//                 onChange={(event) => handleInputChange(index, event, 'fos')}
//               />
//               <FormInput
//                 label="Graduation Date"
//                 value={education.gdate}
//                 onChange={(event) => handleInputChange(index, event, 'gdate')}
//               />
//               <Button
//                 name="Delete Section"
//                 id="black"
//                 type="button"
//                 onclick={() => handleDeleteSection(index)}
//               />
//             </div>
//           ))}
//           <Button name="Add More" id="black" type="button" onclick={handleAddMore} />
//         </form>
//       </div>
//     </>
//   );
// // }
const inputs=[
  {
    id:1,
    name: "schoolName",
    type: "text",
    label:"School Name",
    required:true
  },
  {
    id:2,
    name: "slocation",
    type: "text",
    label:"School Location",
    required:true
  },
  {
    id:3,
    name: "degree",
    type: "text",
    label:"Degree",
    required:true
  },
  {
    id:4,
    name: "fos",
    type: "text",
    label:"Field of Study",
    required:true
  },
  {
    id:5,
    name: "gdate",
    type: "date",
    label:"Graduation Date",
    required:true
  },
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
       <h2 id='r1form'>Education</h2>
       <div className='Form1'>
          <form id='one' onSubmit={handleSubmit}>
            {inputs.map((input)=>(
                <FormInput key={input.id}{...input} value={props.formdata[input.name]} onChange={onChange}></FormInput>    
            ))}
          </form>
       </div>
  </>
 
)


// const handleChange = (index, e) => {
//   const { name, value } = e.target;
//   const updatedEducation = [...props.formdata.education];
//   updatedEducation[index] = { ...updatedEducation[index], [name]: value };
//   props.setformdata({ ...props.formdata, education: updatedEducation });
// };

// const addEducation = () => {
//   const newId = props.formdata.education.length + 1;
//   const newEducation = [...props.formdata.education, {
//     id: newId,
//     schoolName: "",
//     slocation: "",
//     degree: "",
//     fos: "",
//     gdate: ""
//   }];
//   props.setformdata({ ...props.formdata, education: newEducation });
// };

// const removeEducation = (index) => {
//   const updatedEducation = props.formdata.education.filter((detail, i) => i !== index);
//   props.setformdata({ ...props.formdata, education: updatedEducation });
// };

// return (
//   <>
//     <h2 id='r1form'>Education</h2>
//     <div className='Form1'>
//       <form id='one'>
//         {props.formdata.education.map((detail, index) => (
//           <div key={detail.id}>
//             <FormInput
//                 label="School Name"
//                 value={detail.schoolName}
//                 onChange={(e) => handleChange(index, e)
//                 }
//               />
//               <FormInput
//                 label="School Location"
//                 value={detail.slocation}
//                 onChange={(e) => handleChange(index, e)
//                 }
//               />
//               <FormInput
//                 label="Degree"
//                 value={detail.degree}
//                 onChange={(e) => handleChange(index, e)}
//               />
//               <FormInput
//                 label="Field of Study"
//                 value={detail.fos}
//                 onChange={(e) => handleChange(index, e)}
//               />
//               <FormInput
//                 label="Graduation Date"
//                 value={detail.gdate}
//                 onChange={(e) => handleChange(index, e)}
//               />
//             <button type="button" onClick={() => removeEducation(index)}>Remove</button>
//           </div>
//         ))}
//         <Button name="Add More" id="black" onclick={addEducation}></Button>
//       </form>
//     </div>
//   </>
// )
}

export default Form2;
