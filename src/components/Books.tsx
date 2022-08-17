import { Box, Button } from '@mantine/core'
import { FaBook } from 'react-icons/fa';

const Books = () => {
    const books = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    return (
        <>
            <Box className='mx-auto px-5 md:px-20 p-5'>
                <h1 className='text-center text-blue-500 font-bold text-2xl p-2 mb-4  w-40 mx-auto'>BOOKS</h1>
                <Box className='grid grid-cols-3 md:grid-cols-6 gap-5'>
                    {books.map(book => {
                        return (
                            <Box className='grid gap-4 p-2 md:py-4 justify-center rounded-sm items-center hover:scale-105  bg-white shadow-md text-center'>
                                <FaBook className='mx-auto text-blue-500 text-4xl ' />
                                <h2 className='uppercase text-gray-600 text-sm md:text-md'>Switching Networks</h2>
                                <Button variant='outline' size='xs'>25 Books</Button>
                            </Box>
                        )
                    })}

                </Box>
            </Box>
        </>
    )
}

export default Books