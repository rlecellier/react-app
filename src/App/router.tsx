import { createBrowserRouter } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

import Home from 'pages/Home'
import SignIn from 'pages/SignIn'

import AppDashboard from './AppDashboard'
import AppFullScreen from './AppFullScreen'

const routes: RouteObject[] = [
  {
    element: <AppDashboard />,
    children: [
      {
        index: true,
        path: '/home',
        element: <Home />,
      },
    ],
  },
  {
    element: <AppFullScreen />,
    children: [
      {
        path: '/sign-in',
        element: <SignIn />,
      },
    ],
  },
]

export default createBrowserRouter(routes)
