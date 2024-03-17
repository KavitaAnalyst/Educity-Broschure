/* eslint-disable react/prop-types */
import React, {  useRef } from 'react'
import videoClip from '../../assets/college-video-6XtGR-D3.mp4'
import './Videoplayer.css'

const Videoplayer = ({playState, setplayState}) => {

const player = useRef(null);
const closePlayer=(e)=>{
    if(e.target == player.current){
    setplayState(false);
    }
}
  return (
   <>
   <div className={`video-player ${playState?'':'hide'}`} ref={player} onClick={closePlayer}
   
   >
    <video src={videoClip} autoPlay muted controls></video>
   </div>
   
   
   
   
   </>
  )
}

export default Videoplayer