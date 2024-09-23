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

//BASIC CODE


// import React, { useState } from 'react';
// import Navbar from './navbar';
// import Footer from './footer/footer';
// import Card from './footer/Card';
// import axios from '../api/axios';
// import { useNavigate } from 'react-router-dom';
// import './Res.css'

// function Resume() {
//   const [fileUrl, setFileUrl] = useState('');
//   const [showModal, setShowModal] = useState(false);
//   const navigate = useNavigate();

//   function handleCardClick(id, smhd) {
//     axios.get(`/getresune/download/${smhd}`, {
//       params: { filepath: smhd },
//       responseType: 'blob',
//       withCredentials: true
//     })
//     .then(response => {
//       if (response.data && response.data instanceof Blob) {
//         const blob = response.data;
//         const url = window.URL.createObjectURL(blob);
//         setFileUrl(url);
//         setShowModal(true);
//       } else if (response.data && response.data.message === "User not found") {
//         navigate('/register');
//       } else {
//         console.error('Invalid response data');
//       }
//     })
//     .catch(error => {
//       console.error('Error fetching data for id:', id, error);
//     });
//   }

//   function closeModal() {
//     setShowModal(false);
//     setFileUrl('');
//   }

//   return (
//     <>
//       <Navbar />
//       <Card onCardClick={handleCardClick} />
//       <Footer />
//       {showModal && (
//         <div className="modal-overlay">
//           <div className="modal">
//             <span className="close" onClick={closeModal}>&times;</span>
//             <iframe src={fileUrl} style={{ width: '100%', height: '80vh' }} />
//             <button onClick={() => window.open(fileUrl, '_blank')} className="download-btn">Download</button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Resume;



// import React, { useState } from 'react';
// import Navbar from './navbar';
// import Footer from './footer/footer';
// import Card from './footer/Card';
// import axios from '../api/axios';
// import { useNavigate } from 'react-router-dom';
// import './Res.css'

// function Resume() {
//   const [fileUrl, setFileUrl] = useState('');
//   const [showModal, setShowModal] = useState(false);
//   const navigate = useNavigate();

//   function handleCardClick(id, smhd) {
//     axios.get(`/getresune/getresumeURL/${smhd}`, {
//         withCredentials: true
//     })
//     .then(response => {
//         console.log(response.data.url);
//         if (response.data && response.data.url) { // Check if response.data.url exists
//             const googleDocsViewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(response.data.url)}`;
//             setFileUrl(googleDocsViewerUrl);
//             setShowModal(true);
//         } else if (response.data && response.data.message === "User not found") {
//             navigate('/register');
//         } else {
//             console.error('Invalid response data');
//         }
//     })
//     .catch(error => {
//         console.error('Error fetching data for smhd:', smhd, error);
//     });
// }


//   function closeModal() {
//     setShowModal(false);
//     setFileUrl('');
//   }

//   return (
//     <>
//       <Navbar />
//       <Card onCardClick={handleCardClick} />
//       <Footer />
//       {showModal && (
//         <div className="modal-overlay">
//           <div className="modal">
//             <span className="close" onClick={closeModal}>&times;</span>
//             <iframe src={fileUrl} style={{ width: '100%', height: '80vh', border: 'none' }} sandbox/>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Resume;

// import React, { useState } from 'react';
// import Navbar from './navbar';
// import Footer from './footer/footer';
// import Card from './footer/Card';
// import axios from '../api/axios';
// import { useNavigate } from 'react-router-dom';
// import './Res.css'

// function Resume() {
//   const [fileUrl, setFileUrl] = useState('');
//   const [showModal, setShowModal] = useState(false);
//   const navigate = useNavigate();

//   function handleCardClick(id, smhd) {
//     axios.get(`/getresune/getresumeURL/${smhd}`, {
//         withCredentials: true
//     })
//     .then(response => {
//         console.log(response.data.url);
//         if (response.data && response.data.url) { // Check if response.data.url exists
//           const resumeUrl = response.data.url;
//           window.open(resumeUrl, '_blank'); // Open in a new tab
//         } else if (response.data && response.data.message === "User not found") {
//             navigate('/register');
//         } else {
//             console.error('Invalid response data');
//         }
//     })
//     .catch(error => {
//         console.error('Error fetching data for smhd:', smhd, error);
//     });
// }

//   function closeModal() {
//     setShowModal(false);
//     setFileUrl('');
//   }

//   return (
//     <>
//       <Navbar />
//       <Card onCardClick={handleCardClick} />
//       <Footer />
//       {showModal && (
//         <div className="modal-overlay">
//           <div className="modal">
//             <span className="close" onClick={closeModal}>&times;</span>
//             <iframe src={fileUrl} style={{ width: '100%', height: '80vh', border: 'none' }} sandbox/>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Resume;

