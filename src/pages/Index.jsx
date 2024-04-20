import React from 'react';
import { Box, Button, Container, Flex, Heading, Input, InputGroup, InputLeftElement, Icon } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import Navigation from '../components/Navigation';

const Index = () => (
  <Flex h="100vh">
    <Navigation />
    <Container maxW="container.xl" p={4}>
      <Box mb={4}>
        <Heading as="h1" size="lg" mb={4}>Menus</Heading>
        <InputGroup>
          <InputLeftElement pointerEvents='none' children={<Icon as={FaSearch} />} />
          <Input placeholder='Search menus...' />
        </InputGroup>
      </Box>
    </Container>
  </Flex>
);

export default Index;