import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = (): JSX.Element => {
  return (
    <div>
      <h1>SignIn Page</h1>
      <ul>
        <li>
          <Link to="/sign-in">sign-in</Link>
        </li>
        <li>
          <Link to="/home">home</Link>
        </li>
      </ul>
    </div>
  )
}

export default SignIn
