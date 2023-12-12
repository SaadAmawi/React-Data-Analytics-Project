import React from 'react'
import './Form.css'

function Form() {
  return (
    <div className='Form-wrapper'>
<form className='Forms'>
  <label className='Email'>
    Email:&nbsp;
    <input type="text" name="name" />
  </label>
  <label className='Pass'>
    Enter Password:&nbsp;
    <input type="password" name="pass" />
  </label>
  <label className='Pass'>
    Re-Enter Password:&nbsp;
    <input type="password" name="pass" />
  </label>
  <input type="submit" value="Submit" />


  
</form>
      
    </div>
  )
}

export default Form
