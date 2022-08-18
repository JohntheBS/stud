import { Box, Button, Container } from '@mantine/core'
import React from 'react'
import { FaBook, FaStar } from 'react-icons/fa'

const Books = () => {
  const course = [1, 2, 3, 4, 5, 6]
  const image = require("../assets/images/pic.jpg");
  return (
    <>
      <h1 className='text-center text-2xl font-bold  uppercase text-blue-500  w-40 mx-auto pt-4'>Courses</h1>
      <Box className='m-4'>
        <Container className='flex gap-10 flex-wrap justify-center'>
          {course.map(e => {
            return (
              <Box className='bg-white shadow-lg grid p-2 md:p-4 gap-5 text-center hover:scale-105'>
                <div className='flex gap-1 sm:gap-3 items-center'>
                  <div className='bg-blue-500 text-white rounded-full p-3'>

                    <FaBook className='text-xl sm:text-2xl md:text-3xl' />
                  </div>
                  <h1 className='text-lg md:text-2xl font-bold'>Switching Networks</h1>
                </div>
                <div>
                  <ul className='sm:flex items-center justify-center gap-2 hidden'>
                    <FaStar className='text-blue-500' />
                    <FaStar className='text-blue-500' />
                    <FaStar className='text-blue-500' />
                    <FaStar className='text-blue-500' />
                    <FaStar className='text-blue-500' />
                    <p>{"(5.0)"}</p>
                  </ul>
                </div>
                <div className='flex mx-auto items-center gap-2'>
                  <img src={image} alt="pic" className="h-8 w-8 md:h-12 md:w-12 rounded-full" />
                  <p>By price</p>
                </div>
                <div className='bg-gray-100 py-2 px-1 text-center text-sm'>5000   All course / 500 per Months </div>
                <Button variant='outline' className="hover:bg-blue-500 hover:text-white ">Enroll Now !

                </Button>
              </Box>
            )
          })}

        </Container>
      </Box>
    </>
  )
}

export default Books