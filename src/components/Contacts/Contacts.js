import React from 'react'
import Icons from './Icons'
import { TranslationContext } from '../../context/TranslationContext'
import { links } from '../../constants/links'

function Contacts(props) {

  const translations = React.useContext(TranslationContext)

  return (
    <footer className='section contacts container' id='contacts'>
      <h2 className='section__title'>{translations.contacts.title}</h2>
      <p className='contacts__text'>{translations.contacts.text1}<br></br> 
      {translations.contacts.text2}</p>
      {/* <form className='contacts__form'>
        <button className='contacts__button' onClick={props.onButtonClick}>{translations.contacts.buttonText}</button>
      </form> */}
      <Icons links={links}/>
      <p className='contacts__caption'>{translations.contacts.caption}</p>
    </footer>
  )
    
}

export default Contacts