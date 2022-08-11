import { Box } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'

const Phead = () => {
    return (
        <>
            <Box>
                <Box>
                    <Link to="/profile" className='text-xl font-bold'>
                        <div className='first-letter:text-blue-700  first-letter:text-3xl leading-[0.0rem]'>Thinkers<br /><span className='text-xs italic'>together as one</span></div>
                    </Link>
                </Box>
            </Box>
        </>
    )
}

export default Phead