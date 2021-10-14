import React from 'react'
import russianTravelImage from '../../images/portfolio/1.png'
import mestoImage from '../../images/portfolio/2.png'
import portfolioImage from '../../images/portfolio/3.png'
import PortfolioItem from './PortfolioItem'
import { TranslationContext } from '../../context/TranslationContext'

const portfolioItems = [
  {name: 'Russian Travel', link: 'https://nikitat206.github.io/russian-travel/', image: russianTravelImage, description: 'ewfewf', id: 1},
  {name: 'Mesto', link: 'https://nikitat206.github.io/mesto/', image: mestoImage, description: 'ewf235235325ewf', id: 2},
  {name: 'Portfolio', link: 'https://nikitat206.github.io/portfolio/', image: portfolioImage, description: 'ewgwwqqqqqq', id: 3},
]

function Portfolio(props) {

  const translations = React.useContext(TranslationContext)

  return (
    <section className='section portfolio' id='portfolio'>
      <h2 className='section__title'>{translations.portfolio.title}</h2>
      <div className='portfolio__container container'>
        {portfolioItems.map(item => {
          return <PortfolioItem item={item} key={item.id} onImageClick={props.onImageClick}/>})}  
      </div>
    </section>
  )
}


export default Portfolio