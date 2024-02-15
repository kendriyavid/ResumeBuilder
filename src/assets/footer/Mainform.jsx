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


function Mainform() {

    const [page,setpage] = useState(0)
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
            "aboutuser":''
          }
    )
    const axiosPrivate = useAxiosPrivate();
    const returnpage = ()=>{
        if( page===0){
            return <Form1 formdata ={formmdata} setformdata = {setformdata}/>
        }else if (page ===1){
            return <Form2 formdata ={formmdata} setformdata = {setformdata}/>
        }else if (page===2){
            return <Form3 formdata ={formmdata} setformdata = {setformdata}/>
        }else if (page===3){
            return <Form4 formdata ={formmdata} setformdata = {setformdata}/>
        }else if (page===4){
            return<Form6 formdata ={formmdata} setformdata = {setformdata}></Form6>
        }else if (page==5){
            return <Form5 formdata ={formmdata} setformdata = {setformdata}/>
        }
    }



    function handleNext() {
        // Validation to check if any of the required fields are empty
        if (page === 0 && (!formmdata.firstName || !formmdata.lastName || !formmdata.email)) {
            alert("Please fill in all required fields.");
            return;
        } else if (page === 1 && (!formmdata.schoolName || !formmdata.slocation || !formmdata.degree || !formmdata.fos || !formmdata.gdate)) {
            alert("Please fill in all required fields.");
            return;
        } else if (page === 2 && (!formmdata.city || !formmdata.country || !formmdata.pincode || !formmdata.phone)) {
        alert("Please fill in all required fields.");
        return;
        } else if (page === 3 && (!formmdata.title || !formmdata.organization || !formmdata.location || !formmdata.startdate || !formmdata.enddate || !formmdata.experience)) {
            alert("Please fill in all required fields.");
            return;
        } else if (page === 4 && !formmdata.aboutuser) {
            alert("Please fill in all required fields.");
            return;
        } else if (page === 5) {
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
            "aboutuser":formmdata.aboutuser };
            axiosPrivate.post("http://localhost:3000/form", UserData,{withCredentials:true})
                .then(response => {
                    console.log("Registration successful");
                })
                .catch(error => {
                    console.error("Registration failed:", error);
                });
        } else {
            setpage(page + 1);
            console.log(page);
            console.log(formmdata);
        }
    

    // if( page>5){
    //     return 
    // }else if (page==5){ 
    //     const UserData = {
            // "fName":formmdata.firstName,
            // "lName":formmdata.lastName,
            // "email":formmdata.email,
            // "city":formmdata.city,
            // "country":formmdata.country,
            // "pincode":formmdata.pincode,
            // "phone":formmdata.phone,
            // "schoolName": formmdata.schoolName,
            // "slocation": formmdata.slocation,
            // "degree": formmdata.degree,
            // "fos": formmdata.fos,
            // "gdate": formmdata.gdate,
            // "title": formmdata.title,
            // "organization": formmdata.organization,
            // "location": formmdata.location,
            // "startdate": formmdata.startdate,
            // "enddate": formmdata.enddate,
            // "experience":formmdata.experience,
            // "skills":formmdata.skills,
            // "aboutuser":formmdata.aboutuser
    //     }
    //     axios.post("http://localhost:3000/form",UserData)
    // }
    // else{
    //     setpage(page+1)
    //     console.log(page)
    //     console.log(formmdata)
    // }
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
        <h2 id="r1form">{returnpage()} </h2>
        <div className='Form1'>
        <Button name='Prev' id='black'  onclick={handlePrev}></Button>
        <Button name='Next' id='black' onclick={handleNext}></Button>
        </div>
        
        <Footer></Footer>
   </>
  )
}

export default Mainform