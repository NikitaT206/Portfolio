import React from 'react'

function Skill(props) {

  return (
    <figure className='skills__figure'>
      <img
        alt={props.skill.name}
        className='skills__icon' 
        src={props.skill.icon}>
      </img>
      <figcaption className='skills__caption'>{props.skill.name}</figcaption>
    </figure>
  )
   
}


export default Skill