import { Flex, Text, VStack, Image, Grid, GridItem , Box} from "@chakra-ui/react";
import * as React from "react";
import CustomBox from "../../shared/CustomBox";
import Item from "../../../images/profile/item.jpg"
import "../../../styles/profile.css"
import {Swiper, SwiperSlide} from "swiper/react"
import SwiperCore, {Pagination, Navigation, Keyboard} from "swiper/core"
import 'swiper/swiper-bundle.css';
import person from "../../../images/profile/person.jpg"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
  } from "@chakra-ui/react"
  import {useDisclosure} from "@chakra-ui/react"

import {profiles} from "./data"
import { workshops } from "../workshops/data";
import { competitions } from "../workshops/data";
import { useParams } from "react-router-dom";
import { divide } from "lodash";
import {useGetProfileQuery} from "../../../types/generated/generated"

SwiperCore.use([Navigation, Pagination, Keyboard])

const Profile = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    // backgroundColor="#4a4a75b6"
    const {data,error,loading} = useGetProfileQuery()
    const {profName} = useParams<{profName: string}>();
    const profile = profiles.filter(el => {if(el.id === profName) return true})
    if(data) console.log(`data: ${data}`)
    if(error) console.log(`error: ${error}`)
    return (
        <CustomBox>
        <Box width="100vw" height="fit-content" backgroundColor="#AACDBE" paddingBottom="5vh">
        <div className="profile">
        <h1>MY PROFILE</h1>
            <div className="profile-div">
                <Flex width="100%" height="fit-content" paddingTop="5vh"  justifyContent="space-evenly" alignItems="center" marginBottom="18vh">
                    <Flex flexDirection="column" className="profile-info" padding="8vh 0" width="50%"
                    justifyContent="center" alignItems="flex-end" textAlign="right">
                        <p>{profile[0].name}</p>
                        <p>{profile[0].school}</p>
                        <p>{profile[0].shaastrId}</p>
                    </Flex>
                    <Image src={profile[0].imgUrl} borderRadius="20%" boxShadow="0px 0px 15px 0px #1c1c2b80" width="18vw" height="18vw" objectFit="cover"></Image>
                </Flex>
                <Flex className="registered" width="100%" height="fit-content" justifyContent="center" flexDirection="column"
                alignItems="center" marginBottom="15vh">
                     <h2>REGISTERED WORKSHOPS</h2>
                     <Swiper
                    pagination={{clickable: true}}
                    spaceBetween={2}
                    slidesPerView={3}
                    // navigation={true}
                    className="registered-swiper"
                    keyboard={true}>
                        {
                            profile[0].workshopsAttend.map(el => {
                                const workshop = workshops.filter(w => {if(w.id === el)return true})
                                return(
                                    <SwiperSlide>
                                        <Flex flexDirection="column" justifyContent="center" alignItems="center" textAlign="center" 
                                    backgroundColor="#a4ccb1" className="registered-item" width="20vw">
                                        <a href="" target="_blank">
                                        <div className="register-img">
                                            <Image src={workshop[0].imageUrl} width="20vw" opacity="0.6" boxShadow="0px 0px 10px 0px rgb(31, 33, 39)" ></Image>
                                            <div className="date-time">
                                                <p>{workshop[0].deadline.toDateString()}</p>
                                                <p>7:00 PM</p>
                                            </div>
                                        </div>
                                        <div className="registered-info">
                                            <h3>{workshop[0].name}</h3>
                                        </div>
                                        </a>
                                        </Flex>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                        <h2>COMPETITIONS</h2>
                    <Swiper 
                    pagination={{clickable: true}}
                    spaceBetween={2}
                    slidesPerView={"auto"}
                    // navigation={true}
                    className="registered-swiper"
                    keyboard={true}>
                        {
                            profile[0].competitionsRegister.map(el => {
                                const comp = competitions.filter(c => {if(c.id === el) return true})
                                return(
                                    <Box key={el}>
                                        <SwiperSlide>
                                        <Flex flexDirection="column" justifyContent="center" alignItems="center" textAlign="center" 
                                    backgroundColor="#a4ccb1" className="registered-item" width="20vw">
                                        <a href="" target="_blank">
                                        <div className="register-img">
                                            <Image src={comp[0].imageUrl} width="20vw" opacity="0.6" boxShadow="0px 0px 10px 0px rgb(31, 33, 39)" ></Image>
                                            <div className="date-time">
                                                <p>{comp[0].deadline.toDateString()}</p>
                                            </div>
                                        </div>
                                        <div className="registered-info">
                                            <h3>{comp[0].name}</h3>
                                        </div>
                                        </a>
                                        </Flex>
                                    </SwiperSlide>
                                    </Box>
                                )
                            })
                        }
                    </Swiper>

                    {/* 
                        <Button onClick={onOpen} alignSelf="flex-end" marginRight="1vw">More Details</Button>
                        <Modal onClose={onClose} isOpen={isOpen}>
                            <ModalOverlay></ModalOverlay>
                            <ModalContent backgroundColor="#AACDBE" color="#222244">
                                <ModalHeader paddingTop="4vh" borderBottom="2px solid #1c1c2bc2" margin="0 1vw" textAlign="center">
                                    <h2>Junior Make-a-thon</h2></ModalHeader>
                                <ModalCloseButton></ModalCloseButton>
                                <ModalBody paddingBottom="4vh" className="pop-up" paddingTop="4vh">
                                    <Flex flexDirection="column" fontSize="1.5vw">
                                        <p>2 members</p>
                                        <b>MEMBERS:</b>
                                        <p>Rahul</p>
                                        <p>Aditi</p>
                                        <Button alignSelf="flex-end" marginRight="1vw">See competition</Button>
                                    </Flex>
                                </ModalBody>
                            </ModalContent>
                        </Modal> */}
                    
                </Flex>
                <h2 className="purchase">PURCHASES</h2>
                
                <Swiper
                    pagination={{clickable: true}}
                    slidesPerView={1}
                    keyboard={true}
                    navigation={true}
                    className="purchase-swiper"
                    // breakpoints={
                    //     {
                    //         1000: {
                    //             navigation: true,
                    //         },
                    //         200: {
                    //             navigation: false
                    //         }
                    //     }
                    // }
                >
                    <SwiperSlide>
                        <Flex className="purchases-item" flexDirection="column" justifyContent="center" alignItems="center" 
                         textAlign="center" paddingBottom="6vh" paddingTop="3vh">
                            <Image src={Item} boxSize="40%" boxShadow="0px 0px 15px 0px #1c1c2b80" marginBottom="2vh"></Image>
                            <p>name</p>
                        </Flex>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Flex className="purchases-item" flexDirection="column" justifyContent="center" alignItems="center" 
                         textAlign="center"paddingBottom="6vh" paddingTop="3vh">
                            <Image src={Item} boxSize="40%" boxShadow="0px 0px 15px 0px #1c1c2b80" marginBottom="2vh"></Image>
                            <p>name</p>
                        </Flex>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Flex className="purchases-item" flexDirection="column" justifyContent="center" alignItems="center" 
                         textAlign="center"paddingBottom="6vh" paddingTop="3vh">
                            <Image src={Item} boxSize="40%" boxShadow="0px 0px 15px 0px #1c1c2b80" marginBottom="2vh"></Image>
                            <p>name</p>
                        </Flex>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
        </Box>
      </CustomBox>
    )
}

export default Profile