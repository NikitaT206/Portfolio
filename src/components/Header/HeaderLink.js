import React from 'react'
import { Link } from 'react-scroll'

function HeaderLink(props) {
  
    return (
      // <NavLink 
      //   exact to={props.link.link} 
      //   className='header__link link' 
      //   activeClassName='header__link link_active'
      //   >{props.link.title}</NavLink>
      <Link 
      to={props.link.link}
      className='header__link link'
      activeClass='header__link link_active'
      smooth={true}
      duration={500}
      >{props.link.title}</Link>
    )
  
}

export default HeaderLink