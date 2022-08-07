import { Box, Anchor, Input, Tooltip } from "@mantine/core";
import { Link } from "react-router-dom"
import { FaFacebookF, FaQuestion, FaSearch, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa"

const Head = () => {
    return (
        <>
            <Box component={'nav'} className="px-2 md:px-10 py-1">
                <Box className='flex justify-between items-center flex-nowrap'>
                    <Box>
                        <Link to="/" className='text-xl font-bold'>
                            <div className='first-letter:text-blue-700  first-letter:text-3xl leading-[0.0rem]'>Thinkers<br /><span className='text-xs italic'>together as one</span></div>

                        </Link>
                    </Box>
                    <Box>
                        <Input
                            icon={<FaQuestion size={16} />}
                            placeholder="Search Here ..."
                            radius={50}
                            className="hidden sm:block sm:w-[250px] md:w-[350px] lg:w-[450px]"
                            rightSection={
                                <Tooltip label="Search" position="top-end" withArrow>
                                    <div>
                                        <FaSearch size={18} style={{ display: 'block', opacity: 0.5 }} />
                                    </div>
                                </Tooltip>
                            }
                        />
                    </Box>
                    <Box>
                        <ul className='flex gap-2 md:gap-4'>
                            <Anchor className='h-8 w-8 bg-blue-600 hover:bg-blue-400 text-white rounded-full flex justify-center items-center'>
                                <FaFacebookF />
                            </Anchor>

                            <Anchor className='h-8 w-8 bg-blue-600 hover:bg-blue-400 text-white rounded-full flex justify-center items-center'>
                                <FaWhatsapp />

                            </Anchor>
                            <Anchor className='h-8 w-8 bg-blue-600 hover:bg-blue-400 text-white rounded-full flex justify-center items-center'>
                                <FaTwitter />

                            </Anchor>

                            <Anchor className='h-8 w-8 bg-blue-600 hover:bg-blue-400 text-white rounded-full flex justify-center items-center'>
                                <FaYoutube />
                            </Anchor>


                        </ul>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Head