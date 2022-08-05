import { Box, NavLink } from '@mantine/core'
import React from 'react'
import { FaCaretRight } from 'react-icons/fa';
import { Button } from '@mui/material';


const Navbar = () => {

    
    return (
        <>
            <Box component='nav' className='flex justify-between items-center shadow-xl px-10 py-2'>
                <Box className='flex font-semibold'>
                    <NavLink variant='subtle' label="HOME" />
                    <NavLink label="COURSES" />
                    <NavLink label="ABOUT" />
                    <NavLink label="CONTACT" />
                </Box>
                <Button variant='outlined' endIcon={<FaCaretRight />}>
                    Get Registered
                </Button>
            </Box>
        </>
    )
}

export default Navbar