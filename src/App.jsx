import { useState } from 'react'
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Gallery from './Pages/Gallery'
import Services from './Pages/Services'
import Footer from './Components/Footer'
import ScrollToTop from './Components/ScrollToTop'
import Test from './Pages/Test'
import NewUpperBody from './Components/NewUpperBody'

function App() {
  
    //CONSIDER SWITCHING FLEX STYLE TO COLUMNS AND ADJUSTING ACCORDINGLY
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path='/Gallery' element={<Gallery/>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App