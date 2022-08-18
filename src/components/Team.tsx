import { Anchor, Box, Button, Container } from '@mantine/core'
import React from 'react'
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Team = () => {
  const image = require("../assets/images/team1.jpg")
  let teams = [
    {
      id:1,
      name:"Youkep Tchinde",
      role:"Dvelopper and lead instructor"
    },
    {
      id:2,
      name:"Youkep Tchinde",
      role:"Dvelopper and lead instructor"
    },
    {
      id:3,
      name:"Youkep Tchinde",
      role:"Dvelopper and lead instructor"
    },
  ]

  // const displayIc = (e:any) => {
  //   e.target.style.display = "block";
  // }
  return (
    <>
      <Box component='section' className='m-4'>
        <h1 className=' mx-auto text-center text-2xl font-bold  text-blue-500 uppercase my-10 w-40 '>Our Team</h1>
      </Box>
      <Box>
        <Container className='flex justify-center gap-10 md:gap-20 flex-wrap'>
          {teams.map(member => {
            return (

              <Box className='bg-white h-96 w-72 shadow-sm hover:scale-110 my-8' key={member.id}>
                <div className='relative h-[70%]'>
                  <img src={image} alt="work" className='absolute h-[100%] w-[100%] object-cover object-center' />
                  <div className='hover:bg-blue-500/20 h-[100%] w-[100%] absolute py-10 p-4' >
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
                  <h1 className='font-bold text-lg'>{member.name}</h1>
                  <h2 className='uppercase'>{member.role}</h2>
                  <Button variant='outline' size='xs' className='hover:text-white hover:outline-white'>Contact him</Button>
                </div>

              </Box>
            )
          })}
        </Container>
      </Box>
    </>
  )
}

export default Team