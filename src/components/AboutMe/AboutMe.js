import React from 'react'

class AboutMe extends React.Component {
  render() {
    return <section className='about-me section'>
      <a name='about-me'></a>
      <div className='container'>
      <h2 className='section__title'>About me</h2>
      <div className='about-me__text-container'>
        <p className='about-me__text'>Hi, I'm Nikita – Web-Developer student from Saint-Petersburg. 
I'm interested in Web-Developing and everything connected with it.</p>
        <p className='about-me__text'>I'm studying at courses "Frontend Web-Developing" in Yandex-Practicum.</p>
        <p className='about-me__text'>Ready to implement excellent projects
 with wonderful people.</p>
      </div>
      </div>
    </section>
  }
}

export default AboutMe