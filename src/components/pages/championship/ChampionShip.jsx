import React from 'react'
import { Flex, Text, HStack, PopoverHeader, PopoverBody, useDisclosure, FormControl, FormLabel, Input, ButtonGroup, Popover, PopoverTrigger, IconButton, PopoverContent, PopoverArrow, PopoverCloseButton, VStack, Button, Stack, Spacer, Center, Image, Heading, Avatar, Box } from "@chakra-ui/react";
import CustomBox from '../../shared/CustomBox';
import ppl1 from '../../../images/ppl1.svg';
import './ChampionShip.module.css';
import ppl10 from '../../../images/ppl10.svg'
import Slider3 from '../Slider3';
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetChampionshipQuery, refetchGetChampionshipQuery, useClearChampionshipMutation, SetChampionshipDocument, useSetChampionshipMutation, UserRole, } from '../../../types/generated/generated';
import Loader from '../../shared/Loader';
import { useQuery } from '@apollo/react-hooks';
import { Usercontext } from '../signinUp/Context';

const ChampionShip = () => {

    const {role} = React.useContext(Usercontext);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: isOpenA, onOpen: onOpenA, onClose: onCloseA } = useDisclosure();

    //-------------------------clearing data
    const [clearChampionshipMutation] = useClearChampionshipMutation({refetchQueries: [refetchGetChampionshipQuery()]});

    const clearHandler = (e ) => {
        e.preventDefault();
        clearChampionshipMutation().then(()=>{
            window.alert("Removed!!");
            onClose();
        }).catch(err=>{
            console.log(err);
        });
    }

    //-------------------------posting data
    const [school, setSchool] = React.useState();
    const [points, setPoints] = React.useState();
    const seterE = (e) => {
        setSchool(e.target.value);
    }
    const seterP = (e ) => {
        setPoints(e.target.value);
    }

    let x = parseInt(points);

    const [setChampionshipMutation, { data:data1, loading:loading1, error:error1 }] = useSetChampionshipMutation({
        variables: {
            setChampionshipData: { points:x, schoolName: school }
        },
        refetchQueries: [refetchGetChampionshipQuery()]
    });

    const handleSubmit = () => {
        console.log(school,points);
        setChampionshipMutation().then(()=>{
            window.alert("Submitted");
            onCloseA();
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
            <Box width="100%" height="100%" bg="#AACDBE" paddingTop={'5vh'}>
            <Flex justifyContent="center" width="100%" >
                <Text fontSize="4xl" fontWeight="650" paddingTop="0px" color="#000">
                    Leaderboard
                </Text>
            </Flex>

            <Box className="imgClass">

                    <Flex justifyContent="center" flexWrap="wrap" overflow="visible">
                        <Image src={ppl10} alt="ppl" borderRadius="20px" width="15%" marginTop="6vh" marginLeft="20px"></Image>
                        <Image src={ppl10} alt="ppl" borderRadius="10px" marginLeft="20px" width="20%" marginTop="6vh"></Image>
                        <Image src={ppl10} alt="ppl" borderRadius="10px" marginLeft="20px" width="15%" marginTop="6vh"></Image>
                    </Flex>
                    
                
                    {/* <Flex justifyContent="center" marginLeft="0px" marginTop="0px" width="100vw">
                        
                        <img src={ppl1} className="img1" alt="ppl1"></img>
                    </Flex> */}
                    
                    {role === UserRole.Admin && <Flex justifyContent="center">
                        <Flex width="50%" paddingTop="20px" justifyContent="center">
                            <Popover isOpen={isOpen}>
                                <PopoverTrigger>
                                    <Button bg="#fff" fontWeight="500" onClick={onOpen}>Clear Data</Button>
                                </PopoverTrigger>
                                <PopoverContent>
                                    <PopoverArrow />
                                    <PopoverCloseButton onClick={onClose}/>
                                    <PopoverHeader>Are You sure ??!!</PopoverHeader>
                                    <HStack>
                                        <Button width="50%" onClick={clearHandler}>Yes</Button>
                                        <Spacer />
                                        <Button width="50%" onClick={onClose}>No</Button>
                                    </HStack>
                                </PopoverContent>
                            </Popover>
                            <Spacer />
                            <Popover isOpen={isOpenA}>
                                <PopoverTrigger>
                                    <Button bg="#fff" fontWeight="500" onClick={onOpenA}>Add Data</Button>
                                </PopoverTrigger>
                                <PopoverContent>
                                    <PopoverArrow />
                                    <PopoverCloseButton onClick={onCloseA}/>
                                    <PopoverHeader>Confirmation!</PopoverHeader>
                                    <FormControl action="">
                                        <Input type="text" bg="#333" color="#fff" name="schoolName" onChange={seterE} placeholder="EnterSchoolName" />
                                        <Input type="text" bg="#333" color="#fff" name="points" onChange={seterP} placeholder="12" />
                                        <Button type="submit" onClick={handleSubmit}>Add Data</Button>
                                    </FormControl>
                                </PopoverContent>
                            </Popover>
                        </Flex>
                    </Flex>}


                    {/* {data.championship.map((champion) => {
                        return (
                            <Flex justifyContent="center">
                                <Box width="80vw" height="9vh" bg="white" borderRadius="10px" marginTop="6vh">
                                    <Flex justifyContent="space-between" height="100%">
                                        <Text color="#000" fontSize="3vh" paddingLeft="4vh" align="center" paddingTop="2vh">{champion.schoolName}</Text>
                                        <Text color="#000" fontSize="3vh" paddingRight="6vh" paddingTop="2vh" >{champion.points}</Text>
                                    </Flex>
                                </Box>
                            </Flex>
                        );
                    })} */}
                    {/* <Flex justifyContent="center">
                            <Box width="80vw" height="9vh" bg="white" borderRadius="10px" marginTop="6vh">
                                <Flex justifyContent="space-between" height="100%">
                                    <Text color="#000" fontSize="3vh" paddingLeft="4vh" align="center" paddingTop="2vh">{"IIT Madras"}</Text>
                                    <Text color="#000" fontSize="3vh" paddingRight="6vh" paddingTop="2vh" >{200}</Text>
                                </Flex>
                            </Box>
                    </Flex>
                    <Flex justifyContent="center">
                            <Box width="80vw" height="9vh" bg="white" borderRadius="10px" marginTop="2vh">
                                <Flex justifyContent="space-between" height="100%">
                                    <Text color="#000" fontSize="3vh" paddingLeft="4vh" align="center" paddingTop="2vh">{"IIT Bombay"}</Text>
                                    <Text color="#000" fontSize="3vh" paddingRight="6vh" paddingTop="2vh" >{100}</Text>
                                </Flex>
                            </Box>
                    </Flex>
                    <Flex justifyContent="center">
                            <Box width="80vw" height="9vh" bg="white" borderRadius="10px" marginTop="2vh">
                                <Flex justifyContent="space-between" height="100%">
                                    <Text color="#000" fontSize="3vh" paddingLeft="4vh" align="center" paddingTop="2vh">{"IIT Delhi"}</Text>
                                    <Text color="#000" fontSize="3vh" paddingRight="6vh" paddingTop="2vh" >{20}</Text>
                                </Flex>
                            </Box>
                    </Flex> */}
                    {data?.championship.length === 0 && <Flex justifyContent="center">
                            <Box width="80vw" height="9vh" bg="white" borderRadius="10px" marginTop="2vh">
                                <Text color="#000" fontSize="3vh" align="center" paddingTop="2vh">{"RESULTS WILL BE RELEASED SOON..."}</Text>
                            </Box>
                    </Flex>}
                    
                    {data?.championship.map((champion) => (
                        <Flex justifyContent="center">
                            <Box width="80vw" height="9vh" bg="white" borderRadius="10px" marginTop="3vh">
                                <Flex justifyContent="space-between" height="100%">
                                    <Text color="#000" fontSize="3vh" paddingLeft="4vh" align="center" paddingTop="2vh">{champion.schoolName}</Text>
                                    <Text color="#000" fontSize="3vh" paddingRight="6vh" paddingTop="2vh" >{champion.points}</Text>
                                </Flex>
                            </Box>
                        </Flex>
                    ))}

                    <Flex justifyContent="center">
                        <Text fontSize="40px" fontWeight="650" className="txt2" color="#000">PRIZES</Text>
                    </Flex>

                    <Swiper breakpoints={{ 678: { slidesPerView: 2 }, 1000: { slidesPerView: 3 } }} slidesPerView={1} spaceBetween={40} pagination={{ "clickable": true }}>
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
