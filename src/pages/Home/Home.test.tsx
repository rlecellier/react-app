import { render, screen } from '@testing-library/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Home from './Home'

const renderHome = () => {
  return render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )
}

test('renders title', () => {
  renderHome()
  const titleElement = screen.getByText(/Home Page/i)
  expect(titleElement).toBeInTheDocument()
})
