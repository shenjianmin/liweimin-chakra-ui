import React from "react";
import { Box, useColorModeValue, Flex } from '@chakra-ui/core'
import Form from './Form'

function App() {
  const bgColor = useColorModeValue('#F1F1F1', 'black')

  const contentBox = {
    pos: 'position',
    mt:'7%',
    m: '0 auto',
  }

  return (
    <Box w="100vw" h="100vh" bgColor={bgColor}>
      <Flex>
        <Box {...contentBox}>
          <Form />
        </Box>
      </Flex>
    </Box>
  );
}

export default App;
