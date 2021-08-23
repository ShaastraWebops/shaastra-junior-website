import * as React from "react";
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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  HStack,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  Avatar,
  Heading,
  Center,
  Box,
} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react"
import { ReactComponent as DiceOutlineDarkAnimated } from "./../../images/logo/animated/non-looped/Text_Outline_Dark_animated.svg";
import { ReactComponent as DiceOutlineLightAnimated } from "./../../images/logo/animated/non-looped/Text_Outline_Light_animated.svg";
import ppl2 from '../../images/ppl2.svg';
import ppl6 from '../../images/ppl6.svg';
import ppl5 from '../../images/ppl5.svg';
import ppl7 from '../../images/ppl7.svg';
import ppl8 from '../../images/ppl8.svg';

import ppl from '../../images/ppl.svg';
import cloud from '../../images/cloud.svg';
import { HamburgerIcon, ExternalLinkIcon, RepeatIcon, EditIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import CustomBox from "../shared/CustomBox";
import ppl4 from '../../images/ppl4.svg';
import { Swiper, SwiperSlide } from "swiper/react";
import '../../styles/home.css';
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import Slider2 from "./Slider2";
import SwiperCore, {
  Pagination
} from 'swiper/core';
interface Props { }
SwiperCore.use([Pagination]);
const Home = (props: Props) => {
  const Logo = useColorModeValue(
    DiceOutlineDarkAnimated,
    DiceOutlineLightAnimated
  );
  // const color = useColorModeValue("secondary", "link")

  // install Swiper modules
  return (
    <CustomBox>
      <Box bg="#AACDBE" width="100vw" height="100%">
        <Stack>
          <Box display="flex" justifyContent="flex-end" marginRight="40px" paddingTop="20px" className="boxxx" width="100%" height="100vh">
            {/* <Image src={cloud} id="x1" height="100vh" alt="" /> */}
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
          </Box>

          <Text justifyContent="center" padding="100px" fontSize="50px" display="flex">SHAASTRA</Text>

          <Swiper pagination={true} className="mySwiper">
            <SwiperSlide>
              <img src={ppl2} alt="" width="100%" className="image" /></SwiperSlide>
            <SwiperSlide>
              <img src={ppl2} alt="" width="100%" className="image" /></SwiperSlide>
            <SwiperSlide>
              <img src={ppl2} alt="" width="100%" className="image" /></SwiperSlide>
            <SwiperSlide>
              <img src={ppl2} alt="" width="100%" className="image" /></SwiperSlide>
            <SwiperSlide>
              <img src={ppl2} alt="" width="100%" className="image" /></SwiperSlide>
            <SwiperSlide>
              <img src={ppl2} alt="" width="100%" className="image" /></SwiperSlide>
          </Swiper>
          <div className="flx">
            <h2 className="text">
              vero velit sapiente, odit exercitationem laborum atque. Fuga? adipisicing elit. Quod quasi minus, consequuntur dolores sed quam doloremque nisi fugit mollitia qui debitis magnam, maxime ipsum voluptates voluptatem aliquam, repellat quidem delectus.
            </h2>
          </div>

          <Box bg="#F4F7C5" width="100%">
            <div className="flx1">
              <h2 className="text1" >
                TODAY’S HIGHLIGHTS
              </h2>
            </div>
          </Box>


          <Flex width="100%" overflow="hidden" display="flex" flexWrap="wrap" justifyContent="center">
            <Swiper slidesPerView={2} spaceBetween={40} className="mySwiper">
              <SwiperSlide><Slider2 /></SwiperSlide>
              <SwiperSlide><Slider2 /></SwiperSlide>
              <SwiperSlide><Slider2 /></SwiperSlide>
              <SwiperSlide><Slider2 /></SwiperSlide>
              <SwiperSlide><Slider2 /></SwiperSlide>
              <SwiperSlide><Slider2 /></SwiperSlide>
            </Swiper>
          </Flex>
          <Flex justifyContent="center">
            <Box width="70%" marginBottom="20px" borderRadius="50px" justifyContent="center" height="10px" bg="#FBC687" />
          </Flex>

          <Box bg="#F4F7C5" width="100vw">
            <Text p={10} fontSize="50px" fontWeight="650">PREVIOUS YEAR</Text>
            <div className="cont">
              <h2 className="txt2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae culpa delectus mollitia illum porro id, ad blanditiis at accusantium error rerum? Et molestiae natus iste temporibus reiciendis totam, quia quaerat.</h2>
            </div>
          </Box>

          <Swiper slidesPerView={2} spaceBetween={40} pagination={{ "clickable": true }} className="mySwiper">
            <SwiperSlide><Slider2 /></SwiperSlide>
            <SwiperSlide><Slider2 /></SwiperSlide>
            <SwiperSlide><Slider2 /></SwiperSlide>
            <SwiperSlide><Slider2 /></SwiperSlide>
            <SwiperSlide><Slider2 /></SwiperSlide>
            <SwiperSlide><Slider2 /></SwiperSlide>
          </Swiper>
          <Flex justifyContent="center">
            <Box width="70%" marginBottom="20px" borderRadius="50px" justifyContent="center" height="10px" bg="#FBC687" />
          </Flex>
          <Box>
            <Text fontSize="40px" p={10} fontWeight="650">
              TESTIMONIALS
            </Text>

            <Flex flexDirection="row" justifyContent="flex-start">
              <Swiper spaceBetween={30} pagination={{ "clickable": true }} className="mySwiper">
                <SwiperSlide><Slider2 /></SwiperSlide><SwiperSlide><Slider2 /></SwiperSlide><SwiperSlide><Slider2 /></SwiperSlide>
              </Swiper>
              <Image src={ppl5} width="30%" alt=""></Image>
            </Flex>

            <Box width="100%" height="150px" className="spons">
                <Text className="sponstxt">SPONSORS</Text>
            </Box>
            <Flex width="100vw" bg="#F4F7C5" flexWrap="wrap" justifyContent="center">
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
