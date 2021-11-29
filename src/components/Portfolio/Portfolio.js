import React from 'react'
import PortfolioItem from './PortfolioItem'
import { TranslationContext } from '../../context/TranslationContext'
import { portfolioItems } from '../../constants/portfolioItems'

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