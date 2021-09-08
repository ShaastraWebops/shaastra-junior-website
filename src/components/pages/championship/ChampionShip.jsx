import React from 'react'
import { Flex, Text, EditIcon,HStack, PopoverHeader, PopoverBody, useDisclosure, FormControl, FormLabel, Input, ButtonGroup, Popover, PopoverTrigger, IconButton, PopoverContent, FocusLock, PopoverArrow, PopoverCloseButton, VStack, Button, Stack, Spacer, Center, Image, Heading, Avatar, Box, fromBox } from "@chakra-ui/react";
import CustomBox from '../../shared/CustomBox';
import ppl1 from './ppl1.svg';
import './ChampionShip.module.css';
import ppl10 from '../../../images/ppl10.svg'
import Slider3 from '../Slider3';
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetChampionshipQuery } from '../../../types/generated/generated';
import Loader from '../../shared/Loader';
import a1 from '../../../images/123.png';
import { render } from '@testing-library/react';

const ChampionShip = () => {

    const mitesh = {
        x: 1
    }

    // 3. Create the Popover
    // Ensure you set `closeOnBlur` prop to false so it doesn't close on outside click
    const adding = () => {
        <Popover>
            <PopoverTrigger>
                <Button>Trigger</Button>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Confirmation!</PopoverHeader>
                <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
            </PopoverContent>
        </Popover>
    }


    const { data, loading, error } = useGetChampionshipQuery({});
    if (error) console.log(error);
    if (loading) return <Loader />;
    // console.log(data.championship[0].schoolName);
    return (
        <CustomBox>
            <Box width="100%" height="100%" bg="#AACDBE" paddingTop={'80px'}>
                <Box className="imgClass">
                    <Flex justifyContent="center" marginLeft="4px" marginTop="-10px" width="100%">
                        <img src={ppl1} className="img1" alt="ppl1"></img>
                    </Flex>
                    {mitesh.x ? <Flex justifyContent="center">
                        <Flex width="50%" paddingTop="20px" justifyContent="center">
                        <Popover>
                                <PopoverTrigger>
                                    <Button bg="#000">Clear Data</Button>
                                </PopoverTrigger>
                                <PopoverContent>
                                    <PopoverArrow />
                                    <PopoverCloseButton />
                                    <PopoverHeader>Are You sure ??!!</PopoverHeader>
                                    <HStack>
                                    <Button width="50%">Yes</Button>
                                    <Spacer/>
                                    <Button width="50%">No</Button>
                                    </HStack>
                                </PopoverContent>
                            </Popover>
                            <Spacer />
                            <Popover>
                                <PopoverTrigger>
                                    <Button bg="#000">Add Data</Button>
                                </PopoverTrigger>
                                <PopoverContent>
                                    <PopoverArrow />
                                    <PopoverCloseButton />
                                    <PopoverHeader>Confirmation!</PopoverHeader>
                                    <Input type="text" bg="#333" color="gray" defaultValue="Enter School Name"/>
                                    <Input type="text" bg="#333" color="gray" defaultValue="Enter Points"/>
                                    <Button>Add Data</Button>
                                </PopoverContent>
                            </Popover>
                        </Flex>
                    </Flex> : <Box />}
                    <Flex justifyContent="center" flexWrap="wrap">
                        <Image src={a1} alt="" />
                    </Flex>
                    <Flex justifyContent="space-around" width="100%" >
                        <Flex justifyContent="center">
                            <Text color="#000" fontSize="25px" fontWeight="650">2nd</Text>
                        </Flex>
                        <Text color="#000" fontSize="25px" fontWeight="650">1st</Text>
                        <Text color="#000" fontSize="25px" fontWeight="650">3rd</Text>
                    </Flex>
                    {data.championship.map((datas) => (
                        <Flex justifyContent="center">
                            <Box width="80vw" height="9vh" bg="white" borderRadius="10px" marginTop="20px">
                                <Flex justifyContent="space-between">
                                    <Text color="#000" fontSize="25px" paddingTop="6px" paddingLeft="20px">{datas.schoolName}</Text>
                                    <Text color="#000" fontSize="25px" paddingTop="6px" paddingRight="20px">{datas.points}</Text>
                                </Flex>
                            </Box>
                        </Flex>
                    ))}

                    <Flex justifyContent="center">
                        <Text fontSize="40px" className="txt2">PRIZES</Text>
                    </Flex>

                    <Swiper breakpoints={{ 678: { slidesPerView: 2 }, 1000: { slidesPerView: 3 } }} slidesPerView={1} spaceBetween={40} pagination={{ "clickable": true }} className="mySwiper">
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

// const ChampionShipAdmin = () => {

//     const { data, loading, error } = useGetChampionshipQuery({});
//     if (error) console.log(error);
//     if (loading) return <Loader />;
//     // console.log(data.championship[0].schoolName);
//     return (
//         <CustomBox>
//             <Box width="100%" height="100%" bg="#AACDBE" paddingTop={'80px'}>
//                 <Box className="imgClass">
//                     <Flex justifyContent="center" marginLeft="4px" marginTop="-10px" width="100%">
//                         <img src={ppl1} className="img1" alt="ppl1"></img>
//                     </Flex>
//                     <Flex justifyContent="center">
//                         <Flex width="50%" paddingTop="20px" justifyContent="center">
//                             <Button bg="#000">Clear Data</Button>
//                             <Spacer />
//                             <Button bg="#000">Add Data</Button>
//                         </Flex>
//                     </Flex>
//                     <Flex justifyContent="center" flexWrap="wrap">
//                         <Image src={a1} alt="" />
//                     </Flex>
//                     <Flex justifyContent="space-around" width="100%" >
//                         <Flex justifyContent="center">
//                             <Text color="#000" fontSize="25px" fontWeight="650">2nd</Text>
//                         </Flex>
//                         <Text color="#000" fontSize="25px" fontWeight="650">1st</Text>
//                         <Text color="#000" fontSize="25px" fontWeight="650">3rd</Text>
//                     </Flex>
//                     {data.championship.map((datas) => (
//                         <Flex justifyContent="center">
//                             <Box width="80vw" height="9vh" bg="white" borderRadius="10px" marginTop="20px">
//                                 <Flex justifyContent="space-between">
//                                     <Text color="#000" fontSize="25px" paddingTop="6px" paddingLeft="20px">{datas.schoolName}</Text>
//                                     <Text color="#000" fontSize="25px" paddingTop="6px" paddingRight="20px">{datas.points}</Text>
//                                 </Flex>
//                             </Box>
//                         </Flex>
//                     ))}

//                     <Flex justifyContent="center">
//                         <Text fontSize="40px" className="txt2">PRIZES</Text>
//                     </Flex>

//                     <Swiper breakpoints={{ 678: { slidesPerView: 2 }, 1000: { slidesPerView: 3 } }} slidesPerView={1} spaceBetween={40} pagination={{ "clickable": true }} className="mySwiper">
//                         <SwiperSlide><Slider3 marginLeft="5px" /></SwiperSlide>
//                         <SwiperSlide><Slider3 marginLeft="5px" /></SwiperSlide>
//                         <SwiperSlide><Slider3 marginLeft="5px" /></SwiperSlide>
//                         <SwiperSlide><Slider3 marginLeft="5px" /></SwiperSlide>
//                         <SwiperSlide><Slider3 marginLeft="5px" /></SwiperSlide>
//                         <SwiperSlide><Slider3 marginLeft="5px" /></SwiperSlide>
//                     </Swiper>

//                 </Box>
//             </Box>
//         </CustomBox>
//     )
// }

export default ChampionShip
