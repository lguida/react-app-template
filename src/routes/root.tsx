import { Heading, HStack, Box } from "@chakra-ui/react";

export function Root() {
    return (
      <Box w='100%' h='15%' bg='tomato' color='white'>
        <Heading as='h1' my='15px' mx='20px'>Family Photos Tree App</Heading>
        <HStack spacing='24px' justifyContent='center'>
            <Box>Search</Box>
            <Box>Tree</Box>
            <Box>Settings</Box>
        </HStack>
      </Box> 
    );
  }