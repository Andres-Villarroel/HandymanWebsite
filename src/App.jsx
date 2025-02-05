import { useState } from 'react'
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import  Home  from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import FAQ from './Pages/FAQ'
import Gallary from './Pages/Gallary'
import Services from './Pages/Services'

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path='/FAQ' element={<FAQ/>} />
        <Route path='/Gallary' element={<Gallary/>} />
      </Routes>
    </Router>
  )
}

export default App
