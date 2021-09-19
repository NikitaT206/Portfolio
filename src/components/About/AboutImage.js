import React from 'react'
import aboutImage from '../../images/main.jpg'

class AboutImage extends React.Component {
  render() {
    return  <div className='about__image-container'>
              <img className='about__image' src={aboutImage} alt={this.props.user.name}></img>
            </div>
  }
}

export default AboutImage