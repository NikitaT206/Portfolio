import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Contacts from './components/Contacts/Contacts';
import UpButton from './components/UpButton/UpButton';
import UpButton from './components/UpButton/UpButton';

function App() {
  return (
    <div>
    <UpButton/>
    <Header/>
    <main>
    <About/>
    <AboutMe/>
    <Skills/>
    <Portfolio/>
    </main>
    <Contacts/>
    </div>
  )
}

export default App;
