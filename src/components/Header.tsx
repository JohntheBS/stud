import React from 'react';
import Head from './Head';
import Navbar from './Navbar';
const Header = () => {
    return (
        <div className='bg-white'>
            <Head />
            <div className='top-0 sticky'>
                <Navbar />
            </div>
        </div>
    )
}

export default Header