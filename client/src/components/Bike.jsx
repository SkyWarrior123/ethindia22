import {Button, Box, Image, Text, Stack } from '@chakra-ui/react';
import { useContext } from 'react'
import { BlockchainContext } from '../context/BlockchainContext'


const Bike = ({ Bike }) => {
  const { checkOut, checkIn } = useContext(BlockchainContext)
    return (
        <Box boxSize='lg' mx={2}> 
            <Image src = {Bike} />
            <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
            <Stack spacing={0} direction={'row'} align={'center'} justify={'center'} mt={5}>
            <Button
              onClick={checkOut}
              m={2}
              fontSize={'small'}
              fontWeight={600}
              color={'white'}  
              bg={'purple.500'}
              _hover={{
                bg: 'purple.300',
              }}>
              Check Out
            </Button>
            <Button
              onClick={checkIn}
              m={2}
              fontSize={'small'}
              fontWeight={600}
              color={'white'} 
              bg={'purple.500'}
              _hover={{
                bg: 'purple.300',
              }}>
              Check In
            </Button>

            </Stack>
        </Box>
    )
}

export default Bike