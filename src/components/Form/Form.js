import React, { Component} from 'react'
import './Form.css'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      songName: '',
      artistName: '',
      link: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submitSong(songName, artistName, link) {
    this.props.addSong(songName, artistName, link)
    this.setState({ songName: '', artistName: '', link: ''})
  }

  render() {
    return (
      <form>
        <label>Song Name</label>
        <input 
          type='text' 
          name='songName' 
          value={this.state.songName}
          onChange={this.handleChange}
          placeholder='song name'></input>
        <label>Artist Name</label>
        <input 
          type='text'
          name='artistName'
          value={this.state.artistName}
          onChange={this.handleChange}
          placeholder='artist name'></input>
        <label>Link</label>
        <input 
          type='text'
          name='link'
          value={this.state.link}
          onChange={this.handleChange}
          placeholder='link'
          ></input>
        <button type='button' name='submit' onClick={() => this.submitSong(this.state.songName, this.state.artistName, this.state.link)} >Submit</button>
      </form>
    )
  }
}

export default Form