import { Box, Button, Container } from '@mantine/core'
import { FaBook } from 'react-icons/fa';

const Books = () => {
    const books = [1, 2, 3, 4, 5, 6, 7, 8, 9,10]
    return (
        <>
            <Box className='m-4'>
                <h1 className='text-center text-blue-500 font-bold text-2xl p-2 mb-4  w-40 mx-auto'>BOOKS</h1>
                <Box className=''>
                    <Container className='flex justify-center gap-4 md:gap-10 flex-wrap'>
                    {books.map(book => {
                        return (
                            <Box className='grid gap-4 p-2 md:py-4 justify-center rounded-sm items-center hover:scale-105  bg-white shadow-md text-center'>
                                <FaBook className='mx-auto text-blue-500 text-4xl ' />
                                <h2 className='uppercase text-gray-600 text-sm md:text-md'>Switching Networks</h2>
                                <Button variant='outline' size='xs'>25 Books</Button>
                            </Box>
                        )
                    })}
                    </Container>
                </Box>
            </Box>
        </>
    )
}

export default Books