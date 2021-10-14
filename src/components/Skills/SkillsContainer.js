import React from 'react'
import Skill from './Skill'

function SkillsContainer(props) {

  return (
    <div className='skills__container'>
      {props.skills.map(skill => {
        return <Skill skill={skill} key={skill.id}/>})}
    </div>
  )

}


export default SkillsContainer