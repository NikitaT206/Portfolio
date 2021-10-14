import React from 'react'
import aboutImage from '../../images/main.jpg'

function AboutImage(props) {
  return (
    <div className='about__image-container'>
      <img className='about__image' src={aboutImage} alt={props.user.name}></img>
    </div>
  ) 
}


export default AboutImage