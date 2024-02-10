
import './button.css'
// import { useState } from 'react'
// import { Link } from 'react-router-dom'

// function Button (props){
//     return(
//         <>
//             <button id={props.id} type={props.type} onClick={props.onclick} >{props.name}</button>
//         </>
       

//     )
// }

// export default Button
import React from 'react';
import { Link } from 'react-router-dom';

function Button(props) {
  // Destructure props to get necessary values
  const { id, type, onclick, name, to } = props;

  // If the 'to' prop is provided, render a Link component
  if (to) {
    return (
      <Link to={to} className={props.className}>
        <button id={id} type={type} onClick={onclick}>{name}</button>
      </Link>
    );
  }

  // If 'to' prop is not provided, render a regular button
  return (
    <button id={id} type={type} onClick={onclick} className={props.className}>
      {name}
    </button>
  );
}

export default Button;

