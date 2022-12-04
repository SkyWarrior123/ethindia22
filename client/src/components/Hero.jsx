import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
    let navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path);
    }
  return (
      <Container >
        <Stack
          as={Box}
          // w="100vw"
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Rent your next bike <br />
            <Text as={'span'} color={'purple.400'}>
              with Polygon!
            </Text>
          </Heading>
          <Text color={'black.500'}>
             Trustless Protocol || Rent at no cost up front || 100% Risk Free
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              onClick={() => handleClick('dashboard')}
              colorScheme={'purple'}
              bg={'purple.400'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'purple.500',
              }}>
              Choose My Bike
            </Button>
            <Box>
            </Box>
          </Stack>
        </Stack>
      </Container>
  );
}

