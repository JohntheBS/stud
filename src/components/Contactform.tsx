import { Box, Container, Input, Textarea } from '@mantine/core'
import React from 'react'

const Contactform = () => {
    const image = require('../assets/images/location.PNG');
    return (
        <>
            <Box component='section' className='my-10'>
                <Container className='grid grid-cols-1 md:grid-cols-2 bg-white shadow-md gap-5 px-0'>
                    <Box>
                        <img src={image} alt="location" className='h-full w-full object-fill' />
                    </Box>
                    <Box className='grid gap-5 p-10 py-16'>
                        <h1 className='text-xl font-bold'>Contact us</h1>
                        <p>We are open for any suggestion or just to have chat</p>
                        <div className='flex flex-wrap gap-2 text-sm items-center justify-evenly'>
                            <div className='text-justify'>
                                <h1 className='font-bold'>ADDRESS:</h1>
                                <p className=''>Molyko,Buea,Cameroon</p>
                            </div>
                            <div>
                                <h1 className='font-bold'>EMAIL:</h1>
                                <p>thinkers@gmail.com</p>
                            </div>
                            <div>
                                <h1 className='font-bold'>PHONE:</h1>
                                <p>+237 657 443 611</p>
                            </div>
                        </div>
                        <Box component='form' className='grid gap-4'>
                            <div className='grid grid-cols-2 gap-4'>
                                <Input type={"text"} placeholder="Name" radius={"xs"} />
                                <Input type={"email"} placeholder="Email" radius={"xs"} />
                            </div>
                            <Input type={"text"} placeholder="Subject" radius={"xs"} />
                            <Textarea placeholder='Create a message Here....' cols={5}></Textarea>
                            <input type="submit" value='SEND MESSAGE' className='text-white bg-blue-500 w-40 text-sm p-2 mt-4' />
                        </Box>

                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Contactform