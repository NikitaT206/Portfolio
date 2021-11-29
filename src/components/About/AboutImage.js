import React from 'react'
// import aboutImage from '../../images/main.jpg'
import me from '../../images/me.jpeg'

function AboutImage(props) {
  return (
    <div className='about__image-container'>
      <img className='about__image' src={me} alt={props.user.name}></img>
    </div>
  ) 
}


export default AboutImage