import { Box } from '@mantine/core'
import React from 'react'
import { FaBook } from 'react-icons/fa'

const Benefit = () => {
    const image = require("../assets/images/pic4.jpg");
    return (
        <>
            <Box className='grid grid-cols-1 md:grid-cols-2 gap-5 px-10 py-4'>
                <Box className='h-[100%] relative hidden md:block'>
                    <img src={image} alt="pic" className="absolute h-full w-full object-cover object-center" />
                </Box>
                <Box className='grid gap-5'>
                    <h2 className='uppercase text-blue-500 font-semibold'>Learn every Resource</h2>
                    <h1 className='text-3xl capitalize font-bold'>Benefit About online learning expertise</h1>
                    <ul className='grid gap-3'>
                        <div className='flex hover:bg-blue-500 text-gray-700 hover:text-white rounded-md shadow-sm bg-white gap-4 px-6 py-4 items-stretch'>
                            <FaBook className='text-9xl' />
                            <div className='grid gap-1'>
                                <h1 className='font-bold'>Online Courses</h1>
                                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsa commodi porro illo, incidunt fugit harum iure iste aperiam officiis eum hic, consequuntur, similique obcaecati tempora laborum in asperiores soluta!</p>
                            </div>
                        </div>
                        <div className='flex hover:bg-blue-500 text-gray-700 hover:text-white rounded-md shadow-sm bg-white gap-4 px-6 py-4 items-stretch'>
                            <FaBook className='text-9xl' />
                            <div className='grid gap-1'>
                                <h1 className='font-bold'>Online Courses</h1>
                                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsa commodi porro illo, incidunt fugit harum iure iste aperiam officiis eum hic, consequuntur, similique obcaecati tempora laborum in asperiores soluta!</p>
                            </div>
                        </div>
                        <div className='flex hover:bg-blue-500 text-gray-700 hover:text-white rounded-md shadow-sm bg-white gap-4 px-6 py-4 items-stretch'>
                            <FaBook className='text-9xl' />
                            <div className='grid gap-1'>
                                <h1 className='font-bold'>Online Courses</h1>
                                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ipsa commodi porro illo, incidunt fugit harum iure iste aperiam officiis eum hic, consequuntur, similique obcaecati tempora laborum in asperiores soluta!</p>
                            </div>
                        </div>
                    </ul>
                </Box>
            </Box>
        </>
    )
}

export default Benefit