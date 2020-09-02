import React from 'react'
import './DisplayQueue.css'

const DisplayQueue = (props) => {
  const songQueue = props.songQueue.map(song => {
    return (
      < div className='queued'>
      <h1>{song.songName}</h1>
      <h2>{song.artistName}</h2>
      <h2>{song.link}</h2>
    </div>
    )
  })

  return (
    <section className='songSect'>
      {songQueue}
    </section>
  )
}

export default DisplayQueue