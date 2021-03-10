import React from 'react';
import {
    Box, Flex, Text, List, ListItem,
} from '@chakra-ui/react'
import { Link, useRouteMatch, useLocation } from 'react-router-dom'

function Header() { 
    const location = useLocation().pathname 
    
    return (
        <Box px={10} bg="#2D3748" h="60px" lineHeight="60px" color="white">
            <Flex> 
                <Box> 
                    <Text>Brand</Text> 
                </Box> 
                <List ml="auto"> 
                    <Flex alignItems="flex-end"> 
                        <ListItem w="100px" textAlign="center" 
                            color={location === '/' && 'orange.200'} 
                            _hover={{color: 'orange.300'}}
                        > 
                            <Link to="/">
                                Home 
                            </Link>
                        </ListItem> 
                        <ListItem w="100px" textAlign="center"
                        color={location === '/product' && 'orange.200'} 
                        _hover={{color: 'orange.300'}} 
                        > 
                            <Link to="/users">
                                Users 
                            </Link>
                        </ListItem> 
                        <ListItem w="100px" textAlign="center"
                        color={location === '/faq' && 'orange.200'} 
                        _hover={{color: 'orange.300'}} 
                        > 
                            <Link to="/faq">
                                FAQ 
                            </Link>
                        </ListItem> 
                    </Flex> 
                </List> 
            </Flex>
        </Box>
    )
}

export default Header;