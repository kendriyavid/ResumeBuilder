import React from 'react'
import Footer from './footer'
import Navbar from '../navbar'
import { useState, useEffect } from 'react'
import Form1 from './Form1.jsx'
import Form2 from './Form2.jsx'
import Form3 from './Form3.jsx'
import Form4 from './Form4.jsx'
import Form5 from './Form5.jsx'
import Button from '../button'
import useAxiosPrivate from '../../hooks/useaxiosPrivate.js'
import Form6 from './Form6.jsx'
import { useNavigate } from 'react-router-dom'
import Form0 from './Form0.jsx'
import "./mainform.css"


function Mainform() {
    const navigate  = useNavigate()
    const [page,setpage] = useState(0)
    const [selectedTemplate, setSelectedTemplate] = useState(null); // New state variable to store selected resume template
    const [formmdata,setformdata] = useState(
        {
            "firstName":'',
            "lastName":'',
            "profession":'',
            "city":'',
            "country":'',
            "pincode":'',
            "phone":'',
            "schoolName": '',
            "slocation": '',
            "degree": '',
            "fos": '',
            "gdate": '',
            "title": '',
            "organization": '',
            "location": '',
            "startdate": '',
            "enddate": '',
            "experience":'',
            "skills":[],
            "aboutuser":'',
          }
    )
    const axiosPrivate = useAxiosPrivate();
    const returnpage = ()=>{
        if( page===0){
            return <Form0 onSelectTemplate={setSelectedTemplate}/>
        }else if (page ===1){
            return <Form1 formdata ={formmdata} setformdata = {setformdata}/>
        }else if (page===2){
            return <Form2 formdata ={formmdata} setformdata = {setformdata}/>
        }else if (page===3){
            return <Form3 formdata ={formmdata} setformdata = {setformdata}/>
        }else if (page===4){
            return<Form4 formdata ={formmdata} setformdata = {setformdata}/>
        }else if (page==5){
            return <Form6 formdata ={formmdata} setformdata = {setformdata}/>
        }else if (page==6){
            return <Form5 formdata ={formmdata} setformdata = {setformdata}/>
        }
    }



    function handleNext() {
        // Validation to check if any of the required fields are empty
        if (page === 0 && (!selectedTemplate)) {
            alert("Please select the template.");
            return;
        }
        else if (page === 1 && (!formmdata.firstName || !formmdata.lastName || !formmdata.email)) {
            alert("Please fill in all required fields.");
            return;
        } else if (page === 2 && (!formmdata.schoolName || !formmdata.slocation || !formmdata.degree || !formmdata.fos || !formmdata.gdate)) {
            alert("Please fill in all required fields.");
            return;
        } else if (page === 3 && (!formmdata.city || !formmdata.country || !formmdata.pincode || !formmdata.phone)) {
        alert("Please fill in all required fields.");
        return;
        } else if (page === 4 && (!formmdata.title || !formmdata.organization || !formmdata.location || !formmdata.startdate || !formmdata.enddate || !formmdata.experience)) {
            alert("Please fill in all required fields.");
            return;
        } else if (page === 5 && !formmdata.aboutuser) {
            alert("Please fill in all required fields.");
            return;
        } else if (page === 6) {
            const UserData = { "fname":formmdata.firstName,
            "lname":formmdata.lastName,
            "email":formmdata.email,
            "city":formmdata.city,
            "country":formmdata.country,
            "pincode":formmdata.pincode,
            "phone":formmdata.phone,
            "schoolName": formmdata.schoolName,
            "slocation": formmdata.slocation,
            "degree": formmdata.degree,
            "fos": formmdata.fos,
            "gdate": formmdata.gdate,
            "title": formmdata.title,
            "organization": formmdata.organization,
            "location": formmdata.location,
            "startdate": formmdata.startdate,
            "enddate": formmdata.enddate,
            "experience":formmdata.experience,
            "skills":formmdata.skills,
            "aboutuser":formmdata.aboutuser,
            "selectedTemplate": selectedTemplate
    };
            axiosPrivate.post("http://localhost:3000/form", UserData,{withCredentials:true})
                .then(response => {
                    if (response.data.message ==="Unauthorized"){
                        navigate("/register")
                    }else if (response.data.message === "CV created redirecting to the download page") {
                            navigate("/resume")
                    }
                })
                .catch(error => {
                    console.error("Registration failed:", error);
                });
        } else {
            setpage(page + 1);
            console.log(page);
            console.log(formmdata);
        }
    

}

function handlePrev(){
    if (page<=0){
        setpage(0)
        return
    }else{
    setpage(page-1)
    console.log(page)
    }
}

  return (
   <>
        <Navbar></Navbar>
        {returnpage()} 
        <div className='Form1'>
        <Button name='Prev' id='black'  onclick={handlePrev}></Button>
        <Button name='Next' id='black' onclick={handleNext}></Button>
        </div>
        
        <Footer></Footer>
   </>
  )
}

export default Mainform