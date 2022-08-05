import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const Layout1 = () => {
  return (
    <>
        <Header />
        <Outlet />
    </>
  )
}

export default Layout1