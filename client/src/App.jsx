import './App.css';
import Navbar from './Component/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import UrlState from '../src/Context/URLShortner/UrlState'
import Analytics from './Component/Analytics';
function App() {
  
  return (
    <>
    <UrlState>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/analytics' element={<Analytics />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </UrlState>
    </>
  )
}

export default App
