import { render, screen } from '@testing-library/react'
import React from 'react'

import SignIn from './SignIn'

test('renders title', () => {
  render(<SignIn />)
  const titleElement = screen.getByText(/SignIn Page/i)
  expect(titleElement).toBeInTheDocument()
})
