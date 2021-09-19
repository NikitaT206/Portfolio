import React from 'react'
import PortfolioContainer from './PortfolioContainer'
import russianTravelImage from '../../images/portfolio/1.png'
import mestoImage from '../../images/portfolio/2.png'
import portfolioImage from '../../images/portfolio/3.png'

const portfolioItems = [
  {name: 'Russian Travel', link: 'https://nikitat206.github.io/russian-travel/', image: russianTravelImage, id: 1},
  {name: 'Mesto', link: 'https://nikitat206.github.io/mesto/', image: mestoImage, id: 2},
  {name: 'Portfolio', link: 'https://nikitat206.github.io/portfolio/', image: portfolioImage, id: 3},
]

class Portfolio extends React.Component {
  render() {
    return  <section className='section portfolio'>
              <a name='portfolio'></a>
              <h2 className='section__title'>Portfolio</h2>
              <PortfolioContainer items={portfolioItems}/>
            </section>
  }
}

export default Portfolio