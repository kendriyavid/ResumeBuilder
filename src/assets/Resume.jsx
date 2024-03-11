import React from 'react';
import Navbar from './navbar';
import Footer from './footer/footer';
import Card from './footer/Card';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

function Resume() {
  const navigate = useNavigate()
  // Define handleCardClick function here
  function handleCardClick(id, smhd) {
    try {
      // Make axios GET request with the id as a parameter
      axios.get(`/getresune/download/${smhd}`, {params: { filepath:smhd },
      responseType: 'blob',withCredentials: true })
          .then(response => {
            console.log(response.data.message)
            if (response.data.message==="User not found"){
              console.log("here")
              navigate('/register')
            }else{
              const blob = new Blob([response.data], { type: 'application/octet-stream' });
            const url = window.URL.createObjectURL(blob);

            // Create a temporary link element and click it to trigger the download
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `resume_${id}.docx`); // Set filename for download
            document.body.appendChild(link);
            link.click();

            // Clean up
            window.URL.revokeObjectURL(url);
            document.body.removeChild(link);
            }
          })
          .catch(error => {
              console.error('Error fetching data for id:', id, error);
          });
    } catch (error) {
        console.error('Error making axios request:', error);
    }
  }

  return (
    <>
      <Navbar />
      {/* Pass handleCardClick function as a prop to the Card component */}
      <Card onCardClick={handleCardClick} />
      <Footer />
    </>
  );
}

export default Resume;
