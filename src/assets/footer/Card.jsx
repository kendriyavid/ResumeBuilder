import React from 'react';
import Button from '../button';
import './Card.css';


function Card() {
    const kards = [
        {
            "id": 1,
            "name": 'Hello',
            'smhd': "for professional"
        },
        {
            "id": 2,
            "name": 'There',
            'smhd': "for professional"
        },
        {
            "id": 3,
            "name": 'Iam',
            'smhd': "for professional"
        },
        {
            "id": 4,
            "name": 'Harsh',
            'smhd': "for professional"
        }
    ];

    
    
    return (

        <div className='CardComponent'>
            {kards.map((values) => (
                <div className='card' key={values.id}>
                    <div id='text'>
                        <h2 id={values.id}>{values.name}</h2>
                        <p>{values.smhd}</p>
                        <Button id='black' name='Try This'></Button>
                    </div>
                </div>
            ))}
        </div>

    );
}

export default Card;
