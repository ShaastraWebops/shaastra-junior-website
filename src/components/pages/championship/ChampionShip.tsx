import React from 'react'
import { Flex, Text, HStack, PopoverHeader, PopoverBody, useDisclosure, FormControl, FormLabel, Input, ButtonGroup, Popover, PopoverTrigger, IconButton, PopoverContent, PopoverArrow, PopoverCloseButton, VStack, Button, Stack, Spacer, Center, Image, Heading, Avatar, Box } from "@chakra-ui/react";
import CustomBox from '../../shared/CustomBox';
import ppl1 from '../../../images/ppl1.svg';
import './ChampionShip.module.css';
import ppl10 from '../../../images/ppl10.svg'
import Slider3 from '../Slider3';
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetChampionshipQuery, Championship, useClearChampionshipMutation, SetChampionshipDocument, useSetChampionshipMutation, } from '../../../types/generated/generated';
import Loader from '../../shared/Loader';
import a1 from '../../../images/123.png';
import { useQuery } from '@apollo/react-hooks';
import { Usercontext } from '../signinUp/Context';

const ChampionShip = () => {

    const {role} = React.useContext(Usercontext)
    const data4 = {
        x: 1
    }
    if(role !== 'ADMIN'){
        data4.x = 1;
    }else{
        data4.x = 0;
    }
    //-------------------------clearing data
    const [clearChampionshipMutation] = useClearChampionshipMutation({});

    const clearHandler = (e : any) => {
        e.preventDefault();
        clearChampionshipMutation().then(()=>{
            console.log("Removed!!");
        }).catch(err=>{
            console.log(err);
        });
    }
    //-------------------------posting data
    const [school, setSchool] = React.useState();
    const [points, setPoints] = React.useState();
    const seterE = (e : any) => {
        setSchool(e.target.value);
    }
    const seterP = (e : any) => {
        setPoints(e.target.value);
    }
    console.log(typeof(points));
    console.log(typeof(school));
    let x = parseInt(points!);
    const [setChampionshipMutation, { data:data1, loading:loading1, error:error1 }] = useSetChampionshipMutation({
        variables: {
            setChampionshipData: { points:x, schoolName: school! }
        }
    });
    const handleSubmit = () => {
        console.log(school,points);
        setChampionshipMutation().then(()=>{
            console.log("Submitted");
        }).catch(e=>{
            console.log(e);
        });
    }

    //-------------------Getting data
    const { data, loading, error } = useGetChampionshipQuery({});
    if (error) console.log(error);
    if (loading) return <Loader />;
    return (
        <CustomBox>
            <Box width="100%" height="100%" bg="#AACDBE" paddingTop={'80px'}>
                <Box className="imgClass">
                    <Flex justifyContent="center" marginLeft="0px" marginTop="0px" width="100vw">
                        <img src={ppl1} className="img1" alt="ppl1"></img>
                    </Flex>
                    {data4.x ? <Flex justifyContent="center">
                        <Flex width="50%" paddingTop="20px" justifyContent="center">
                            <Popover>
                                <PopoverTrigger>
                                    <Button bg="#000" fontWeight="500">Clear Data</Button>
                                </PopoverTrigger>
                                <PopoverContent>
                                    <PopoverArrow />
                                    <PopoverCloseButton />
                                    <PopoverHeader>Are You sure ??!!</PopoverHeader>
                                    <HStack>
                                        <Button width="50%" onClick={clearHandler}>Yes</Button>
                                        <Spacer />
                                        <Button width="50%">No</Button>
                                    </HStack>
                                </PopoverContent>
                            </Popover>
                            <Spacer />
                            <Popover>
                                <PopoverTrigger>
                                    <Button bg="#000" fontWeight="500">Add Data</Button>
                                </PopoverTrigger>
                                <PopoverContent>
                                    <PopoverArrow />
                                    <PopoverCloseButton />
                                    <PopoverHeader>Confirmation!</PopoverHeader>
                                    <FormControl action="">
                                        <Input type="text" bg="#333" color="#fff" name="schoolName" onChange={seterE} placeholder="EnterSchoolName" />
                                        <Input type="text" bg="#333" color="#fff" name="points" onChange={seterP} placeholder="12" />
                                        <Button type="submit" onClick={handleSubmit}>Add Data</Button>
                                    </FormControl>
                                </PopoverContent>
                            </Popover>
                        </Flex>
                    </Flex> : <Box />}
                    <Flex justifyContent="center" flexWrap="wrap">
                        {/* <Image src={a1} alt="" /> */}
                    </Flex>
                    <Flex justifyContent="center" width="100%" >
                        <Text fontSize="4xl" fontWeight="650" paddingTop="20px" color="#000">
                            RESULT
                        </Text>
                    </Flex>
                    {data?.championship.map((datas) => (
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
                        <Text fontSize="40px" className="txt2" color="#000">PRIZES</Text>
                    </Flex>

                    <Swiper breakpoints={{ 678: { slidesPerView: 2 }, 1000: { slidesPerView: 3 } }} slidesPerView={1} spaceBetween={40} pagination={{ "clickable": true }}>
                        <SwiperSlide><Slider3  /></SwiperSlide>
                        <SwiperSlide><Slider3  /></SwiperSlide>
                        <SwiperSlide><Slider3  /></SwiperSlide>
                        <SwiperSlide><Slider3 /></SwiperSlide>
                        <SwiperSlide><Slider3  /></SwiperSlide>
                        <SwiperSlide><Slider3  /></SwiperSlide>
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
