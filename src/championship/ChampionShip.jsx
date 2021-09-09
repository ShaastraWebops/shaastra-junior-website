import React from 'react'
import { Flex, Text, VStack, Stack, Center, Image, Heading, Avatar, Box, fromBox } from "@chakra-ui/react";
import CustomBox from '../components/shared/CustomBox';
import ppl1 from './ppl1.svg';
import './ChampionShip.module.css';
import ppl10 from '../../src/images/ppl10.svg';
import Slider3 from '../components/pages/Slider3';
import { Swiper, SwiperSlide } from "swiper/react";


const ChampionShip = () => {

    const [data,setData] = React.useState({videos:[]});

    React.useEffect(()=>{
        
    },[]);

    return (
        <CustomBox>
            <Box width="100%" height="100%" bg="#AACDBE">
                <Box className="imgClass">
                    <Flex justifyContent="center" borderRadius="40px">
                        <Image src={ppl1} alt="ppl1" borderRadius="10px" width="70vw" marginTop="40px"></Image>
                    </Flex>
                    <Flex justifyContent="center" flexWrap="wrap">
                        <Image src={ppl10} alt="ppl" borderRadius="10px" width="15%" marginTop="20px" marginLeft="20px"></Image>
                        <Image src={ppl10} alt="ppl" borderRadius="10px" marginLeft="20px" width="20%" marginTop="20px"></Image>
                        <Image src={ppl10} alt="ppl" borderRadius="10px" marginLeft="20px" width="15%" marginTop="20px"></Image>
                    </Flex>

                    <Flex justifyContent="center">
                        <Box width="80vw" height="9vh" bg="white" borderRadius="10px" marginTop="20px">
                            <Flex justifyContent="space-between">
                                <Text  color="#000" fontSize="25px">Name</Text>
                                <Text color="#000" fontSize="25px">10 pts</Text>
                            </Flex>
                        </Box>
                    </Flex>

                    <Flex justifyContent="center">
                        <Box width="80vw" height="9vh" bg="white" borderRadius="10px" marginTop="20px">
                            <Flex justifyContent="space-between">
                                <Text color="#000" fontSize="25px">Name</Text>
                                <Text color="#000" fontSize="25px"> 10 pts</Text>
                            </Flex>
                        </Box>
                    </Flex>

                    <Flex justifyContent="center">
                        <Box width="80vw" height="9vh" bg="white" borderRadius="10px" marginBottom="20px" marginTop="20px">
                            <Flex justifyContent="space-between">
                                <Text color="#000" fontSize="25px">Name</Text>
                                <Text color="#000" fontSize="25px">10 pts</Text>
                            </Flex>
                        </Box>
                    </Flex>

                    <Flex justifyContent="center">
                        <Text fontSize="40px" className="txt2">PRIZES</Text>
                    </Flex>

                    <Swiper breakpoints={{900:{slidesPerView:2},1200:{slidesPerView:3}}} spaceBetween={40} pagination={{ "clickable": true }} className="mySwiper">
                        <SwiperSlide><Slider3 marginLeft="5px" /></SwiperSlide>
                        <SwiperSlide><Slider3 marginLeft="5px" /></SwiperSlide>
                        <SwiperSlide><Slider3 marginLeft="5px" /></SwiperSlide>
                        <SwiperSlide><Slider3 marginLeft="5px" /></SwiperSlide>
                        <SwiperSlide><Slider3 marginLeft="5px" /></SwiperSlide>
                        <SwiperSlide><Slider3 marginLeft="5px" /></SwiperSlide>
                    </Swiper>

                </Box>
            </Box>
        </CustomBox>
    )
}

export default ChampionShip