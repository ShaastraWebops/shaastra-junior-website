/* eslint-disable react/jsx-no-target-blank */
import * as React from "react";
import { Text, useColorModeValue, Flex, Stack, Image, Menu, MenuButton, MenuList, MenuItem, Box } from "@chakra-ui/react";
import { ReactComponent as DiceOutlineDarkAnimated } from "./../../images/logo/animated/non-looped/Text_Outline_Dark_animated.svg";
import { ReactComponent as DiceOutlineLightAnimated } from "./../../images/logo/animated/non-looped/Text_Outline_Light_animated.svg";
import ppl2 from '../../images/ppl2.svg';
// import '../../styles/wave.css'
import ppl8 from '../../images/ppl8.svg';
import CustomBox from "../shared/CustomBox";
import { Swiper, SwiperSlide } from "swiper/react";
import '../../styles/home.css';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import Slider2 from "./Slider2";
import Slider4 from "./Slider4";
import SwiperCore, { Pagination } from 'swiper/core';
import Astra from '../../images/Astra.png'
import Atlasian from '../../images/Atlasian.png'
import Boeing from '../../images/Boeing.png'
import CAT from '../../images/CAT.png'
import KLA from '../../images/KLA.png'
import Mahindra from '../../images/Mahindra.png'
import Salesforces from '../../images/Salesforce.png'
import Wells from '../../images/Wells_Fargo.png'
import foxmula from '../../images/foxmula.png'
import innovaccer from '../../images/innovaccer.png'
import kamal from '../../images/kamal_wears.png'
import LT from '../../images/L&T.png'
import mtx from '../../images/MTX.png'
import subex from '../../images/subex.png'
import surana from '../../images/surana.png'
import {faInstagram, faLinkedin, faFacebook} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
interface Props { }

SwiperCore.use([Pagination]);
const Home = (props: Props) => {
  const Logo = useColorModeValue(
    DiceOutlineDarkAnimated,
    DiceOutlineLightAnimated
  );

  return (
    <CustomBox>
      <Box className="mainn" color="" width="100vw" height="100%" paddingTop={'80px'}>
        <Stack>

          <Text justifyContent="center" padding="10px" color="#fff" fontWeight="600" fontSize="50px" display="flex">SHAASTRA</Text>

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


          <Flex width="100%" overflow="hidden" display="flex" height="80vh" flexWrap="wrap" justifyContent="center">
            <Swiper breakpoints={{ 660: { slidesPerView: 2 }, 907: { slidesPerView: 3 } }} slidesPerView={1} spaceBetween={40} className="mySwiper">
              <SwiperSlide><Slider2 /></SwiperSlide>
              <SwiperSlide><Slider2 /></SwiperSlide>
              <SwiperSlide><Slider2 /></SwiperSlide>
              <SwiperSlide><Slider2 /></SwiperSlide>
              <SwiperSlide><Slider2 /></SwiperSlide>
              <SwiperSlide><Slider2 /></SwiperSlide>
            </Swiper>
          </Flex>

          <Box bg="#b1d4d2" width="100%">
            <Flex justifyContent="center">
              <Text p={10} fontSize="50px" color="#474768" fontWeight="650">PREVIOUS YEAR</Text>
            </Flex>
          </Box>

          <Box height="100vh">
            <Flex width="100%" marginTop="20px" paddingTop="25px" className="pr" height="35vh" justifyContent="flex-end">
              <Text width="50%" fontSize="20px" className="fsa" paddingRight="10px" paddingTop="20px" color="#000">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</Text>
            </Flex>
            <Box width="100%" height="8vh" />
            <Swiper breakpoints={{ 660: { slidesPerView: 2 }, 907: { slidesPerView: 3 } }} slidesPerView={1} spaceBetween={40} pagination={{ "clickable": true }} className="mySwiper">
              <SwiperSlide><Slider4 /></SwiperSlide>
              <SwiperSlide><Slider4 /></SwiperSlide>
              <SwiperSlide><Slider4 /></SwiperSlide>
              <SwiperSlide><Slider4 /></SwiperSlide>
              <SwiperSlide><Slider4 /></SwiperSlide>
              <SwiperSlide><Slider4 /></SwiperSlide>
            </Swiper>
          </Box>

          <Box>

            <Box width="100%" height="150px" className="spons" bg="#222244d2">
              <Text fontSize="30px" className="sponstxt">SPONSORS</Text>
            </Box>
            <Flex width="100%" bg="#fff" flexWrap="wrap" justifyContent="center">
              <Image src={Astra} width="400px" p={8} alt=""></Image>
              <Image src={Atlasian}  width="400px" p={8} alt=""></Image>
              <Image src={Boeing}  width="400px" p={8} alt=""></Image>
              <Image src={CAT}  width="400px" p={8} alt=""></Image>
              <Image src={KLA}  width="400px" p={8} alt=""></Image>
              <Image src={Mahindra}  width="400px" p={8} alt=""></Image>
              <Image src={Salesforces} width="400px" p={8} alt=""></Image>
              <Image src={Wells} width="400px" p={8} alt=""></Image>
              <Image src={foxmula} width="400px" p={8} alt=""></Image>
              <Image src={innovaccer} width="400px" height="150px" p={8} alt=""></Image>
              <Image src={kamal} width="400px" p={8} alt=""></Image>
              <Image src={LT} width="400px" p={8} alt=""></Image>
              <Image src={subex} height="150px" width="400px" p={8} alt=""></Image>
              <Image src={mtx} height="170px" width="400px" p={8} alt=""></Image>
              <Image src={surana} width="400px" p={8} alt=""></Image>

            </Flex>
          </Box>

          <Box color="#000" width="100%" height="30vh">
          <Flex height="30%"  width="25%" margin="auto" justifyContent="space-between" alignItems="flex-end">
            <a href="https://www.instagram.com/shaastra_iitm/?hl=en\" target="_blank"><FontAwesomeIcon size="2x" icon={faInstagram}  color="#000" /></a>
            <a href="https://www.facebook.com/Shaastra/" target="_blank"><FontAwesomeIcon icon={faFacebook} size="2x"  color="#000"></FontAwesomeIcon></a>
            <a href="https://in.linkedin.com/company/shaastra-iit-madras" target="_blank"><FontAwesomeIcon size="2x" icon={faLinkedin}  color="#000"></FontAwesomeIcon></a>
          </Flex>
          <Box height="10%"></Box>
            <Flex justifyContent="center">
              <Text fontSize="15px" fontWeight="650">Designed By Mitesh,Krithika,Srinivas,Tushar,Jenith</Text></Flex>
            <Flex justifyContent="center">
              <Text fontSize="15px" fontWeight="650">Webops Team Shaastra</Text></Flex>
            <Flex justifyContent="center">
              <Text fontSize="15px" fontWeight="650">Copyright &copy; 2020 Shaastra</Text></Flex>
          </Box>
        </Stack>
      </Box>
    </CustomBox>
  );
};

export default Home;
