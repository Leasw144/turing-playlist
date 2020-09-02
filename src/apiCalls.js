

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
