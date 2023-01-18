import { createTheme, ThemeProvider } from '@mui/material/styles'
import React from 'react'
import { RouterProvider } from 'react-router-dom'

import styles from 'App/App.module.scss'

import router from './router'

const theme = createTheme()

function App() {
  return (
    <div className={styles['App']}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  )
}

export default App
