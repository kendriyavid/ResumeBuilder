import React from 'react'
import './textarea.css'
function Textarea(props) {
    const {label,onChange,id,rows,columns,...inputProps} =props
  return (
    <div className='textArea'>
        <textarea{...inputProps}  onChange={onChange} rows={rows} cols={columns}></textarea>
    </div>
  )
}

export default Textarea