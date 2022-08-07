import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Head from '../components/Head'

const Layout2 = () => {
    return (
        <>
            <div className='bg-white shadow-lg pb-2'>
                <Head />
            </div>
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout2