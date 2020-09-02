import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
// import { getIdeas } from '../apiCalls';



describe('Form', () => {
  it('should display inputs for title, artist, and link', () => {

    render(<Form />)

    const titleInput = screen.getByPlaceholderText('song name')
    const artistInput = screen.getByPlaceholderText('artist name')
    const linkInput = screen.getByPlaceholderText('link')

    expect(titleInput).toBeInTheDocument()
    expect(artistInput).toBeInTheDocument()
    expect(linkInput).toBeInTheDocument()
  })
})