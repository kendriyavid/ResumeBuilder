// import React from 'react';
// import Button from '../button';
// import './Card.css';
// import axios from '../../api/axios';


//  function  Card() {
//     async function handleclick(){
//         await axios.get('/getresune',{withCredentials:true})
//         .then(response=>{
//             console.log(response.data)
//         }
//         )
//     }
//     const kards = [
//         {
//             "id": 1,
//             "name": 'Hello',
//             'smhd': "for professional"
//         },
//         {
//             "id": 2,
//             "name": 'There',
//             'smhd': "for professional"
//         },
//         {
//             "id": 3,
//             "name": 'Iam',
//             'smhd': "for professional"
//         },
//         {
//             "id": 4,
//             "name": 'Harsh',
//             'smhd': "for professional"
//         }
//     ];

    
    
//     return (

//         <div className='CardComponent'>
//             {kards.map((values) => (
//                 <div className='card' key={values.id}>
//                     <div id='text'>
//                         <h2 id={values.id}>{values.name}</h2>
//                         <p>{values.smhd}</p>
//                         <Button id='black' name='Try This' onclick={handleclick}></Button>
//                     </div>
//                 </div>
//             ))}
//         </div>

//     );
// }

// export default Card;

// import React, { useState, useEffect } from 'react';
// import Button from '../button';
// import './Card.css';
// import axios from '../../api/axios';


// function Card() {
//     const [kards, setKards] = useState([]);

//     useEffect(() => {
//         async function fetchData() {
//             try {
//                 const response = await axios.get('/getresune', { withCredentials: true });
//                 const resumeData = response.data.map((resume, index) => ({
//                     id: index + 1,
//                     name: resume.filename,
//                     smhd: resume.filepath
//                 }));
//                 setKards(resumeData);
//             } catch (error) {
//                 console.error('Error fetching resume data:', error);
//             }
//         }

//         fetchData();
//     }, []);


    

//     return (
//         <div className='CardComponent'>
//             {kards.map((values) => (
//                 <div className='card' key={values.id} onClick={handleclick}>
//                     <div id='text'>
//                         <h2 id={values.id}>{values.name}</h2>
//                         <p>{values.smhd}</p>
                        
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }


// export default Card;
// import React, { useState, useEffect } from 'react';
// import './Card.css';
// import axios from '../../api/axios';

// function Card({ onCardClick }) {
//     const [kards, setKards] = useState([]);

//     useEffect(() => {
//         async function fetchData() {
//             try {
//                 const response = await axios.get('/getresune', { withCredentials: true });
//                 const resumeData = response.data.map((resume, index) => ({
//                     id: index + 1,
//                     name: resume.filename,
//                     smhd: resume.filepath
//                 }));
//                 setKards(resumeData);
//             } catch (error) {
//                 console.error('Error fetching resume data:', error);
//             }
//         }

//         fetchData();
//     }, []);

//     function handleCardClick(id, smhd) {
//         onCardClick(id);
//         try {
//             // Make axios GET request with the id as a parameter
//             axios.get(`/your-endpoint/${id}`, { withCredentials: true })
//                 .then(response => {
//                     console.log(response.data);
//                     // Handle response if needed
//                 })
//                 .catch(error => {
//                     console.error('Error fetching data for id:', id, error);
//                 });
//         } catch (error) {
//             console.error('Error making axios request:', error);
//         }
//     }

//     return (
//         <div className='CardComponent'>
//             {kards.map((values) => (
//                 <div className='card' key={values.id} onClick={() => handleCardClick(values.smhd)}>
//                     <div id='text'>
//                         <h2 id={values.id}>{values.name}</h2>
//                         <p>{values.smhd}</p>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default Card;


// import React, { useState, useEffect } from 'react';
// import './Card.css';
// import axios from '../../api/axios';

// function Card({ onCardClick }) {
//     const [kards, setKards] = useState([]);

//     useEffect(() => {
//         async function fetchData() {
//             try {
//                 const response = await axios.get('/getresune', { withCredentials: true });
//                 const resumeData = response.data.map((resume, index) => ({
//                     id: index + 1,
//                     name: resume.filename,
//                     smhd: resume.filepath
//                 }));
//                 setKards(resumeData);
//             } catch (error) {
//                 console.error('Error fetching resume data:', error);
//             }
//         }

//         fetchData();
//     }, []);

//     return (
//         <div className='CardComponent'>
//             {kards.map((values) => (
//                 <div className='card' key={values.id} onClick={() => onCardClick(values.id)}>
//                     <div id='text'>
//                         <h2 id={values.id}>{values.name}</h2>
//                         <p>{values.smhd}</p>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default Card;


import React, { useState, useEffect } from 'react';
import './Card.css';
import axios from '../../api/axios';

function Card({ onCardClick }) {
    const [kards, setKards] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('/getresune', { withCredentials: true });
                const resumeData = response.data.map((resume, index) => ({
                    id: index + 1,
                    name: resume.filename,
                    smhd: resume.filepath
                }));
                setKards(resumeData);
            } catch (error) {
                console.error('Error fetching resume data:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className='CardComponent'>
            {kards.map((values) => (
                <div className='card' key={values.id} onClick={() => onCardClick(values.id, values.smhd)}>
                    <div id='text'>
                        <h2 id={values.id}>{values.name}</h2>
                        <p>{values.smhd}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Card;


// import React, { useState, useEffect } from 'react';
// import './Card.css';
// import axios from '../../api/axios';
// import Mammoth from 'mammoth'; // Import Mammoth

// function Card({ onCardClick }) {
//     const [kards, setKards] = useState([]);
//     const [selectedDocument, setSelectedDocument] = useState(null);

//     useEffect(() => {
//         async function fetchData() {
//             try {
//                 const response = await axios.get('/getresune', { withCredentials: true });
//                 const resumeData = response.data.map((resume, index) => ({
//                     id: index + 1,
//                     name: resume.filename,
//                     smhd: resume.filepath
//                 }));
//                 setKards(resumeData);
//             } catch (error) {
//                 console.error('Error fetching resume data:', error);
//             }
//         }

//         fetchData();
//     }, []);

//     const openPreviewModal = async (id, filepath) => {
//         try {
//             // Fetch document content
            
//             const response = await axios.get(`/rn/${filepath}`, { responseType: 'arraybuffer' });
//             const documentData = new Uint8Array(response.data);
            
//             // Convert document to HTML using Mammoth
//             const result = await Mammoth.convertToHtml({ arrayBuffer: documentData });
//             setSelectedDocument({ id, name: kards.find(card => card.id === id).name, html: result.value });
//         } catch (error) {
//             console.error('Error fetching document:', error);
//         }
//     };

//     const closePreviewModal = () => {
//         setSelectedDocument(null);
//     };

//     const downloadDocument = () => {
//         // Implement download functionality
//         // You can use the selectedDocument id and filepath to trigger the download
//     };

//     return (
//         <div className='CardComponent'>
//             {kards.map((values) => (
//                 <div className='card' key={values.id} onClick={() => openPreviewModal(values.id, values.smhd)}>
//                     <div id='text'>
//                         <h2 id={values.id}>{values.name}</h2>
//                         <p>{values.smhd}</p>
//                     </div>
//                 </div>
//             ))}
//             {/* Preview Modal */}
//             {selectedDocument && (
//                 <div className="modal">
//                     <div className="modal-content">
//                         <span className="close" onClick={closePreviewModal}>&times;</span>
//                         <h2>{selectedDocument.name}</h2>
//                         <div dangerouslySetInnerHTML={{ __html: selectedDocument.html }} />
//                         <button onClick={downloadDocument}>Download</button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Card;
