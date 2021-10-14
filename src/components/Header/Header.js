import React from 'react'
import HeaderLink from './HeaderLink'
import { TranslationContext } from '../../context/TranslationContext'


function Header() {

  const translations = React.useContext(TranslationContext)

  const links = [
    {title: translations.header.home, link: 'about', clicked: false, id: 1},
    {title: translations.header.aboutMe, link: 'about-me', clicked: false, id: 2},
    {title: translations.header.skills, link: 'skills', clicked: false, id: 3},
    {title: translations.header.portfolio, link: 'portfolio', clicked: false, id: 4},
    {title: translations.header.contacts, link: 'contacts', clicked: false, id: 5},
  ]

  return (
    <header className='header container' id='header'>
      <nav className='header__links'>
        {links.map(link => {
          return <HeaderLink link={link} key={link.id}/>})}
      </nav>
    </header>
  )
}


export default Header