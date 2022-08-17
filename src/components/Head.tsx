import { Box, Anchor } from "@mantine/core";
import { Link } from "react-router-dom"
import { FaFacebookF, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa"

const Head = () => {
    const logo = require("../assets/images/logo.jpg");
    return (
        <>
            <Box component={'nav'} className="px-2 md:px-10 py-1">
                <Box className='flex justify-between items-center flex-nowrap'>
                    <Box>
                        <Link to="/" className='text-xl font-bold flex items-center'>
                            <div className='first-letter:text-blue-700  first-letter:text-3xl leading-[0.0rem]'>Thinkers<br /><span className='text-xs italic'>together as one</span></div>

                        </Link>
                    </Box>
                    <Box>
                        <ul className='flex gap-2 md:gap-4 items-center'>
                            
                            <Anchor className='hidden h-8 w-8 bg-blue-600 hover:bg-blue-400 text-white rounded-full md:flex justify-center items-center'>
                                <FaFacebookF />
                            </Anchor>

                            <Anchor className='hidden h-8 w-8 bg-blue-600 hover:bg-blue-400 text-white rounded-full md:flex justify-center items-center'>
                                <FaWhatsapp />

                            </Anchor>
                            <Anchor className='hidden h-8 w-8 bg-blue-600 hover:bg-blue-400 text-white rounded-full md:flex justify-center items-center'>
                                <FaTwitter />

                            </Anchor>

                            <Anchor className='hidden h-8 w-8 bg-blue-600 hover:bg-blue-400 text-white rounded-full md:flex justify-center items-center'>
                                <FaYoutube />
                            </Anchor>
                            <Anchor>
                                FAQ
                            </Anchor>
                            <Anchor>
                                EN
                            </Anchor>

                        </ul>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Head