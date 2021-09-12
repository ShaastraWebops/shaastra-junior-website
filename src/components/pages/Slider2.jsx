import React from 'react'
import gifts from '../../images/gifts.jpg';
import '../../styles/home.css';

// import * as React from "react";
import {
    Text,
    VStack,
    Code,
    Flex,
    Spacer,
    Button,
    AspectRatio,
    Stack,
    Link,
    Image,
    Avatar,
    Heading,
    Center,
    Box,
} from "@chakra-ui/react";

const Slider2 = () => {
    return (
        <div>
            <Center py={6} px={10}>
                <div className="boxx">
                    <Box maxW={'295px'} borderRadius="15px" bg="#F4F7C5" p={6} overflow={'hidden'}>
                        <Box bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                            <Image src={gifts} objectFit="cover" htmlHeight="210px" htmlWidth="100%" layout={'fill'} />
                        </Box>
                        <Stack>
                            <Text color={'gray.500'} className="sldr2" color="#000">
                                Get Ready for a wave of Exciting prizes and Gifts
                            </Text>
                        </Stack>
                    </Box>
                </div>
            </Center>
        </div>
    )
}

export default Slider2