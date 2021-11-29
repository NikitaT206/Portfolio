import React from 'react'

function PopupMessage(props) {
 
  return (
    <div className={props.isOpen ? 'popup popup_visible' : 'popup'} onClick={props.onCloseButton}>
      <div className='popup__container' onClick={(event) => event.stopPropagation()}>
        <div className='popup__content'>
          <button className='popup__close-button' onClick={props.onCloseButton}></button>
          <h2 className='popup__title'>Пожалуйста, заполните поля</h2>
          <form className='popup__form' name='messageForm'>
            <input className='popup__input' placeholder='Тема'></input>
            <textarea className='popup__text-area' placeholder='Сообщение'></textarea>
            <button className='popup__submit-button'>Отправить</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PopupMessage