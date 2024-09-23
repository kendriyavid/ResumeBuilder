import React, { useState, useEffect } from 'react';
import './Card.css';
import axios from '../../api/axios';
import './Resumecards.css';

function ResumeCard({ onCardClick }) {
    const [kards, setKards] = useState([]);

    useEffect(() => {
        console.log("Jhare")
        async function fetchData() {
            try {
                const response = await axios.get('/resumetemplates', { withCredentials: true });
                setKards(response.data); // Update kards state directly with the response data
            } catch (error) {
                console.error('Error fetching resume data:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className='CardComponent'>
                {kards.map((resume, index) => (
                    <div className='card' key={index} onClick={() => onCardClick(resume.name)}>
                        <div id='text'>
                            <img src={`${process.env.REACT_APP_BASE_URL}${resume.image}`} alt={resume.name} style={{ height: '300px', width: '200px' }}/>
                            <h2 id={resume.id}>{resume.name}</h2>
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default ResumeCard;
