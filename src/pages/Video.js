import React, { useRef, useState } from 'react'
import "./video.css"

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
        src='https://cdn.coverr.co/videos/coverr-a-despondent-girl-hugging-herself-while-crouched-8668/1080p.mp4'
      >

      </video>

    </div>
  )
}

export default Video
