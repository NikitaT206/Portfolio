import React from 'react'
import Icons from './Icons'
import gitHubIcon from '../../images/icons/contacts/git.svg'
import linkedInIcon from '../../images/icons/contacts/linked.svg'
import instagramIcom from '../../images/icons/contacts/inst.svg'
import vkIcom from '../../images/icons/contacts/vk.svg'
import { TranslationContext } from '../../context/TranslationContext'

const links = [
  {name: 'gitHub', link: 'https://github.com/NikitaT206', icon: gitHubIcon, id: 1},
  {name: 'linkedIn', link: 'https://www.linkedin.com/in/nikita-tunik-774862220/', icon: linkedInIcon, id: 2},
  {name: 'instagram', link: 'https://www.instagram.com/nikitat206/', icon: instagramIcom, id: 3},
  {name: 'VK', link: 'https://vk.com/bebeberururutatata', icon: vkIcom, id: 4},
]

function Contacts() {

  const translations = React.useContext(TranslationContext)


  return (
    <footer className='section contacts container' id='contacts'>
      <h2 className='section__title'>{translations.contacts.title}</h2>
      <p className='contacts__text'>{translations.contacts.text1}<br></br> 
      {translations.contacts.text2}</p>
      <form className='contacts__form'>
        <button className='contacts__button'>{translations.contacts.buttonText}</button>
      </form>
      <Icons links={links}/>
      <p className='contacts__caption'>{translations.contacts.caption}</p>
    </footer>
  )
    
}

export default Contacts