import { Box } from '@mantine/core'
import React from 'react'

const Testomonial = () => {
    const image = require("../assets/images/pic.jpg");
    const student = [1, 2, 3];
    return (
        <>
            <Box className='mx-5 md:mx-20 my-10 grid gap-2'>
                <h2 className='text-center text-blue-500 font-semibold'>TESTIMONIAL</h2>
                <h1 className='text-center text-3xl font-bold capitalize'>Our successful students</h1>
                <Box className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    {student.map(e => {
                        return (
                            <div className='bg-white grid gap-2 shadow-sm p-5 hover:scale-105'>
                                <div className='flex items-center gap-2'>
                                    <div className='rounded-full relative h-16 w-16'>
                                        <img src={image} alt="pic" className='absolute rounded-full h-full w-full' />
                                        <div className='absolute z-10 bg-blue-500 text-white  h-6 w-6  -right-2 rounded-full font-serif text-center text-5xl '><p>,,</p></div>
                                    </div>
                                    <div className='font-semibold'>
                                        <h1>ROGER SCOTT</h1>
                                        <h2 className='text-sm'>TELECOMMUNICATION ENGINNEER</h2>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, quo. Enim reprehenderit officia deleniti</p>
                            </div>
                        )
                    })}

                </Box>
            </Box>
        </>
    )
}

export default Testomonial