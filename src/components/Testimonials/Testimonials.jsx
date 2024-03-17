/* eslint-disable no-unused-vars */
import React from 'react'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import './Testimonial.css'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import { useRef } from 'react'


const Testimonials = () => {

  const slider = useRef();
  let translatex = 0;

const slideForward =() =>{
 
  if (translatex > -50){
    translatex -= 25;
  }
  slider.current.style.transform = `translateX(${translatex}%)`;
}
const slideBackward =()=>{


  if (translatex < 0){
    translatex += 25;
  }
  slider.current.style.transform = `translateX(${translatex}%)`;
}


return (
    <>
    <div className="testimonials">
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_1} alt="" />
                  <div>
                  <h3>Jane Doe</h3>
                  <span>EduQuora</span>
                  </div>
                 </div> 

                  <p>Choosing to pursue my degree at EduQuora was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                
              </div>
            </li>
        {/* second slide*/}

        <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_2} alt="" />
                  <div>
                  <h3>Michael Doe</h3>
                  <span>EduQuora</span>
                  </div>
                 </div> 

                  <p>Choosing to pursue my degree at EduQuora was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                
              </div>
            </li>

          {/*third slide */}
          <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_3} alt="" />
                  <div>
                  <h3>Jina Doe</h3>
                  <span>EduQuora</span>
                  </div>
                 </div> 

                  <p>Choosing to pursue my degree at EduQuora was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                
              </div>
            </li>
            
          </ul>
        </div>
    </div>
    
    
    
    
    </>
  )
}

export default Testimonials