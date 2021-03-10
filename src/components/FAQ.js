import React from 'react';
import { Container, Box, Text, Input, Button } from '@chakra-ui/react'

function FAQ() { 
    return ( 
        <Container maxWidth={1100} centerContent py={6}> 
            <Box w="100%" rounded="md" boxShadow='md' bg="white" p={4}> 
                <Text>This is FAQ page. Keep asking question...</Text>
                
                <Text my={4} fontWeight="600">Asy Your Question</Text>
                <Input type="text" placeholder="Your Question" /> 
                <Button colorScheme='teal' size="sm" mt={3}> 
                    Submit
                </Button>
            </Box> 
        </Container> 
    ) 
} 

export default FAQ;