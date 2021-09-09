import React from 'react'
import { Flex, Text, VStack,Button, Stack, Center, Image, Heading, Avatar, Box, fromBox } from "@chakra-ui/react";
import './card.css';
import pixel from '../../../images/pixel.jpg';

const Card = () => {
    return (
        <div>
            <Box width="359px" borderRadius="13px" className="card" height="479px" bg="#3F5B78" marginLeft="20px" marginTop="30px" marginBottom="20px">
                <VStack>
                    <Box className="card1" height="240px" width="359px">
                        <VStack>
                            <Flex flexDirection="column" color="#F2F2F2" marginTop="120px" marginRight="100px">
                                <Text color="#000" fontSize="17px">DATE : 27/11/2018</Text>
                                <Text color="#000" fontSize="17px">TIME : 11:00 AM to 12:09 PM</Text>
                                <Text color="#000" fontSize="17px">AUDIENCE : CLASS 8-12</Text>
                            </Flex>
                        </VStack>
                    </Box>
                    <Box bg="#C4C4C4" width="359px" borderRadius="5px" height="252px" position="relative" top="-21px">
                        <Flex width="80%" margin="0px auto" paddingTop="23px" fontWeight="550">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex omnis saepe quas ducimus et illo, quibusdam reprehenderit reiciendis molestias cum in asperiores possimus unde. Optio magni cumque deleniti consequatur quibusdam.
                        </Flex>
                        <Flex marginTop="15px"  flexDirection="row" justifyContent="center">
                            <Button bg="#296EB4" width="160px" className="btn" marginTop="8px" color="#FFFFFF"  _hover={{ bg: "#132638" }}>Register Now</Button>
                        </Flex>
                    </Box>
                </VStack>
            </Box>
        </div>
    )
}

export default Card