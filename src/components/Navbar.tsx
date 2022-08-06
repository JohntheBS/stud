import { Box, NavLink, Button, Drawer } from '@mantine/core'
import React from 'react'
import { useState } from 'react';
import { FaBars, FaCaretRight } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {
    const location = useLocation();
    const [opened, setOpened] = useState(false);
    return (
        <>
            <Box component='nav' className='flex justify-between items-center shadow-xl md:px-10 px-4 w-full py-2'>
                <Box className=' font-semibold hidden md:flex'>
                    <NavLink className='hover:text-blue-500 font-semibold' label="HOME" component={Link} to="/" active={location.pathname == "/"} />
                    <NavLink className='hover:text-blue-500 font-semibold' label="COURSES" component={Link} to="/courses" active={location.pathname == "/courses"} />
                    <NavLink className='hover:text-blue-500 font-semibold' label="ABOUT" component={Link} to="/about" active={location.pathname == "/about"} />
                    <NavLink className='hover:text-blue-500 font-semibold' label="CONTACT" component={Link} to="/contact" active={location.pathname == "/contact"} />
                </Box>
                <Drawer
                    opened={opened}
                    onClose={() => setOpened(false)}
                    title=""
                    padding="xl"
                    size="xl"
                >
                    <NavLink className='hover:text-blue-500 font-semibold' label="HOME" component={Link} to="/" active={location.pathname == "/"} />
                    <NavLink className='hover:text-blue-500 font-semibold' label="COURSES" component={Link} to="/courses" active={location.pathname == "/courses"} />
                    <NavLink className='hover:text-blue-500 font-semibold' label="ABOUT" component={Link} to="/about" active={location.pathname == "/about"} />
                    <NavLink className='hover:text-blue-500 font-semibold' label="CONTACT" component={Link} to="/contact" active={location.pathname == "/contact"} />
                </Drawer>
                <Button className='bg-blue-500 block md:hidden' onClick={() => setOpened(true)} ><FaBars /></Button>
                <Button variant='outline' radius={20} className='right-0' rightIcon={<FaCaretRight />}>
                    Sign Up
                </Button>
            </Box>
        </>
    )
}

export default Navbar