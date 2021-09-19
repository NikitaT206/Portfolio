import React from 'react'
import Icons from './Icons'
import gitHubIcon from '../../images/icons/contacts/git.svg'
import linkedInIcon from '../../images/icons/contacts/linked.svg'
import instagramIcom from '../../images/icons/contacts/inst.svg'
import vkIcom from '../../images/icons/contacts/vk.svg'

const links = [
  {name: 'gitHub', link: 'https://github.com/NikitaT206', icon: gitHubIcon, id: 1},
  {name: 'linkedIn', link: 'https://www.linkedin.com/in/nikita-tunik-774862220/', icon: linkedInIcon, id: 2},
  {name: 'instagram', link: 'https://www.instagram.com/nikitat206/', icon: instagramIcom, id: 3},
  {name: 'VK', link: 'https://vk.com/bebeberururutatata', icon: vkIcom, id: 4},
]

class Contacts extends React.Component {
  render() {
    return <footer className='section contacts container'>
      <a name='contacts'></a>
      <h2 className='section__title'>Contacts</h2>
      <p className='contacts__text'>Want to know more or just chat?<br></br> 
You are welcome!</p>
      <form className='contacts__form'>
        <button className='contacts__button'>Send message</button>
      </form>
      <Icons links={links}/>
      <p className='contacts__caption'>Like me on GitHub
LinkedIn, Instagram, VK</p>
    </footer>
  }
}

export default Contacts