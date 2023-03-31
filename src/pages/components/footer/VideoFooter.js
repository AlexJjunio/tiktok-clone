import React from 'react'
import "./videoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter() {
  return (
    <div className='videoFooter'>
      <div className="videoFooter_text">
        <h3>@Alex Jjunio</h3>
        <p>Descrição do Video</p>
        <div className='videoFooter__music'>
          <MusicNoteIcon className='videoFooter__icon'/>
          <div className='videoFooterMusic__text'>
            <p>Titulo de musica</p>
          </div>
        </div>
      </div>
      <img
        className='videoFooter_record'
        alt='Imagem de um vinil girando'
        src='https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/vinil.png?alt=media&token=d174bbec-b930-41e4-ab50-af1ea81bb7da'
      />
    </div>
  )
}

export default VideoFooter