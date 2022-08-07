import { Box, Container, Input, Textarea } from '@mantine/core'
import React from 'react'

const Contactform = () => {
  return (
    <>
        <Box component='section' className='my-4 bg-blue-500 text-white'>
            <h1 className='text-center font-bold p-4 text-lg sm:text-2xl'>Message Us</h1>
            <Box component='form'>
                <Container className='flex flex-col justify-center items-center gap-4  px-10 sm:px-32 md:px-64 lg:px-72 py-10'>
                    <div className='flex gap-6'>
                        <Input placeholder='First Name' type={'text'} />
                        <Input placeholder='Last  Name' type={'text'} />
                    </div>
                    <Input type={'email'} placeholder="Email" required className='w-full' />
                    <Textarea className='w-full' placeholder='Type message Here....' />
                    <Input type={"submit"} placeholder="SEND" className='text-blue-500 bg-white rounded-xl' />
                </Container>
            </Box>
        </Box>
    </>
  )
}

export default Contactform