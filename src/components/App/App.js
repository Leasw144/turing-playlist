import React, { Component } from 'react';
import './App.css';
import SongController from '../SongController/SongController';
import Form from '../Form/Form'
// import DisplayList from 

import { getPlaylist } from '/Users/leasw144/turing/mod_3/turing-playlist/src/apiCalls.js'



class App extends Component {
  constructor() {
    super();
    this.state = {
      songQueue: [],
      currentSong: {},
      error: ''
    }
    this.getPlaylist = getPlaylist
  }

  componentDidMount = async () => {
    try {
      const playlist = await this.getPlaylist()
      this.setState({songQueue: playlist.slice(1), currentSong: playlist[0]})
      console.log(this.state)
    } catch (error) {
      console.log('error getting your playlist!')
      this.setState({error: error})
    }
  }

  changeSong() {
    console.log(this.state)
    this.setState(prevState => ({ songQueue: prevState.playlist.slice(1), currentSong: prevState.playlist[0]}))

  }
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1>Turing's Playlist</h1>
        </header>
        <div className="App-background">
          <Form />
          <main>
            <SongController changeSong={this.changeSong} currentSong={this.state.currentSong}/>
            {/* <DisplayQueue songQueue={this.state.songQueue}/> */}
          </main>
        </div> 
      </div>
    )
  }
}

export default App;
