import style from './App.module.css';
import {About }from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import { Hero } from './components/hero/Hero';



function App() {
  

  return (
    <div className={style.App}>
      <Navbar/>
      <Hero/>
      <About/>
    </div>
  )
}

export default App
