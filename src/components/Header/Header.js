import React from 'react'
import HeaderLinks from './HeaderLinks'


const links = [
  {title: 'Home', link: '#home', clicked: false, id: 1},
  {title: 'About me', link: '#about-me', clicked: false, id: 2},
  {title: 'Skills', link: '#skills', clicked: false, id: 3},
  {title: 'Portfolio', link: '#portfolio', clicked: false, id: 4},
  {title: 'Contacts', link: '#contacts', clicked: false, id: 5},
]

class Header extends React.Component {
  render() {
    return (
      <header className='header container'>
        <HeaderLinks links={links}/>
      </header>
    )
  }
}

export default Header