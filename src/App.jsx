import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import "./App.css"
import { HashRouter , BrowserRouter , Routes ,Route } from 'react-router-dom'
import Home from './components/pages/home'
import About from './components/pages/about'
import Contact from './components/pages/contact'
import  Services from './components/pages/services'

function App() {
  
  return (
    
    <div className='container'>
      
      <Navbar/>
      
     <BrowserRouter basename='/plumbing-project'>
      <Routes >
        
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>   
      </Routes>
      </BrowserRouter>
    </div>
  )
}
  
export default App