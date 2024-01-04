
import './button.css'
import { useState } from 'react'


function Button (props){
    return(
        <>
            <button id={props.id} type={props.type}>{props.name}</button>
        </>
       

    )
}

export default Button

