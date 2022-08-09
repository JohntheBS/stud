import { Anchor, Box, Button, Input } from '@mantine/core'
import React from 'react'
import { FaCaretRight, FaEnvelope, FaFacebookF, FaGooglePlusG, FaLock, FaTwitter} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

const Lform = () => {
    const navigate = useNavigate();
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    const user = {email:email,password:password}
    const onSubmit =(e:any)=>{
        e.preventDefault();
        const Email = e.target.email.value;
        const Password = e.target.password.value;
        if(Email === user.email && Password === user.password){
            localStorage.setItem('state','true')
           navigate("/profile");
        }
    }
    
  return (
    <>
        <Box className='flex justify-center items-center m-10 h-[450px] shadow-2xl rounded-lg overflow-hidden'>
                <Box component='form' onSubmit={onSubmit} className='bg-white h-full w-full sm:w-[60%]  flex flex-col justify-center items-center gap-5'>
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
                    
                    <Input type={'email'} icon={<FaEnvelope />} placeholder={"Email"} required name='email'/>
                    <Input type={'password'} icon={<FaLock />} placeholder={"Password"} required name='password'/>
                    <input type={'submit'} value="SIGN IN" className='text-white bg-gradient-to-r from-blue-700 to-blue-500 py-2 px-6 rounded-3xl' />
                </Box>
                <Box className='bg-gradient-to-r from-blue-800 to-blue-500  h-full text-white text-center w-[40%] p-5 flex-col items-center justify-center gap-10 hidden sm:flex '>
                    <h1 className='text-3xl font-bold'>Hello,Friend!</h1>
                    <p className='text-white/70'>Enter your personal details and start the jourmey with us</p>
                    <Link to={"/signup"} >
                        <Button variant='outline' radius={20} className='right-0' rightIcon={<FaCaretRight />}>
                            SIGN UP
                        </Button>
                    </Link>
                </Box>
            </Box>
    </>
  )
}

export default Lform