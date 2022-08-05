import React from 'react'
import { Box, Anchor } from "@mantine/core";
import { Link } from "react-router-dom"
import { IconButton } from '@mui/material';
import { FaFacebook, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa"
const Head = () => {
    return (
        <>
            <Box component={'nav'} className="px-12">
                <Box className='flex justify-between items-center flex-nowrap'>
                    <Box>
                        <Link to="/" className='text-xl font-bold'>
                            <span className='text-5xl font-extrabold'>T</span>ELEK
                        </Link>
                    </Box>
                    <Box>
                        <ul className='flex gap-2 md:gap-4'>
                            <Anchor>
                                <IconButton>
                                    <FaFacebook />
                                </IconButton>
                            </Anchor>

                            <Anchor>
                                <IconButton>
                                    <FaWhatsapp />
                                </IconButton>
                            </Anchor>
                            <Anchor>
                                <IconButton>
                                    <FaTwitter />
                                </IconButton>
                            </Anchor>

                            <Anchor>
                                <IconButton>
                                    <FaYoutube />
                                </IconButton>
                            </Anchor>


                        </ul>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Head