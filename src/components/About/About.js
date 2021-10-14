import React from 'react'
import AboutImage from './AboutImage'
import LangSelect from '../LangSelect'
import { useContext } from 'react'
import { TranslationContext } from '../../context/TranslationContext'


function About(props) {
  const translations = React.useContext(TranslationContext)

  return (
    <section className='about container section' id='about'>
      <div className='about__container'>
        <h1 className='about__title'>{translations.about.user.name}<br></br>{translations.about.user.lastName}</h1>
        <div className='about__self-description'>
        <p className='about__text'>{translations.about.user.job}</p>
        <p className='about__text'>{translations.about.user.old} {translations.about.user.city}</p>
      </div>
      <LangSelect onLangSelect={props.onLangSelect}/>
      </div>
      <AboutImage user={translations.about.user.name}/>
    </section>
  )
}


export default About