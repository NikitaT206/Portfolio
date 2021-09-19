import React from 'react'
import Icon from './Icon'

class Icons extends React.Component {
  render() {
    return  <div className='contacts__icons-container'>
              {this.props.links.map(link => {
                return <Icon link={link} key={link.id}/>
              })}
            </div>
  }
}

export default Icons