import React from 'react'
import { TranslationContext } from '../../context/TranslationContext'

function AboutMe() {

  const translations = React.useContext(TranslationContext)


  return (
    <section className='about-me section' id='about-me'>
      <div className='container'>
        <h2 className='section__title'>{translations.aboutMe.title}</h2>
        <div className='about-me__text-container'>
          <p className='about-me__text'>{translations.aboutMe.description1}</p>
          <p className='about-me__text'>{translations.aboutMe.description2}</p>
          <p className='about-me__text'>{translations.aboutMe.description3}</p>
        </div>
      </div>
    </section>
  )  
}

export default AboutMe