/* eslint-disable react/jsx-no-target-blank */
import * as React from "react";
import { Text, useColorModeValue, Flex, Stack, Image, Box } from "@chakra-ui/react";
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
import "../../styles/ChampionShip.css";
import "../../styles/events.css";
import "../../styles/header.css";
// import "../../styles/.css";
import "../../styles/profile.css";
import "../../styles/signin.css";
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
import { faInstagram, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Typist from 'react-typist';
import bg from '../../images/bg.gif';
import Footer from "../shared/Footer";
interface Props { }

SwiperCore.use([Pagination]);
const Home = (props: Props) => {
  const Logo = useColorModeValue(
    DiceOutlineDarkAnimated,
    DiceOutlineLightAnimated
  );

  return (
    <CustomBox>
      <Box color="" width="100vw" height="100%" >
        <Stack>
          <Flex width="100%" height="100vh" className="xyz" flexDirection="column">
            {/* <img src={bg} alt="" className="xyz"></img>  */}
            <Flex flexDirection="column" paddingTop="4%" paddingLeft="4%">

              <Typist cursor={{hideWhenDone:true,show:false}}>
                <span className="this">WELCOME TO</span>
                <Typist.Backspace count={10} delay={2000} />
                <span className="this">SHAASTRA JUNIOR PORTAL&nbsp;</span>
                <span className="this">2021</span>
              </Typist>

            </Flex>
            <Flex justifyContent="flex-end" paddingRight="30px" width="100%">
              <Text className="titleContent" color="#000">A vision board to reflect our dreams,
                Infinite innovation for you to redeem.
                Put together ideas that rise from need,
                Beware, creativity bends to no greed.
                A sacred place with ample room to grow-
                Behold one and all, it is yours to know!</Text>
              </Flex>
          </Flex>
          <Flex className="a42" justifyContent="center" height="60vh">
            <Swiper pagination={true} className="mySwiper">
              <SwiperSlide>
                <Flex justifyContent="center" className="w1" width="100vw" height="70vh"></Flex></SwiperSlide>
              <SwiperSlide>
                <Flex justifyContent="center" className="w2" width="100vw" height="70vh"></Flex></SwiperSlide>
              <SwiperSlide>
                <Flex justifyContent="center" className="w3" width="100vw" height="70vh"></Flex></SwiperSlide>
              <SwiperSlide>
                <Flex justifyContent="center" className="w1" width="100vw" height="70vh"></Flex></SwiperSlide>
              <SwiperSlide>
                <Flex justifyContent="center" className="w2" width="100vw" height="70vh"></Flex></SwiperSlide>
              <SwiperSlide>
                <Flex justifyContent="center" className="w3" width="100vw" height="70vh"></Flex></SwiperSlide>
            </Swiper>
          </Flex>
          <div className="flx">
            <h2 className="text" color="black">
              vero velit sapiente, odit exercitationem laborum atque. Fuga? adipisicing elit. Quod quasi minus, consequuntur dolores sed quam doloremque nisi fugit mollitia qui debitis magnam, maxime ipsum voluptates voluptatem aliquam, repellat quidem delectus.
            </h2>
          </div>

          <Box className="mainn" width="100%">
            <div className="flx1">
              <h2 className="text1">
                TODAY’S HIGHLIGHTS
              </h2>
            </div>
          </Box>

          <Flex width="100%" overflow="hidden" display="flex" height="80vh" flexWrap="wrap" justifyContent="center">
            <Swiper breakpoints={{ 660: { slidesPerView: 2 }, 907: { slidesPerView: 3 } }} slidesPerView={1} spaceBetween={40}>
              <SwiperSlide><Slider2 /></SwiperSlide>
              <SwiperSlide><Slider2 /></SwiperSlide>
              <SwiperSlide><Slider2 /></SwiperSlide>
              <SwiperSlide><Slider2 /></SwiperSlide>
              <SwiperSlide><Slider2 /></SwiperSlide>
              <SwiperSlide><Slider2 /></SwiperSlide>
            </Swiper>
          </Flex>

          <Box className="mainn" width="100%">
            <Flex justifyContent="center">
              <Text p={10} fontSize="50px" color="#474768" fontWeight="650">PREVIOUS YEAR</Text>
            </Flex>
          </Box>

          <Box height="120vh">
            <Flex marginTop="-10px" width="100%" paddingTop="25px" className="pr" height="50vh" justifyContent="flex-end">
              <Text width="50%" fontSize="20px" className="fsa" paddingRight="10px" paddingTop="20px" color="#000">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</Text>
            </Flex>
            <Box width="100%" height="8vh" />
            <Swiper breakpoints={{ 660: { slidesPerView: 2 }, 907: { slidesPerView: 3 } }} slidesPerView={1} spaceBetween={40} pagination={{ "clickable": true }}>
              <SwiperSlide><Slider4 /></SwiperSlide>
              <SwiperSlide><Slider4 /></SwiperSlide>
              <SwiperSlide><Slider4 /></SwiperSlide>
              <SwiperSlide><Slider4 /></SwiperSlide>
              <SwiperSlide><Slider4 /></SwiperSlide>
              <SwiperSlide><Slider4 /></SwiperSlide>
            </Swiper>
          </Box>

          <Box width="100%">
            <Box width="100%" height="120px" className="mainn" bg="#222244d2">
              <Text fontSize="30px" color="#474768" letterSpacing="1px" className="sponstxt">SPONSORS</Text>
            </Box>
            <Flex width="100%" bg="#fff" flexWrap="wrap" justifyContent="center">
              <Image src={Astra} width="400px" p={8} alt=""></Image>
              <Image src={Atlasian} width="400px" p={8} alt=""></Image>
              <Image src={Boeing} width="400px" p={8} alt=""></Image>
              <Image src={CAT} width="400px" p={8} alt=""></Image>
              <Image src={KLA} width="400px" p={8} alt=""></Image>
              <Image src={Mahindra} width="400px" p={8} alt=""></Image>
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
          <Footer></Footer>
        </Stack>
      </Box>
    </CustomBox>
  );
};

export default Home;
