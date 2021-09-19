import React from 'react'

class HeaderLink extends React.Component {
  render() {
    return <a href={this.props.link.link} className='header__link link'>{this.props.link.title}</a>
  }
}

export default HeaderLink