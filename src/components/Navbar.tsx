import { Box, NavLink, Button,Drawer } from '@mantine/core'
import React from 'react'
import { useState } from 'react';
import { FaBars, FaCaretRight } from 'react-icons/fa';



const Navbar = () => {

    const [opened, setOpened] = useState(false);
    return (
        <>
            <Box component='nav' className='flex justify-between items-center shadow-xl md:px-10 px-4 w-full py-2'>
                <Box className=' font-semibold hidden md:flex'>
                    <NavLink variant='subtle' label="HOME" />
                    <NavLink label="COURSES" />
                    <NavLink label="ABOUT" />
                    <NavLink label="CONTACT" />
                </Box>
                <Drawer
                    opened={opened}
                    onClose={() => setOpened(false)}
                    title=""
                    padding="xl"
                    size="xl"
                >
                    <NavLink variant='subtle' label="HOME" />
                    <NavLink label="COURSES" />
                    <NavLink label="ABOUT" />
                    <NavLink label="CONTACT" />
                </Drawer>
                <Button className='bg-blue-500 block md:hidden' onClick={() => setOpened(true)} ><FaBars /></Button>
                <Button className='right-0 bg-blue-500' >
                    Sign Up
                </Button>
            </Box>
        </>
    )
}

export default Navbar