import { useState } from "react"

function LangSelect({onLangSelect}) {

  const [lang, setLang] = useState({id: 'en'})

  function handleChange(event) {
    setLang(event.target)
    onLangSelect(event.target.id)
  }

  return (
    <div className='about__language-selector'>
      <a id='ru' className={lang.id === 'ru' ? 'about__language about__language_active' : 'about__language'} onClick={handleChange}>Ru</a>
      <a id='en' className={lang.id === 'en' ? 'about__language about__language_active' : 'about__language'} onClick={handleChange}>Eng</a>
    </div>
  )
}

export default LangSelect