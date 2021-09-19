import React from 'react'
import HeaderLink from './HeaderLink'



class HeaderLinks extends React.Component {
  render() {
   return <nav className='header__links'>
    {this.props.links.map(link => {
      return <HeaderLink link={link} key={link.id}/>
    })}
   </nav>
  }
}

export default HeaderLinks