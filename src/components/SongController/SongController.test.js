import React from 'react';
import ReactDOM from 'react-dom';
import SongController from './SongController';
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'


describe('SongController', () => {
  it('should display inputs for title, artist, and link', () => {
    const currentSong = {
      songName: 'Katana zero',
      artistName: 'various artists',
      link: 'https://www.youtube.com/watch?v=P196hEuA_Xc'
    }
    render(<SongController 
      currentSong={currentSong}/>)

    //exectution: fill out the form component, submit the form, and find the resulting card
    

    const songName = screen.getByText('Katana zero')
    const artist = screen.getByText('various artists')
    const link = screen.getByText('https://www.youtube.com/watch?v=P196hEuA_Xc')


    expect(songName).toBeInTheDocument()
    expect(artist).toBeInTheDocument()
    expect(link).toBeInTheDocument()
  })
})