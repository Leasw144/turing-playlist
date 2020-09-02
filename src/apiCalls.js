

export function getPlaylist () {
  return fetch(`http://localhost:8080/api/v1/playlist`)
    .then(response => {
      if (response.ok) {
        console.log('You got it', response)
        return response.json()
      } else {
        throw response;
      }
    })
}

export function postSong(songName, artistName, link) {
  return fetch(`http://localhost:8080/api/v1/playlist`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      songName: songName,
      artistName: artistName,
      link: link
    })
  })
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw response;
      }
    })
}