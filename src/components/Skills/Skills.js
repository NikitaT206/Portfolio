import React from 'react'
import htmlIcon from '../../images/icons/html5.svg'
import cssIcon from '../../images/icons/css.png'
import javaScriptIcon from '../../images/icons/js.svg'
import reactIcon from '../../images/icons/react.png'
import SkillsContainer from './SkillsContainer'

const skills = [
  {name: 'HTML5', icon: htmlIcon, level: 5, id: 1},
  {name: 'CSS', icon: cssIcon, level: 4, id: 2},
  {name: 'JavaScript', icon: javaScriptIcon, level: 3, id: 3},
  {name: 'React', icon: reactIcon, level: 2, id: 4},
]

class Skills extends React.Component {
  render() {
    return  <section className='skills container section'>
              <a name='skills'></a>
              <h2 className='section__title'>Skills</h2>
              <SkillsContainer skills={skills}/>
            </section>
  }
}

export default Skills