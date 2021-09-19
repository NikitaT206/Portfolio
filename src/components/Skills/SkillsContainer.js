import React from 'react'
import Skill from './Skill'

class SkillsContainer extends React.Component {
  render() {
    return  <div className='skills__container'>
              {this.props.skills.map(skill => {
                return <Skill skill={skill} key={skill.id}/>
              })}
            </div>
  }
}

export default SkillsContainer