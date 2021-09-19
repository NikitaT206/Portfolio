import React from 'react'

class Icon extends React.Component {
  render() {
    return  <div className='contacts__icon-container'>
              <a href={this.props.link.link} target='_blank' rel='noreferrer'>
                <img className='contacts__icon' src={this.props.link.icon} alt={this.props.link.name}></img>
              </a>
            </div>
  }
}

export default Icon