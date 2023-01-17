import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'

import AppTemplate from 'App/AppTemplate'
import Footer from 'App/Footer'
import Header from 'App/Header'

const AppDashboard = () => {
  return (
    <AppTemplate.Root>
      <AppTemplate.Header>
        <Header />
      </AppTemplate.Header>
      <AppTemplate.SideMenu>
        <ul>
          <li>
            <Link to="/sign-in">sign-in</Link>
          </li>
          <li>
            <Link to="/home">home</Link>
          </li>
        </ul>
      </AppTemplate.SideMenu>
      <AppTemplate.Content>
        <Outlet />
      </AppTemplate.Content>
      <AppTemplate.StickyFooter>
        <Footer />
      </AppTemplate.StickyFooter>
    </AppTemplate.Root>
  )
}

export default AppDashboard
