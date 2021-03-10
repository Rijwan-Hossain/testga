import React from 'react';
import {Container, Box, Text, Image} from '@chakra-ui/react'
import me2 from '../images/me2.jpg'

function Home() { 
    return ( 
    <Container maxWidth={1100} centerContent py={6} bg="#edf2f9" my={4}> 
            <Box w="100%" rounded="md" boxShadow='md' bg="white" p={8}> 
                <Text fontSize="3rem" fontFamily="monospace">
                    This is Md. Rijwan Hossain
                </Text> 
                <Image src={me2} alt="Rijwan Hossain" h="300px" />
            </Box> 
        </Container> 
    ) 
} 

export default Home;