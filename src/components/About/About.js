import React from 'react'
import AboutImage from './AboutImage'

const user = {
  name: 'Nikita',
  lastName: 'Tunik',
  old: (new Date().getFullYear() - 1992),
  city: 'Saint-Petersburg',
  job: 'Web-Developer Student',
}

class About extends React.Component {
  render() {
    return <section className='about container section'>
      <a name='home'></a>
      <div className='about__container'>
        <h1 className='about__title'>{user.name}<br></br>{user.lastName}</h1>
        <div className='about__self-description'>
        <p className='about__text'>{user.job}</p>
        <p className='about__text'>{user.old} years old, {user.city}</p>
        </div>
        <nav className='about__language-selector'>
          <a className='about__language'>Ru</a>
          <a className='about__language about__language_active'>Eng</a>
        </nav>
      </div>
      <AboutImage user={user}/>
    </section>
    
  }
}

export default About