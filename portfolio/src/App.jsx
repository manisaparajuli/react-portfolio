import style from './App.module.css';
import {About }from './components/About/About';
import { Experience } from './components/Experience/Experience';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import { Hero } from './components/hero/Hero';



function App() {
  

  return (
    <div className={style.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
    </div>
  )
}

export default App
