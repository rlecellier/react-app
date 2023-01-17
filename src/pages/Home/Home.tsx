import React from 'react'
import { Link } from 'react-router-dom'

const Home = (): JSX.Element => {
  return (
    <div>
      <h1>Home Page</h1>
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

export default Home
