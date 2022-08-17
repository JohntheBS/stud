import { Box } from '@mantine/core'
import { FaBook } from 'react-icons/fa';

const Recap = () => {
    const image = require("../assets/images/pic.jpg");
    const recaps=  [1,2,3,4]
  return (
    <>
        <Box className='relative h-44 hidden md:block '>
            <img src={image} alt="test" className='absolute h-full w-full object-cover' />
            <div className='h-full w-full z-10 bg-black/50 absolute text-gray-300 grid grid-cols-4 justify-around '>
                {recaps.map(recap=>{
                    return(
                        <div className='flex items-center gap-2 justify-center'>
                            <div><FaBook className='text-3xl md:text-6xl' /></div>
                            <div className='text-xl md:text-3xl'>
                                <h1>3,000</h1>
                                <p className='uppercase text-xs md:text-xl py-1'>success stories</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Box>
    </>
  )
}

export default Recap