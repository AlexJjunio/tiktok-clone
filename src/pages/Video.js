import React, { useRef, useState } from 'react'
import "./video.css"
import VideoFooter from './components/footer/VideoFooter'

function Video() {

  const videoRef = useRef(null)
  const [play, setPlay] = useState(false)

  function handdleStart() {

    if(!play) {
      videoRef.current.play()
      setPlay(true)
    } else {
      videoRef.current.pause()
      setPlay(false)
    }

  }


  return (
    <div className='video'>

      <video 
        className='video__player'
        ref={videoRef}
        onClick={handdleStart}
        loop
        src='https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/bird.mp4?alt=media&token=52abbeec-ff95-4acb-808e-5a4b4977d1da'
      >

      </video>
      {/* Side bar */}
      <VideoFooter/>
    </div>
  )
}

export default Video
