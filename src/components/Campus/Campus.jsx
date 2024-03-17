import React from 'react'
import photo1 from '../../assets/gallery-1.png'
import photo2 from '../../assets/gallery-2.png'
import photo3 from '../../assets/gallery-3.png'
import photo4 from '../../assets/gallery-4.png'
import whitearrow from '../../assets/white-arrow.png'

import './Campus.css'

const Campus = () => {
  return (
    <>
    <div className="campus">
        <div className="gallery">
            <img src={photo1} alt="" />
            <img src={photo2} alt="" />
            <img src={photo3} alt="" />
            <img src={photo4} alt="" />
        </div>
        <button className='btn btn-dark'>See more here <img src={whitearrow} alt="" /></button>

    </div>
    
    
    
    </>
  )
}

export default Campus