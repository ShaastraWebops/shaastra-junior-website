import React from 'react'
import ppl3 from '../../images/ppl3.svg';
import '../../styles/home.css';

// import * as React from "react";
import {
    Text,
    VStack,
    Code,
    useColorModeValue,
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
                    <Box maxW={'295px'} bg="#F4F7C5" p={6} overflow={'hidden'}>
                        <Box bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
                            <Image src={ppl3} objectFit="cover" htmlHeight="210px" htmlWidth="100%" layout={'fill'} />
                        </Box>
                        <Stack>
                            <Text color={'gray.500'} className="sldr2" color="#000">
                                eirmod tempor invidunt ut labore et dolore magna aliquyam
                                erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                                et ea rebum.
                            </Text>
                        </Stack>

                    </Box>
                </div>
            </Center>
        </div>
    )
}

export default Slider2  