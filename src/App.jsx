// eslint-disable-next-line no-unused-vars
import React from 'react'

import Navigation from './components/navbar/Navigation'
import Header from './components/Header/Header'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Videoplayer from './components/videoPlayer/Videoplayer'
import { useState } from 'react'
const App = () => {

  const [playState, setplayState] = useState(false);




  return (
   <>
     <Navigation/>
   <Header/>
   <div className="container">
 
   
   <Title subtitle='Our Program' title ='What We Offer'  />
   <Programs/>
   <About setplayState={setplayState}/>
  <Title subtitle='Gallery' title='Campus Photos'/>
  <Campus/>
  <Title subtitle='Testimonials' title='What Student Says'/>
  <Testimonials/>
  <Title subtitle='Contact Us' title='Get in Touch'/>
  <Contact></Contact>
  <Footer/>
   </div>
   
   <Videoplayer playState={playState}  setplayState={setplayState}/>
   
   
   </>
  )
}

export default App