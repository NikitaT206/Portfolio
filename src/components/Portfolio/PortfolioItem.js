import React from 'react'

function PortfolioItem(props) {

  function handleClick() {
    props.onImageClick(props.item)
  }

  return  (

    <figure className='portfolio__figure'>
      <figcaption>
        <a
          rel='noreferrer'
          className='portfolio__link link'
          href={props.item.link}
          target='_blank'>{props.item.name}
        </a>
      </figcaption>
      <img
        onClick={handleClick}
        className='portfolio__image' 
        src={props.item.image} 
        alt={props.item.name}
      ></img> 
    </figure>
    
  )
}

export default PortfolioItem