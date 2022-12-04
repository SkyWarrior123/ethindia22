import {
    Box,
    chakra,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactNode, useContext } from 'react';
  import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
  import { RiMoneyDollarCircleFill } from 'react-icons/ri';
  import { AiOutlineClockCircle } from 'react-icons/ai';
  import PayForm from './PayForm';
  import AddToBalanceForm from './AddToBalanceForm';
  import { BlockchainContext } from '../context/BlockchainContext';
  import toaster  from 'toastify-react';

  
  function StatsCard(props) {
    const { title, stat, icon, bgColor } = props;
    return (
      <Stat
        px={{ base: 2, md: 4 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        rounded={'lg'}
        backgroundColor={bgColor}>
        <Flex justifyContent={'space-between'}>
          <Box pl={{ base: 2, md: 4 }}>
            <StatLabel fontWeight={'medium'} >
              {title}
            </StatLabel>
            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
              {stat}
            </StatNumber>
          </Box>
          <Box
            my={'auto'}
            color={useColorModeValue('gray.800', 'gray.200')}
            alignContent={'center'}>
            {icon}
          </Box>
        </Flex>
      </Stat>
    );
  }
  
  export default function CurrentTotal() {
    const {renterBalance, due, duration, renter} = useContext(BlockchainContext)
    return (
      <>
      <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <chakra.h1
          textAlign={'center'}
          fontSize={'4xl'}
          py={10}
          fontWeight={'bold'}>
           Hey Welcome ! Here's ur Dashboard!
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard
            title={'Matic Credit'}
            stat={renterBalance}
            icon={<MdOutlineAccountBalanceWallet size={'3em'} />}
          />
          <StatsCard
            title={'Matic Due'}
            stat={due}
            icon={<RiMoneyDollarCircleFill size={'3em'} />}
          />
          <StatsCard
            title={'Time Ride'}
            stat={duration}
            icon={<AiOutlineClockCircle size={'3em'} />}
          />
          <StatsCard
            title={'Ride Status'}
            bgColor={ renter && renter.active ? 'green' : 'red' }
          />
        </SimpleGrid>
        <Flex justifyContent={'center'} alignItems={'center'}>
            <AddToBalanceForm />
            <PayForm />    
        </Flex>
      </Box>
      </>
    );
  }