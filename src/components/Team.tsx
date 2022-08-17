import { Anchor, Box, Button } from '@mantine/core'
import React from 'react'
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Team = () => {
  const image = require("../assets/images/pic.jpg")
  let array = [1, 2, 3, 4]
  // const displayIc = (e:any) => {
  //   e.target.style.display = "block";
  // }
  return (
    <>
      <Box component='section' className='m-4'>
        <h1 className=' mx-auto text-center text-2xl font-bold  text-blue-500 uppercase my-10 w-40 '>Our Team</h1>
      </Box>
      <Box className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 m-10 gap-5'>
      {array.map(e => {
        return (
          
            <Box className='bg-white h-96 w-72 shadow-sm hover:scale-110'>
              <div className='relative h-[70%]'>
                <img src={image} alt="work" className='absolute h-[100%] w-[100%]' />
                <div className='hover:bg-blue-500/20 h-[100%] w-[100%] absolute py-10 p-4 hidden' >
                  <ul className="flex flex-col gap-4 ">
                    <Anchor className='h-8 w-8 bg-black hover:bg-blue-500 text-white rounded-full flex justify-center items-center'>
                      <FaFacebookF />
                    </Anchor>

                    <Anchor className='h-8 w-8 bg-black hover:bg-blue-500 text-white rounded-full flex justify-center items-center'>
                      <FaGooglePlusG />

                    </Anchor>
                    <Anchor className='h-8 w-8 bg-black hover:bg-blue-500 text-white rounded-full flex justify-center items-center'>
                      <FaTwitter />

                    </Anchor>

                    <Anchor className='h-8 w-8 bg-black hover:bg-blue-500 text-white rounded-full flex justify-center items-center'>
                      <FaLinkedinIn />
                    </Anchor>
                  </ul>
                </div>
              </div>
              <div className='h-[30%] text-center flex gap-1 items-center justify-center flex-col hover:text-white hover:bg-blue-500'>
                <h1 className='font-bold text-lg'>Adrian Molises</h1>
                <h2 className='uppercase'>Dvelopper and lead instructor</h2>
                <Button variant='outline' size='xs' className='hover:text-white hover:outline-white'>Contact him</Button>
              </div>

            </Box>
        )
      })}
      </Box>
    </>
  )
}

export default Team