import React from 'react';
import { Box, Button, Container, Flex, Heading, Input, InputGroup, InputLeftElement, Icon, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import Navigation from '../components/Navigation';

const Modifiers = () => (
  <Flex h="100vh">
    <Navigation />
    <Box flex="1" p={4}>
      <Heading as="h1" size="lg" mb={4}>Modifiers</Heading>
      <InputGroup mb={4}>
        <InputLeftElement pointerEvents='none' children={<Icon as={FaSearch} />} />
        <Input placeholder='Search modifiers...' />
      </InputGroup>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Type</Th>
            <Th>Associated Products</Th>
            <Th>Status</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {/* Example table rows can be added here */}
        </Tbody>
      </Table>
    </Box>
  </Flex>
);

export default Modifiers;