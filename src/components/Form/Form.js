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

  render() {
    return (
      <form>
        <label>Song Name</label>
        <input type='text'></input>
        <label>Song Name</label>
        <input type='text'></input>
        <label>Song Name</label>
        <input type='text'></input>
        <button type='button' >Submit</button>
      </form>
    )
  }
}

export default Form