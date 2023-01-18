import { render, screen } from '@testing-library/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import SignIn from './SignIn'

const renderSignIn = () => {
  return render(
    <BrowserRouter>
      <SignIn />
    </BrowserRouter>
  )
}

test('renders title', () => {
  renderSignIn()
  const titleElement = screen.getByRole('heading', { name: /Sign in/i })
  expect(titleElement).toBeInTheDocument()
})
