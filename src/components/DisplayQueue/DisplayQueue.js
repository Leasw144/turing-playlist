import React from 'react'
// import './DisplayQueue'

const DisplayQueue = (props) => {
  const songQueue = props.songQueue.map(song => {
    return (
      < div className='Queued'>
      <h1>{song.songName}</h1>
      <h2>{song.artistName}</h2>
      <h2>{song.link}</h2>
    </div>
    )
  })

  return (
    <section>
      {songQueue}
    </section>
  )
}