import React, { Component } from 'react'
import './Navbar.css'
import logo_light from "../../assets/logo_light.jpg";
import logo_dark from "../../assets/logo_dark.jpg";
import  { useState } from 'react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (<>
    <div className='navbar'>

        <img src={logo_light} alt="" className='logo'/> مؤسسة عتيوي الرشيد 
        <button className="humburger" onClick={toggleMenu}>☰</button>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="" className='exit-button'>X</a>
         <a href="/plumbing-project/">الرئيسيه</a>
            <a href="/plumbing-project/services">خدماتنا</a>
            <a href='/plumbing-project/contact'>اتصل بنا</a>
            <a href='/plumbing-project/about'>من نحن</a>         
        </ul>
    </div>
    
 
    </>
  )
}


export default Navbar