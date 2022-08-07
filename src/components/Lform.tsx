import { Anchor, Box, Button, Input } from '@mantine/core'
import React from 'react'
import { FaCaretRight, FaEnvelope, FaFacebookF, FaGooglePlusG, FaLock, FaTwitter} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Lform = () => {
  return (
    <>
        <Box className='flex justify-center items-center m-10 h-[450px] shadow-2xl rounded-lg overflow-hidden'>
                <Box component='form' className='bg-white h-full w-full sm:w-[60%]  flex flex-col justify-center items-center gap-5'>
                    <h1 className='text-3xl font-bold'>Sign in</h1>
                    <ul className='flex gap-5'>
                        <Anchor className='h-6 w-6   rounded-full flex justify-center items-center'>
                            <FaFacebookF />
                        </Anchor>

                        <Anchor className='h-6 w-6   rounded-full flex justify-center items-center'>
                            <FaGooglePlusG />

                        </Anchor>
                        <Anchor className='h-6 w-6   rounded-full flex justify-center items-center'>
                            <FaTwitter />

                        </Anchor>
                    </ul>
                    <p>or use your email for registration</p>
                    
                    <Input type={'email'} icon={<FaEnvelope />} placeholder={"Email"} required />
                    <Input type={'password'} icon={<FaLock />} placeholder={"Password"} required/>
                    <input type={'submit'} value="SIGN IN" className='text-white bg-blue-700 py-2 px-6 rounded-3xl' />
                </Box>
                <Box className='bg-blue-800  h-full text-white text-center w-[40%] p-5 flex-col items-center justify-center gap-10 hidden sm:flex '>
                    <h1 className='text-3xl font-bold'>Hello,Friend!</h1>
                    <p className='text-white/70'>Enter your personal details and start the jourmey with us</p>
                    <Link to={"/signup/login"} >
                        <Button variant='outline' radius={20} className='right-0' rightIcon={<FaCaretRight />}>
                            SIGN IN
                        </Button>
                    </Link>
                </Box>
            </Box>
    </>
  )
}

export default Lform