import { Box, Input } from '@mantine/core'

const Newsletter = () => {
  return (
    <>
        <Box className='bg-blue-500 text-white grid grid-cols-1 md:grid-cols-2 gap-6 items-center px-20 py-10'>
            <Box>
                <h1 className='text-3xl capitalize'>Newsletter - Stay tune and get latest update</h1>
                <p>Developping the world of telecommunication</p>
            </Box>
            <Box>
                <Input  type={"email"} placeholder="Enter Email Adress" radius={'xs'}  />
            </Box>
        </Box>
    </>
  )
}

export default Newsletter