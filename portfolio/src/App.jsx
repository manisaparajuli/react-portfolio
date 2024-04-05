import style from './App.module.css';
import {About }from './components/About/About';
import {Contact} from './components/Contact/Contact';
import { Experience } from './components/Experience/Experience';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import { Hero } from './components/hero/Hero';



function App() {
  

  return (
    <div className={style.App}>
      <Navbar/>
      <Hero/>
      <Experience/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
