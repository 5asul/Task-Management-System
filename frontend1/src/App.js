import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import Home from './pages/Home';

function App() {
  return (
    <Box p={4}>
      <Heading textAlign="center" mb={6}>Task Manager</Heading>
      <Home />
    </Box>
  );
}

export default App;
