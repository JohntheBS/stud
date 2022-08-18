import { Box, Button } from '@mantine/core'
import React from 'react'
import { FaArrowDown, FaBook, FaCalendarAlt, FaUniversity } from 'react-icons/fa'

const Benefit = () => {
    const image = require("../assets/images/img_workshop.jpg");
    const benefits = [
        {
            id: 1,
            title: "Online Courses",
            contents: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsa commodi porro illo, incidunt fugit harum iure iste aperiam officiis eum hic, consequuntur, similique obcaecati tempora laborum in asperiores soluta!",
            icon: <FaBook className='text-5xl' />
        },
        {
            id: 2,
            title: "Online Courses",
            contents: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsa commodi porro illo, incidunt fugit harum iure iste aperiam officiis eum hic, consequuntur, similique obcaecati tempora laborum in asperiores soluta!",
            icon: <FaUniversity className='text-5xl' />
        },
        {
            id: 3,
            title: "Online Courses",
            contents: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsa commodi porro illo, incidunt fugit harum iure iste aperiam officiis eum hic, consequuntur, similique obcaecati tempora laborum in asperiores soluta!",
            icon: <FaCalendarAlt className='text-5xl' />
        }
    ]
    return (
        <>
            <Box className='grid grid-cols-1 md:grid-cols-2 gap-5 px-10 py-10'>
                <Box className='h-[100%] relative hidden md:block text-white'>
                    <img src={image} alt="pic" className="absolute h-full w-full object-cover object-center" />
                    <div className='bg-black/50 h-full w-full z-10 absolute'>
                        <div className='grid mx-auto items-center justify-center gap-4 mt-96'>
                            <div className='text-center mx-auto'>
                                <FaArrowDown  className='text-xl animate-bounce'/>
                            </div>
                            <Button className='flex gap-2 items-center bg-blue-500 text-white'>
                                <p>view more benefits </p>
                            </Button>
                        </div>
                    </div>
                </Box>
                <Box className='grid gap-5 mx-2 my-6'>
                    <h2 className='uppercase text-blue-500 font-semibold'>Learn every Resource</h2>
                    <h1 className='text-3xl capitalize font-bold'>Benefit About online learning expertise</h1>
                    <ul className='grid gap-5'>
                        {benefits.map(benefit => {
                            return (
                                <div key={benefit.id} className=' hover:bg-blue-500 text-gray-700 hover:text-white rounded-md shadow-sm bg-white  px-6 py-4 '>
                                    <div className='flex items-center gap-4'>
                                        <p>{benefit.icon}</p>
                                        <div className='grid gap-1'>
                                            <h1 className='font-bold'>{benefit.title}</h1>
                                            <p className=''>{benefit.contents}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </ul>
                </Box>
            </Box>
        </>
    )
}

export default Benefit