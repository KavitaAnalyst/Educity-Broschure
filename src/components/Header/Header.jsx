// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Header.css'
import arrow from '../../assets/dark-arrow.png'
const Header = () => {
  return (
   <>
   <div className="hero">
    <div className="header-text">
       <h1>We ensure better education for better world</h1> 
       <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
    
    <button className='btn'>Explore More <img src={arrow} alt="" className='arrow' /></button>
    </div>
   </div>
   
   
   
   
   </> 
  )
}

export default Header