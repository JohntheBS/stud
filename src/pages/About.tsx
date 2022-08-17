import { Box, Button, Container } from '@mantine/core';
import React from 'react';
import { FaTwitter } from 'react-icons/fa';
import Benefit from '../components/Benefit';

const About = () => {

  const imhUrl = require('../assets/images/about.jpg');
  return (
    <div>
      <Box component='section' className='my-4 '>
        <Box className='relative h-[350px] sm:h-[450px]'>
          <div className='h-full w-full bg-black/60 absolute text-center text-white flex flex-col justify-end items-center pb-24'>
            <h1 className='capitalize text-xl sm:text-4xl font-semibold'>Promoting The Growth of  Telecommunication</h1>
            <div className='flex m-4 gap-5'>
              <Button className='bg-white text-blue-500 hover:text-white'>Get a quote</Button>
              <Button className='bg-blue-500' rightIcon={<FaTwitter />}>Visit our socials</Button>
            </div>
          </div>
          <img src={imhUrl} alt="cover" className='w-full object-cover h-full' />
        </Box>
        <Container className='text-center text-sm'>
          <h1 className='mx-auto text-xl sm:text-3xl font-bold text-blue-500   w-40   pb-3 mb-6 text-center pt-5 uppercase'>About Us</h1>
          <p className='m-2 sm:m-4 md:m-8 font-mono leading-7'>At Thinkers. we all come to work every day bacause we want to solve problems faced by telecommunication student.
            <span className='font-extrabold'>Everyone is guessing.</span>Students don't know which resources to study,How to stufy them or even at which point to study them
            <span className='font-extrabold'> Futher more.</span> they don't know where to target their studies,How to reach them or even how much the need to spend in order to do so.
          </p>
          <p className='font-mono m-2 sm:m-4 md:m-8 p-4 leading-7'><span className='capitalize first-letter:text-xl first-letter:text-blue-500 text-blue-500 font-extrabold text-lg'>Our Mission</span> at Thinkers is to make studies for student more transparent.
            Today we provide the most reliable resources for telecommunication students in Cameroon.
            We want make our platform accessible to many people as possible {"(not just in our country)"}</p>
        </Container>
      </Box>
      <Benefit /> 
    </div>
  )
}

export default About