import { Box, Container, Input, Textarea } from '@mantine/core'
import React from 'react'
import { FaMailBulk, FaPhone } from 'react-icons/fa'

const Contactform = () => {
    return (
        <>
            <Box component='section' className='my-4 bg-blue-500 text-white p-4'>
                <h1 className='text-center font-bold p-4 text-lg sm:text-4xl'>Message Us</h1>
                <Box className='grid md:grid-cols-2  justify-evenly gap-5 items-center flex-wrap'>
                    <Box component='form' className='flex flex-col justify-center items-center text-center'>
                        <Container className='grid justify-center items-center gap-4'>
                            <div className='text-center'><FaPhone className='h-8 w-8 mx-auto' /></div>
                            <p className='font-semibold'>talk to us</p>
                            <p>Interested in Thinkers group ? just pick up the phone to chat with a member of our team</p>
                            <div>+237 657 443 611</div>
                            <p>view all globals numbers</p>
                        </Container>
                    </Box>
                    <Box component='form'>
                        <Container className='grid justify-center items-center gap-4 '>
                            <div><FaMailBulk className='h-10 w-10 mx-auto' /></div>
                            <div className='flex gap-6'>
                                <Input placeholder='First Name' type={'text'} className="" />
                                <Input placeholder='Last  Name' type={'text'} className="" />
                            </div>
                            <Input type={'email'} placeholder="Email" required className='w-full' />
                            <Textarea className='w-full' placeholder='Type message Here....' />
                            <input type={"submit"} placeholder="SEND" className='text-white bg-gradient-to-r from-blue-800 to-blue-400 p-2 rounded-3xl mx-auto w-[180px]' />
                        </Container>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Contactform