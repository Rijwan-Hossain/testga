import React, {useState, useEffect} from 'react';
import { Container, Box, Text, Flex, List, ListItem, Link } from '@chakra-ui/react'
import axios from 'axios' 

function Product() { 
    const [users, setUsers] = useState([]) 

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users') 
        .then(res => setUsers(res.data)) 
        .catch(err => console.log(err))
    }, []) 
    return ( 
        <Container maxWidth={1100} centerContent py={6}> 
            <Box w="100%" rounded="xl" boxShadow='xl' bg="white" p={4}> 
                <List>
                {
                    users?.map((user, i) => (
                        <Box m={4} p={6} bg="#edf2f9" key={i}>
                            <Flex>
                                <Text w="100px">Name:</Text> &nbsp;
                                <Text>{user.name}</Text> 
                            </Flex>
                            <Flex>
                                <Text w="100px">Email:</Text> &nbsp;
                                <Text>{user.email}</Text> 
                            </Flex>
                            <Flex>
                                <Text w="100px">Phone:</Text> &nbsp;
                                <Text>{user.phone}</Text> 
                            </Flex> 
                            <Flex>
                                <Text w="100px">Website:</Text> &nbsp;
                                <Link href={'https://www.' + user.website} color="teal.500"> 
                                    {user.website} 
                                </Link> 
                            </Flex> 

                        </Box>
                    ))
                }
                </List>
            </Box> 
        </Container> 
    ) 
} 

export default Product;