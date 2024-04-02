import style from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import { Hero } from './components/hero/Hero';


function App() {
  

  return (
    <div className={style.App}>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App
