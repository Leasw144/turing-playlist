import React from 'react';
import './SongController.css'

const SongController = (props) => {
  console.log('your props', props)
  console.log('your song', props.currentSong.songName)
  return (
    <div className='currentSong'>
      <h1>{props.currentSong.songName}</h1>
      <h2>{props.currentSong.artistName}</h2>
      <h2>{props.currentSong.link}</h2>
      <button onClick={props.changeSong}>Next Song</button>
    </div>
  );
};

export default SongController;
