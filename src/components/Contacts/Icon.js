import React from 'react'

function Icon(props) {
 
  return (
    <div className='contacts__icon-container'>
      <a href={props.link.link} target='_blank' rel='noreferrer'>
        <img className='contacts__icon' src={props.link.icon} alt={props.link.name}></img>
      </a>
    </div>
  ) 
}

export default Icon