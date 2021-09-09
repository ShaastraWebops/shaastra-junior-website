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
    Link,   
  } from "@chakra-ui/react"
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faEdit } from "@fortawesome/free-solid-svg-icons";
  import {useDisclosure} from "@chakra-ui/react"
import {name,school,standard, sjid} from "../signinUp/Cookie"

import {profiles} from "./data"
import { workshops } from "../workshops/data";
import { competitions } from "../workshops/data";
import { useParams } from "react-router-dom";
import { divide } from "lodash";
import {EventType, RegistraionType, useGetProfileQuery, UserRole} from "../../../types/generated/generated"
import {useHistory} from "react-router-dom"
import { useContext } from "react";
import {Usercontext} from "../signinUp/Context"
 
SwiperCore.use([Navigation, Pagination, Keyboard])


const Profile = () => {

    const role = useContext(Usercontext)
    const { isOpen, onOpen, onClose } = useDisclosure()
    // backgroundColor="#4a4a75b6"
    const history = useHistory()
    const {data,error,loading} = useGetProfileQuery()
   console.log(role.role)

    if(role.role === "USER")
    {
        return (
            <CustomBox>
            <Box width="100vw" height="fit-content" backgroundColor="#AACDBE" paddingBottom="5vh">
            <div className="profile">
            <h1>MY PROFILE</h1>
                <div className="profile-div">
                    <Flex width="100%" height="fit-content" paddingTop="5vh"  justifyContent="space-evenly" alignItems="center" marginBottom="10vh">
                        <Flex flexDirection="column" className="profile-info" padding="8vh 8vw" width="fit-content" borderRadius="45px"
                        justifyContent="center" alignItems="center" textAlign="center" backgroundColor="#b0dbbe"
                        boxShadow= "0px 0px 15px 5px rgba(31, 33, 39, 0.24)">
                            <p>{data?.me?.name}</p>
                            <p>{data?.me?.school}</p>
                            <p> <b>Class : </b> {data?.me?.class}</p>
                            <p> <b>Shaastra Juniors ID :</b> {data?.me?.sjID}</p>
                            <a href="/editProfile">Edit <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon> </a>
                        </Flex>
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
                                data?.me?.registeredEvents.map(el => {
                                    if(el.eventType === EventType.Workshops)
                                    return(
                                        <SwiperSlide>
                                            <Flex flexDirection="column" justifyContent="center" alignItems="center" textAlign="center" 
                                        backgroundColor="#a4ccb1" className="registered-item" width="20vw">
                                            <a href={`/workshops/${el.id}`} target="_blank">
                                            <div className="register-img">
                                                <Image src={el.pic} width="20vw" opacity="0.6" boxShadow="0px 0px 10px 0px rgb(31, 33, 39)" ></Image>
                                                <div className="date-time">
                                                    <p>{el.eventTimeFrom} - {el.eventTimeTo}</p>
                                                </div>
                                            </div>
                                            <div className="registered-info">
                                                <h3>{el.title}</h3>
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
                                data?.me?.registeredEvents.map(el => {
                                    if(el.eventType === EventType.Competitions && el.registrationType === RegistraionType.Individual)
                                    return(
                                        <Box key={el.id}>
                                            <SwiperSlide>
                                            <Flex flexDirection="column" justifyContent="center" alignItems="center" textAlign="center" 
                                        backgroundColor="#a4ccb1" className="registered-item" width="20vw">
                                            <a href={`/competitions/${el.id}`} target="_blank">
                                            <div className="register-img">
                                                <Image src={el.pic} width="20vw" opacity="0.6" boxShadow="0px 0px 10px 0px rgb(31, 33, 39)" ></Image>
                                                <div className="date-time">
                                                    <p>{el.eventTimeFrom} - {el.eventTimeTo}</p>
                                                </div>
                                            </div>
                                            <div className="registered-info">
                                                <h3>{el.title}</h3>
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
                        <Swiper
                             pagination={{clickable: true}}
                             spaceBetween={2}
                             slidesPerView={"auto"}
                             // navigation={true}
                             className="registered-swiper"
                             keyboard={true}
                        >
                            {
                                data?.me?.registeredEvents.map(el => {
                                    if(el.eventType === EventType.Competitions && el.registrationType === RegistraionType.Team)
                                    return(
                                        <Box key={el.id}>
                                            <SwiperSlide>
                                            <Flex flexDirection="column" justifyContent="center" alignItems="center" textAlign="center" 
                                        backgroundColor="#a4ccb1" className="registered-item" width="20vw">
                                            <div className="register-img">
                                                <Image src={el.pic} width="20vw" opacity="0.6" boxShadow="0px 0px 10px 0px rgb(31, 33, 39)" ></Image>
                                                <div className="date-time">
                                                    <p>{el.eventTimeFrom} - {el.eventTimeTo}</p>
                                                </div>
                                            </div>
                                            <div className="registered-info">
                                                <h3>{el.title}</h3>
                                            </div>
                                            </Flex>
                                            <Button onClick={onOpen} alignSelf="flex-end" marginRight="1vw">More Details</Button>
                                            <Modal onClose={onClose} isOpen={isOpen}>
                                                <ModalOverlay></ModalOverlay>
                                                <ModalContent backgroundColor="#AACDBE" color="#222244">
                                                    <ModalHeader paddingTop="4vh" borderBottom="2px solid #1c1c2bc2" margin="0 1vw" textAlign="center">
                                                        <h2>{el.title}</h2></ModalHeader>
                                                    <ModalCloseButton></ModalCloseButton>
                                                    <ModalBody paddingBottom="4vh" className="pop-up" paddingTop="4vh">
                                                        <Flex flexDirection="column" fontSize="1.5vw">
                                                            <p>{el.yourTeam?.name} :  {el.teamSize} members</p>
                                                            <b>MEMBERS:</b>
                                                            {
                                                                el.yourTeam?.members.map(m => {return(<p>{m.name}</p>)})
                                                            }
                                                            <Button alignSelf="flex-end" marginRight="1vw" to={`/competitions/${el.id}`}>See competition</Button>
                                                        </Flex>
                                                    </ModalBody>
                                                </ModalContent>
                                            </Modal>
                                        </SwiperSlide>
                                        </Box>
                                    )
                                })
                            }   
                        </Swiper>
                    </Flex>
                    {/* <h2 className="purchase">PURCHASES</h2>
                    
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
                    </Swiper> */}
                </div>
            </div>
            </Box>
        </CustomBox>
     )
   }
   else 
   {
       history.push('/')
       return null
   }
}

export default Profile