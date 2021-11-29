import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Contacts from './components/Contacts/Contacts';
import { useState } from 'react';
import React from 'react';
import UpButton from './components/UpButton/UpButton';
import Popup from './components/Popup/Popup';
// import { Route } from 'react-router'
// import { Switch } from 'react-router';
import { TranslationContext } from './context/TranslationContext';
import { translations } from './context/TranslationContext';
// import PopupMessage from './components/PopupMessage/PopupMessage';


function App() {

  const [popupOpen, setPopupOpen] = useState({name: '', image: '', description: '', link: ''})
  // const [popupMessage, setPopupMessage] = useState(false)

  function openPopup(item) {
    setPopupOpen(item)
  }

  function closePopup() {
    setPopupOpen({name: '', image: '', description: '', link: ''})
    // setPopupMessage(false)
  }

  function handlePopupMessageClick(event) {
    event.preventDefault()
    // setPopupMessage(true)
  }

  const [lang, setLang] = useState('ru')
  
  return (
    <>
      <TranslationContext.Provider value={translations[lang]}>
        <UpButton/>
        {/* <PopupMessage isOpen={popupMessage} onCloseButton={closePopup}/> */}
        <Popup onCloseButton={closePopup} item={popupOpen}/>
        <Header/>
        <About onLangSelect={setLang}/>
        <AboutMe/>
        <Skills/>
        <Portfolio onImageClick={openPopup}/>
        <Contacts onButtonClick={handlePopupMessageClick}/>
      </TranslationContext.Provider>
      {/* <Switch>
        <Route path='/about'>
          <About/>
        </Route>
        <Route path='/about-me'>
          <AboutMe/>
        </Route>
        <Route path='/skills'>
          <Skills/>
        </Route>
        <Route path='/portfolio'>
          <Portfolio onImageClick={openPopup}/>
        </Route>
        <Route path='/contacts'>
          <Contacts/>
        </Route>
      </Switch>   */}
    </>
  )
}

export default App;
