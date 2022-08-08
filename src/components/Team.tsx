import { Anchor, Box } from '@mantine/core'
import React from 'react'
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Team = () => {
  const image = require("../assets/images/pic.jpg")
  return (
    <>
      <Box component='section' className='m-4'>
        <h1 className=' mx-auto text-center text-2xl font-bold border-b-4 border-blue-500 pb-2 w-40 '>Our Team</h1>
      </Box>
      <Box className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 m-10 gap-10'>
        <Box className='flex flex-col gap-2 items-center justify-center bg-white shadow-xl p-4 pb-6 rounded-lg hover:scale-110 text-sm lg:text-md transition-transform'>
          <img src={image} alt="test" className='rounded-full h-36 w-36 lg:w-44 lg:h-44 ' />
          <h1 className='font-bold'>JEFFREY BROWN</h1>
          <h4 className='text-blue-500'>creative leader</h4>
          <p className='text-center'>Jeffrey is one of our main creative leaders, full of advices and Innovative ideas, contact him</p>
          <ul className='flex gap-2'>
            <Anchor className='h-6 w-6   rounded-full flex justify-center items-center'>
              <FaFacebookF />
            </Anchor>

            <Anchor className='h-6 w-6   rounded-full flex justify-center items-center'>
              <FaGooglePlusG />

            </Anchor>
            <Anchor className='h-6 w-6   rounded-full flex justify-center items-center'>
              <FaTwitter />
            </Anchor>
            <Anchor className='h-6 w-6   rounded-full flex justify-center items-center'>
              <FaLinkedinIn />
            </Anchor>
          </ul>
        </Box>
        <Box className='flex flex-col gap-2 items-center justify-center bg-white shadow-xl p-4 pb-6 rounded-lg hover:scale-110 text-sm lg:text-md transition-transform'>
          <img src={image} alt="test" className='rounded-full h-36 w-36 lg:w-44 lg:h-44 ' />
          <h1 className='font-bold'>JEFFREY BROWN</h1>
          <h4 className='text-blue-500'>creative leader</h4>
          <p className='text-center'>Jeffrey is one of our main creative leaders, full of advices and Innovative ideas, contact him</p>
          <ul className='flex gap-2'>
            <Anchor className='h-6 w-6   rounded-full flex justify-center items-center'>
              <FaFacebookF />
            </Anchor>

            <Anchor className='h-6 w-6   rounded-full flex justify-center items-center'>
              <FaGooglePlusG />

            </Anchor>
            <Anchor className='h-6 w-6   rounded-full flex justify-center items-center'>
              <FaTwitter />
            </Anchor>
            <Anchor className='h-6 w-6   rounded-full flex justify-center items-center'>
              <FaLinkedinIn />
            </Anchor>
          </ul>
        </Box>
        <Box className='flex flex-col gap-2 items-center justify-center bg-white shadow-xl p-4 pb-6 rounded-lg hover:scale-110 text-sm lg:text-md transition-transform'>
          <img src={image} alt="test" className='rounded-full h-36 w-36 lg:w-44 lg:h-44 ' />
          <h1 className='font-bold'>JEFFREY BROWN</h1>
          <h4 className='text-blue-500'>creative leader</h4>
          <p className='text-center'>Jeffrey is one of our main creative leaders, full of advices and Innovative ideas, contact him</p>
          <ul className='flex gap-2'>
            <Anchor className='h-6 w-6   rounded-full flex justify-center items-center'>
              <FaFacebookF />
            </Anchor>

            <Anchor className='h-6 w-6   rounded-full flex justify-center items-center'>
              <FaGooglePlusG />

            </Anchor>
            <Anchor className='h-6 w-6   rounded-full flex justify-center items-center'>
              <FaTwitter />
            </Anchor>
            <Anchor className='h-6 w-6   rounded-full flex justify-center items-center'>
              <FaLinkedinIn />
            </Anchor>
          </ul>
        </Box>
        <Box className='flex flex-col gap-2 items-center justify-center bg-white shadow-xl p-4 pb-6 rounded-lg hover:scale-110 text-sm lg:text-md transition-transform'>
          <img src={image} alt="test" className='rounded-full h-36 w-36 lg:w-44 lg:h-44 ' />
          <h1 className='font-bold'>JEFFREY BROWN</h1>
          <h4 className='text-blue-500'>creative leader</h4>
          <p className='text-center'>Jeffrey is one of our main creative leaders, full of advices and Innovative ideas, contact him</p>
          <ul className='flex gap-2'>
            <Anchor className='h-6 w-6   rounded-full flex justify-center items-center'>
              <FaFacebookF />
            </Anchor>

            <Anchor className='h-6 w-6   rounded-full flex justify-center items-center'>
              <FaGooglePlusG />

            </Anchor>
            <Anchor className='h-6 w-6   rounded-full flex justify-center items-center'>
              <FaTwitter />
            </Anchor>
            <Anchor className='h-6 w-6   rounded-full flex justify-center items-center'>
              <FaLinkedinIn />
            </Anchor>
          </ul>
        </Box>
        
        
      </Box>
    </>
  )
}

export default Team