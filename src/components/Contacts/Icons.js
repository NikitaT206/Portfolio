import React from 'react'
import Icon from './Icon'

function Icons(props) {

  return (
    <div className='contacts__icons-container'>
      {props.links.map(link => {
        return <Icon link={link} key={link.id}/>})}
    </div>
  )

}

export default Icons