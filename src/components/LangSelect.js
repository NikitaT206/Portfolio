import { useState } from "react"

function LangSelect({onLangSelect}) {

  const [lang, setLang] = useState({id: 'ru'})

  function handleChange(event) {
    setLang(event.target)
    onLangSelect(event.target.id)
  }

  return (
    <div className='about__language-selector'>
      <p id='ru' className={lang.id === 'ru' ? 'about__language about__language_active' : 'about__language'} onClick={handleChange}>Ru</p>
      <p id='en' className={lang.id === 'en' ? 'about__language about__language_active' : 'about__language'} onClick={handleChange}>Eng</p>
    </div>
  )
}

export default LangSelect