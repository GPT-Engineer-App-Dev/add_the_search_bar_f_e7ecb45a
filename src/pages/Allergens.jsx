import React from 'react';
import { Box, Button, Container, Flex, Heading, Input, InputGroup, InputLeftElement, Icon, List, ListItem, Text } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import Navigation from '../components/Navigation';

const Allergens = () => (
  <Flex h="100vh">
    <Navigation />
    <Container maxW="container.xl" p={4}>
      <Heading as="h1" size="lg" mb={4}>Allergens</Heading>
      <InputGroup mb={4}>
        <InputLeftElement pointerEvents='none' children={<Icon as={FaSearch} />} />
        <Input placeholder='Search allergens...' />
      </InputGroup>
      <List spacing={3}>
        {/* Example list items can be added here */}
      </List>
    </Container>
  </Flex>
);

export default Allergens;