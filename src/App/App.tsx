import React from 'react'
import { RouterProvider } from 'react-router-dom'

import styles from 'App/App.module.scss'

import router from './router'

function App() {
  return (
    <div className={styles['App']}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
