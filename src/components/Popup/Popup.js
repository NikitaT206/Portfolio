import React from 'react'

function Popup(props) {
 
  return (
    <div className={props.item.id ? 'popup popup_visible' : 'popup'} onClick={props.onCloseButton}>
      <div className='popup__container' onClick={(event) => event.stopPropagation()}>
        <div className='popup__content'>
          <button className='popup__close-button' onClick={props.onCloseButton}></button>
          <div className='popup__image-container'>
            <h2 className='popup__title'>{props.item.name}</h2>
            <img className='popup__image' src={props.item.image} alt={props.item.name}></img>
            </div>
            <p className='popup__text'>{props.item.description}</p>
            <a className='popup__link' href={props.item.link} target='_blank' rel='noreferrer'>Ссылка на GitHub Pages</a>
        </div>
      </div>
    </div>
  )
}

export default Popup