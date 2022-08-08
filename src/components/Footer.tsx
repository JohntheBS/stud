import { Anchor, Box, Divider } from '@mantine/core'
import React from 'react'
import { FaArrowRight, FaFacebookF, FaGoogle, FaLocationArrow, FaPhone, FaTwitter, FaWhatsapp} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <Box className='text-sm bg-blue-500 text-white'>
            <Box component='footer' className='grid sm:flex p-5  flex-wrap justify-evenly'>
                <Box className='hidden lg:block p-2 sm:p-8'>
                    <Link to="/" className='text-xl font-bold'>
                        <div className='first-letter:text-blue-700  first-letter:text-3xl leading-[0.0rem]'>Thinkers<br /><span className='text-xs italic'>together as one</span></div>
                    </Link>
                    <p className='py-6'>Together to empowered our knowledge and<br /> develop a successful future.</p>
                    <ul className='flex gap-2 md:gap-4'>
                        <Anchor className='h-6 w-6 bg-blue-600 hover:bg-blue-400 text-white rounded-full flex justify-center items-center'>
                            <FaFacebookF />
                        </Anchor>

                        <Anchor className='h-6 w-6 bg-blue-600 hover:bg-blue-400 text-white rounded-full flex justify-center items-center'>
                            <FaWhatsapp />

                        </Anchor>
                        <Anchor className='h-6 w-6 bg-blue-600 hover:bg-blue-400 text-white rounded-full flex justify-center items-center'>
                            <FaTwitter />

                        </Anchor>
                    </ul>
                </Box>
                <Box className=' p-2 sm:p-8'>
                    <h1 className='font-bold my-4 text-lg'>Explore</h1>
                    <ul className='leading-7'>
                        <Link to="/about" className='flex gap-1 items-center hover:underline'>
                            <FaArrowRight />About us
                        </Link>
                        <Link to="/services" className='flex gap-1 items-center hover:underline'>
                            <FaArrowRight />Services
                        </Link>
                        <Link to="/courses" className='flex gap-1 items-center hover:underline'>
                            <FaArrowRight />Courses
                        </Link>
                        <Link to="/blog" className='flex gap-1 items-center hover:underline'>
                            <FaArrowRight />Blog
                        </Link>
                        <Link to="/contact" className='flex gap-1 items-center hover:underline'>
                            <FaArrowRight />Contact us
                        </Link>
                    </ul>
                </Box>
                <Box className=' p-2 sm:p-8'>
                    <h1 className='font-bold my-4 text-lg'>Quick Links</h1>
                    <ul className='leading-7'>
                        <Link to="/contact" className='flex items-center gap-1 hover:underline'>
                            <FaArrowRight />Contact us
                        </Link>
                        <Link to="/pricing" className='flex items-center gap-1 hover:underline'>
                            <FaArrowRight />Pricing
                        </Link>
                        <Link to="/terms" className='flex items-center gap-1 hover:underline'>
                            <FaArrowRight />{"Terms & conditions"}
                        </Link>
                        <Link to="/privacy" className='flex items-center gap-1 hover:underline'>
                            <FaArrowRight />Privacy
                        </Link>
                        <Link to="/feedbacks" className='flex items-center gap-1 hover:underline'>
                            <FaArrowRight />Feedbacks
                        </Link>
                    </ul>
                </Box>
                <Box className='p-2 sm:p-8 '>
                   <h1 className='font-bold my-4 text-lg'>Have a Questions?</h1> 
                   <ul className=''>
                        <li className='flex items-center gap-8 my-4 leading-tight'>
                            <FaLocationArrow />203 Fake st.molyko,buea,cameroon
                        </li>
                        <li className='flex items-center gap-8 my-4'>
                            <FaPhone />
                            <div>+237 657 443 611</div>
                        </li>
                        <li className='flex items-center gap-8 my-4'>
                            <FaGoogle />
                            <div>thinkers@gmail.com</div>
                        </li>
                   </ul>
                </Box>
            </Box>
            <Divider  className='mx-2'/>
            <p className='text-center p-3 text-gray-300'>copyright reserved 2022 free thinkers</p>
        </Box>
    )
}

export default Footer