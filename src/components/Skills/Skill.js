import React from 'react'


class Skill extends React.Component {
  render() {
    return  <div>
              <figure className='skills__figure'>
                <img
                  alt={this.props.skill.name}
                  className='skills__icon' 
                  src={this.props.skill.icon}>
                </img>
                <figcaption className='skills__caption'>{this.props.skill.name}</figcaption>
              </figure>
            </div>
  }
}

export default Skill