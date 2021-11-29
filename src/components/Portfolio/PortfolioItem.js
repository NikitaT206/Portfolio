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
      <div className='portfolio__image-container' onClick={handleClick}>
        <img
          className='portfolio__image' 
          src={props.item.image} 
          alt={props.item.name}
        ></img>
      </div>
    </figure>
    
  )
}

export default PortfolioItem