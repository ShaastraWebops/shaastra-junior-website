import * as React from "react";
import { Text, useColorModeValue, Flex, Stack, Image, Menu, MenuButton, MenuList, MenuItem, Box } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react"
import { ReactComponent as DiceOutlineDarkAnimated } from "./../../images/logo/animated/non-looped/Text_Outline_Dark_animated.svg";
import { ReactComponent as DiceOutlineLightAnimated } from "./../../images/logo/animated/non-looped/Text_Outline_Light_animated.svg";
import ppl2 from '../../images/ppl2.svg';
import ppl5 from '../../images/ppl5.svg';
import ppl8 from '../../images/ppl8.svg';
import { HamburgerIcon, ExternalLinkIcon, RepeatIcon, EditIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import CustomBox from "../shared/CustomBox";
import { Swiper, SwiperSlide } from "swiper/react";
import '../../styles/home.css';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import Slider2 from "./Slider2";
import SwiperCore, { Pagination } from 'swiper/core';
import Particles from 'react-particles-js';
interface Props { }

SwiperCore.use([Pagination]);
const Home = (props: Props) => {
  const Logo = useColorModeValue(
    DiceOutlineDarkAnimated,
    DiceOutlineLightAnimated
  );

  return (
    <CustomBox>
      <Box className="mainn" color="#FFE5E5" width="100vw" height="100%" paddingTop={'80px'}>
        <Stack>
          {/* <Box display="flex" justifyContent="flex-end" marginRight="40px" paddingTop="20px" className="boxxx" width="100%" height="100vh">
            <Menu>
              <MenuButton mr={10} as={IconButton} aria-label="Options" icon={<HamburgerIcon />} variant="outline" />
              <MenuList>
                <MenuItem icon={<AddIcon />} command="T">
                  New Tab
                </MenuItem>
                <MenuItem icon={<ExternalLinkIcon />} command="N">
                  New Tab
                </MenuItem>
                <MenuItem icon={<RepeatIcon />} command="N">
                  New Tab
                </MenuItem>
                <MenuItem icon={<EditIcon />} command="O">
                  New Tab
                </MenuItem>
              </MenuList>
            </Menu>
          </Box> */}

          <Text justifyContent="center" padding="10px" color="#474768" fontWeight="600" fontSize="50px" display="flex">SHAASTRA</Text>

          <Flex justifyContent="center">
            <Swiper pagination={true} className="mySwiper">
              <SwiperSlide>
                <Flex justifyContent="center"><img src={ppl2} alt="" width="80%" className="image" /></Flex></SwiperSlide>
              <SwiperSlide>
                <Flex justifyContent="center"><img src={ppl2} alt="" width="80%" className="image" /></Flex></SwiperSlide>
              <SwiperSlide>
                <Flex justifyContent="center"><img src={ppl2} alt="" width="80%" className="image" /></Flex></SwiperSlide>
              <SwiperSlide>
                <Flex justifyContent="center"><img src={ppl2} alt="" width="80%" className="image" /></Flex></SwiperSlide>
              <SwiperSlide>
                <Flex justifyContent="center"><img src={ppl2} alt="" width="80%" className="image" /></Flex></SwiperSlide>
              <SwiperSlide>
                <Flex justifyContent="center"><img src={ppl2} alt="" width="80%" className="image" /></Flex></SwiperSlide>
            </Swiper>
          </Flex>
          <div className="flx">
            <h2 className="text" color="#fff">
              vero velit sapiente, odit exercitationem laborum atque. Fuga? adipisicing elit. Quod quasi minus, consequuntur dolores sed quam doloremque nisi fugit mollitia qui debitis magnam, maxime ipsum voluptates voluptatem aliquam, repellat quidem delectus.
            </h2>
          </div>

          <Box bg="#b1d4d2" width="100%">
            <div className="flx1">
              <h2 className="text1">
                TODAY’S HIGHLIGHTS
              </h2>
            </div>
          </Box>


          <Flex width="100%" overflow="hidden" display="flex" flexWrap="wrap" justifyContent="center">
            <Swiper  breakpoints={{678:{slidesPerView:2}}} slidesPerView={1} spaceBetween={40} className="mySwiper">
              <SwiperSlide><Slider2 /></SwiperSlide>
              <SwiperSlide><Slider2 /></SwiperSlide>
              <SwiperSlide><Slider2 /></SwiperSlide>
              <SwiperSlide><Slider2 /></SwiperSlide>
              <SwiperSlide><Slider2 /></SwiperSlide>
              <SwiperSlide><Slider2 /></SwiperSlide>
            </Swiper>
          </Flex>
          {/* <Flex justifyContent="center">
            <Box width="70%" marginBottom="20px" borderRadius="50px" justifyContent="center" height="10px" bg="#FBC687" />
          </Flex> */}

          <Box bg="#b1d4d2" width="100%">
            <Flex justifyContent="center" style={{ backgroundColor : "#474768"}} >
              <Text p={10} fontSize="50px"  fontWeight="650">PREVIOUS YEAR</Text>
            </Flex>
          </Box>

          <Swiper  breakpoints={{678:{slidesPerView:2}}} slidesPerView={1} spaceBetween={40} pagination={{ "clickable": true }} className="mySwiper">
            <SwiperSlide><Slider2 /></SwiperSlide>
            <SwiperSlide><Slider2 /></SwiperSlide>
            <SwiperSlide><Slider2 /></SwiperSlide>
            <SwiperSlide><Slider2 /></SwiperSlide>
            <SwiperSlide><Slider2 /></SwiperSlide>
            <SwiperSlide><Slider2 /></SwiperSlide>
          </Swiper>
          <Flex justifyContent="center">
            <Box width="70%" marginBottom="20px" borderRadius="50px" justifyContent="center" height="10px" bg="#b1d4d2" />
          </Flex>
          <Box>
            <Flex justifyContent="center">
              <Text fontSize="40px" p={10} color="#474768" fontWeight="650">
                TESTIMONIALS
              </Text>
            </Flex>

            <Flex flexDirection="row" justifyContent="flex-start">
              <Swiper breakpoints={{678:{slidesPerView:1}}} slidesPerView={1} spaceBetween={30} pagination={{ "clickable": true }} className="mySwiper">
                <SwiperSlide><Slider2 /></SwiperSlide><SwiperSlide><Slider2 /></SwiperSlide><SwiperSlide><Slider2 /></SwiperSlide>
              </Swiper>
              <Image className="pp" src={ppl5} width="30%" alt=""></Image>
            </Flex>

            <Box width="100%" height="150px" className="spons" bg="#222244d2">
              <Text className="sponstxt">SPONSORS</Text>
            </Box>
            <Flex width="100%" bg="#222244d2" flexWrap="wrap" justifyContent="center">
              <Image src={ppl8} p={8} alt=""></Image>
              <Image src={ppl8} p={8} alt=""></Image>
              <Image src={ppl8} p={8} alt=""></Image>
              <Image src={ppl8} p={8} alt=""></Image>
              <Image src={ppl8} p={8} alt=""></Image>
              <Image src={ppl8} p={8} alt=""></Image>
            </Flex>
          </Box>
        </Stack>
      </Box>
    </CustomBox>
  );
};

export default Home;
