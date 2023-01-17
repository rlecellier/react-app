import React from 'react'
import { Outlet } from 'react-router'

import AppTemplate from 'App/AppTemplate'
import Footer from 'App/Footer'

const AppFullScreen = () => {
  return (
    <AppTemplate.Root>
      <AppTemplate.Content>
        <Outlet />
      </AppTemplate.Content>
      <AppTemplate.StickyFooter>
        <Footer />
      </AppTemplate.StickyFooter>
    </AppTemplate.Root>
  )
}

export default AppFullScreen
