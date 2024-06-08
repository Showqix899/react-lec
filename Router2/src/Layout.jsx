import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Body from './components/Body'
function Layout() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Body/>
    </div>
  )
}

export default Layout
