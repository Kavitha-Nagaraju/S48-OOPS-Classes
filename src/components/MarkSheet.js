import React from 'react'

function MarkSheet(props) {
  return (
    <div className='cricket'>
      <img src={props.img} alt=''></img>
      <h3>Name:{props.name}</h3>
      <h4>Telugu:{props.telMarks}</h4>
      <h4>English:{props.engMarks}</h4>
      <h4>Hindhi:{props.hinMarks}</h4>
      <h4>Maths:{props.mathMarks}</h4>
      <h4>Science:{props.sciMarks}</h4>
      <h4>Social:{props.socMarks}</h4>
      
    </div>
  )
}

export default MarkSheet
