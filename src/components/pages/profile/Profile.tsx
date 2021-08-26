import { Flex, Text, VStack, Image, Grid, GridItem , Box} from "@chakra-ui/react";
import * as React from "react";
import CustomBox from "../../shared/CustomBox";
import Item from "../../../images/profile/item.jpg"
import "../../../styles/profile.css"
import {Swiper, SwiperSlide} from "swiper/react"
import SwiperCore, {Pagination, Navigation, Keyboard} from "swiper/core"
import 'swiper/swiper-bundle.css';
import person from "../../../images/profile/person.jpg"

SwiperCore.use([Navigation, Pagination, Keyboard])

const Profile = () => {
    // backgroundColor="#4a4a75b6"
    return (
        <CustomBox>
        <Box width="100vw" height="fit-content" backgroundColor="white" paddingBottom="5vh">
        <div className="profile">
        <h1>PROFILE</h1>
            <div className="profile-div">
                <Flex width="100%" height="fit-content" paddingTop="5vh"  justifyContent="space-evenly" alignItems="center" marginBottom="18vh">
                    <Flex flexDirection="column" className="profile-info" padding="8vh 0" width="50%"
                    justifyContent="center" alignItems="flex-end" textAlign="right">
                        <p>Ashita Raaghavan</p>
                        <p>Kendriya Vidyalaya Ashok Nagar</p>
                        <p>JK1235</p>
                    </Flex>
                    <Image src={person} borderRadius="20%" boxShadow="0px 0px 15px 0px #1c1c2b80" width="18vw" height="18vw" objectFit="cover"></Image>
                </Flex>
                <h2>REGISTERED EVENTS</h2>
                <Flex className="registered" width="100%" height="fit-content" justifyContent="center" alignItems="center" marginBottom="15vh">
                    <Flex flexDirection="column" justifyContent="center" alignItems="center" textAlign="center" margin="0 1vw"
                    backgroundColor="#b1d4e2" className="registered-item">
                        <a href="" target="_blank">
                        <div className="register-img">
                            <Image src={Item} width="100%" opacity="0.8" boxShadow="0px 0px 10px 0px rgb(31, 33, 39)" ></Image>
                            <div className="date-time">
                                <p>Aug 14th 2021</p>
                                <p>7:00 PM</p>
                            </div>
                        </div>
                        <div className="registered-info">
                            <h3>Junior Make-a-thon</h3>
                        </div>
                        </a>
                    </Flex>
                    <Flex flexDirection="column" justifyContent="center" alignItems="center" textAlign="center" margin="0 1vw"
                    backgroundColor="#b1d4e2" className="registered-item">
                        <a href="" target="_blank">
                        <div className="register-img">
                            <Image src={Item} width="100%" opacity="0.8" boxShadow="0px 0px 10px 0px rgb(31, 33, 39)" ></Image>
                            <div className="date-time">
                                <p>Aug 14th 2021</p>
                                <p>7:00 PM</p>
                            </div>
                        </div>
                        <div className="registered-info">
                            <h3>ReverseCoding</h3>
                        </div>
                        </a>
                    </Flex>
                    <Flex flexDirection="column" justifyContent="center" alignItems="center" textAlign="center" margin="0 1vw"
                    backgroundColor="#b1d4e2" className="registered-item">
                        <a href="" target="_blank">
                            <div className="register-img">
                                <Image src={Item} width="100%" opacity="0.8" boxShadow="0px 0px 10px 0px rgb(31, 33, 39)" ></Image>
                                <div className="date-time">
                                    <p>Aug 14th 2021</p>
                                    <p>7:00 PM</p>
                                </div>
                            </div>
                            <div className="registered-info">
                                <h3>BrainSqueeze</h3>
                            </div>
                        </a>
                    </Flex>
                </Flex>
                <h2 className="purchase">PURCHASES</h2>
                {/* <Flex className="purchases" width="80%" margin="auto" height="fit-content" justifyContent="space-around" 
                alignItems="center" marginBottom="4vh">
                    <Flex className="purchases-item" flexDirection="column" justifyContent="center" alignItems="center" textAlign="center">
                        <Image src={Item} boxSize="70%"></Image>
                         <p>name</p>
                    </Flex>
                    <Flex className="purchases-item" flexDirection="column" justifyContent="center" alignItems="center" textAlign="center">
                        <Image src={Item} boxSize="70%"></Image>
                         <p>name</p>
                    </Flex>
                </Flex>
                <Flex className="purchases" width="80%" margin="auto" height="fit-content" justifyContent="space-around" marginBottom="4vh"
                alignItems="center">
                    <Flex className="purchases-item" flexDirection="column" justifyContent="center" alignItems="center" textAlign="center">
                        <Image src={Item} boxSize="70%"></Image>
                         <p>name</p>
                    </Flex>
                    <Flex className="purchases-item" flexDirection="column" justifyContent="center" alignItems="center" textAlign="center">
                        <Image src={Item} boxSize="70%"></Image>
                         <p>name</p>
                    </Flex>
                </Flex> */}
                <Swiper
                    pagination={{clickable: true}}
                    slidesPerView={1}
                    keyboard={true}
                    // navigation={true}
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