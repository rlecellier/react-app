import { render, screen } from '@testing-library/react'
import React from 'react'

import Home from './Home'

test('renders title', () => {
  render(<Home />)
  const titleElement = screen.getByText(/Home Page/i)
  expect(titleElement).toBeInTheDocument()
})
