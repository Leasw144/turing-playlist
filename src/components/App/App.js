import React, { Component } from 'react';
import './App.css';
import SongController from '../SongController/SongController';
import Form from '../Form/Form'
import DisplayQueue from '../DisplayQueue/DisplayQueue'

import { getPlaylist, postSong } from '/Users/leasw144/turing/mod_3/turing-playlist/src/apiCalls.js'



class App extends Component {
  constructor() {
    super();
    this.state = {
      songQueue: [],
      currentSong: {},
      error: ''
    }
    this.getPlaylist = getPlaylist
    this.postSong = postSong
  }

  componentDidMount = async () => {
    try {
      const playlist = await this.getPlaylist()
      this.setState({songQueue: playlist.slice(1), currentSong: playlist[0]})
    } catch (error) {
      console.log('error getting your playlist!')
      this.setState({error: error})
    }
  }

  changeSong = () => {
    console.log('your state', this.state)
    this.setState(prevState => ({ songQueue: prevState.songQueue.slice(1), currentSong: prevState.songQueue[0]}))
  }

  addSongtoQueue = async (songName, artistName, link) => {
    await this.postSong(songName, artistName, link)
      .then(data => this.setState({ songQueue: [...this.state.songQueue, data]}))
      .then(console.log(this.state))
      .catch(error => {
        console.log('error posting song', error)
        this.setState({error: error})
      })
  }
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1>Turing's Playlist</h1>
        </header>
        <div className="App-background">
          <Form addSong={this.addSongtoQueue}/>
          <main>
            <SongController changeSong={this.changeSong} currentSong={this.state.currentSong}/>
            <DisplayQueue songQueue={this.state.songQueue}/>
          </main>
        </div> 
      </div>
    )
  }
}

export default App;
