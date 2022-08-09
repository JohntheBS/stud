import { Anchor, Box, Button, Input } from '@mantine/core'
import React from 'react'
import { FaCaretRight, FaEnvelope, FaFacebookF, FaGooglePlusG, FaLock, FaTwitter, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

const Sform = () => {
    
    const navigate = useNavigate();
    const onSubmit = (e:any)=>{
        e.preventDefault();
        const U_name = e.target.name.value;
        const U_email = e.target.email.value;
        const U_password = e.target.password.value;
        
        localStorage.setItem("id",'1');
        localStorage.setItem('user_name',U_name);
        localStorage.setItem('user_emai',U_email);
        localStorage.setItem('user_password',U_password);
        localStorage.setItem('state',"true");
        navigate("/profile")
    }

    return (
        <>
            <Box className='flex justify-center items-center m-10 h-[450px] shadow-2xl rounded-lg overflow-hidden'>
                <Box className='bg-gradient-to-r from-blue-800 to-blue-500 h-full text-white text-center w-[40%] p-5 flex-col items-center justify-center gap-10 hidden sm:flex '>
                    <h1 className='text-3xl font-bold'>Welcome Back!</h1>
                    <p className='text-white/70'>to keep connected with us please login with your personal info</p>
                    <Link to={"/signup/login"} >
                        <Button variant='outline' radius={20} className='right-0' rightIcon={<FaCaretRight />}>
                            SIGN IN
                        </Button>
                    </Link>
                </Box>
                <Box component='form' onSubmit={onSubmit} className='bg-white h-full w-full sm:w-[60%]  flex flex-col justify-center items-center gap-5'>
                    <h1 className='text-3xl font-bold'>Create Account</h1>
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
                    <Input type={'text'} icon={<FaUser />} placeholder={"Name"} required name='name' />
                    <Input type={'email'} icon={<FaEnvelope />} placeholder={"Email"} required name='email' />
                    <Input type={'password'} icon={<FaLock />} placeholder={"Password"} required name='password' />
                    <div className='flex items-center gap-2'>
                        <input type="checkbox" required name='check' /><Link to="/termsandconditions" className='text-sm hover:text-blue-500 hover:underline' >I agree to the therms and conditions</Link>
                    </div>
                    <input type={'submit'} value="SIGN UP" className='text-white bg-gradient-to-r cursor-pointer from-blue-700 to-blue-500 py-2 px-6 rounded-3xl' />
                </Box>
            </Box>
        </>
    )
}

export default Sform