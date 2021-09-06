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
                    <Box bg="#F4F7C5" p={1} overflow={'hidden'}>
                        <Image src={ppl3} objectFit="cover" htmlWidth="100%" backgroundSize="cover" />
                    </Box>
                </div>
            </Center>
        </div>
    )
}

export default Slider2  