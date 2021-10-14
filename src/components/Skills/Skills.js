import React from 'react'
import htmlIcon from '../../images/icons/html5.svg'
import cssIcon from '../../images/icons/css.png'
import javaScriptIcon from '../../images/icons/js.svg'
import reactIcon from '../../images/icons/react.png'
import SkillsContainer from './SkillsContainer'
import { TranslationContext } from '../../context/TranslationContext'

const skills = [
  {name: 'HTML5', icon: htmlIcon, level: 5, id: 1},
  {name: 'CSS', icon: cssIcon, level: 4, id: 2},
  {name: 'JavaScript', icon: javaScriptIcon, level: 3, id: 3},
  {name: 'React', icon: reactIcon, level: 2, id: 4},
]

function Skills() {

  const translations = React.useContext(TranslationContext)


  return (
    <section className='skills container section' id='skills'>
      <h2 className='section__title'>{translations.skills.title}</h2>
      <SkillsContainer skills={skills}/>
    </section>
  )
    
}


export default Skills