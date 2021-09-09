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
import SwiperCore, { Autoplay, Pagination } from 'swiper/core';
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
import HomePic from "../../images/Home.png"
import Footer from "../shared/Footer";
import {Usercontext} from "../pages/signinUp/Context"
import shaastra_1 from "../../images/shaastra_1.png"
import shaastra_2 from "../../images/shaastra_2.png"
interface Props { }

SwiperCore.use([Pagination, Autoplay]);
const Home = (props: Props) => {
  const Logo = useColorModeValue(
    DiceOutlineDarkAnimated,
    DiceOutlineLightAnimated
  );
  const role = React.useContext(Usercontext)
  console.log(role)
  return (
    <CustomBox>
      <Box color="" width="100vw" height="100%" position="relative">
        <Stack>
          <Flex width="100%" height="100vh" className="xyz" flexDirection="column" backgroundColor="black" backgroundImage={HomePic} >
            {/* <img src={bg} alt="" className="xyz"></img>  */}
            <Flex flexDirection="column" paddingTop="4%" paddingLeft="4%">

              <Typist >
                <span className="this">WELCOME TO</span>
                <Typist.Backspace count={10} delay={200} />
                <span className="this">SHAASTRA JUNIOR PORTAL&nbsp;</span>
                <span className="this">2021</span>
              </Typist>

            </Flex>
            <Flex justifyContent="flex-end" paddingRight="5%" width="100%">
              <Text className="titleContent" color="white" fontSize="2vw" textAlign="right">A vision board to reflect our dreams,
                Infinite innovation for you to redeem.
                Put together ideas that rise from need,
                Beware, creativity bends to no greed.
                A sacred place with ample room to grow-
                Behold one and all, it is yours to know!</Text>
              </Flex>
          </Flex>
          <Flex className="a42" flexDirection="column" justifyContent="center" height="70vh" backgroundColor="#AACDBE" paddingTop="6vh">
            <h1>SHAASTRA</h1>
            <Swiper pagination={true} className="mySwiper" 
            autoplay={
              {
                "delay": 3000
              }
            }>
              <SwiperSlide>
                <Flex justifyContent="center" className="w1" width="100vw" height="72vh"></Flex></SwiperSlide>
              <SwiperSlide>
                <Flex justifyContent="center" className="w2" width="100vw" height="72vh"></Flex></SwiperSlide>
              <SwiperSlide>
                <Flex justifyContent="center" className="w3" width="100vw" height="72vh"></Flex></SwiperSlide>
              <SwiperSlide>
                <Flex justifyContent="center" className="w1" width="100vw" height="72vh"></Flex></SwiperSlide>
              <SwiperSlide>
                <Flex justifyContent="center" className="w2" width="100vw" height="72vh"></Flex></SwiperSlide>
              <SwiperSlide>
                <Flex justifyContent="center" className="w3" width="100vw" height="72vh"></Flex></SwiperSlide>
            </Swiper>
          </Flex>
          <div className="flx">
            <h2 className="text" color="black">
            Shaastra is the annual technical festival of the Indian Institute of Technology
            Madras (IITM), Chennai, India. The Sanskrit word ‘Shaastra’ means science and
            the festival accordingly consists of various engineering, science, and technology
            competitions, summits, lectures, video conferences, exhibitions, demonstrations,
            and workshops. The festival is traditionally held over four days and four nights
            during the first week of January. It has so far seen twenty-one editions, having
            started in its current avatar in the year 2000. Shaastra attracts participation from
            all over India and seeks to provide collegiate students with a platform to showcase
            their scientific and engineering talents. Shaastra is entirely student-managed and
            is the first such event in the world to be ISO 9001:2015 certified for implementing
            a Quality Management System. It is one of Asia's largest completely student-run
            techno-managerial festivals. Every year, as part of Shaastra, we organize a social
            campaign in an attempt to give back to society and create as big of an impact on
            the lives of the people that we can with the audience that Shaastra amasses. Over
            the past years, we have successfully carried out several campaigns such as Blink,
            a campaign to help the Blind community, and Pledge a Book, to help provide
            books to the underprivileged, with these campaigns having been endorsed by a
            number of esteemed personalities, including the Honorable Dalai Lama, and
            helping a lot of people across all walks of life.
            </h2>
          </div>

          <Box className="mainn" width="100%">
            <div className="flx1">
              <h2 className="text1">
                TODAY’S HIGHLIGHTS
              </h2>
            </div>
          </Box>

          <Flex width="100%" overflow="hidden" display="flex" height="80vh" flexWrap="wrap" justifyContent="center" paddingTop="10vh">
            <Swiper breakpoints={{ 660: { slidesPerView: 2 }, 907: { slidesPerView: 3 } }} slidesPerView={1} spaceBetween={40}>
              <SwiperSlide><Slider2 /></SwiperSlide>
              <SwiperSlide><Slider2 /></SwiperSlide>
              <SwiperSlide><Slider2 /></SwiperSlide>
              <SwiperSlide><Slider2 /></SwiperSlide>
              <SwiperSlide><Slider2 /></SwiperSlide>
              <SwiperSlide><Slider2 /></SwiperSlide>
            </Swiper>
          </Flex>

          <Box className="mainn" width="100%" backgroundColor="#f4f7c5c0">
            <Flex justifyContent="center">
              <Text p={10} fontSize="50px" color="#474768" fontWeight="650">PREVIOUS YEAR</Text>
            </Flex>
          </Box>

          <Box height="120vh"  backgroundColor="#f4f7c5c0">
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
            <Box width="100%" height="150px" className="spons" bg="#222244d2">
              <Text fontSize="30px" color="#F3F3F3" letterSpacing="1px" className="sponstxt">SPONSORS</Text>
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
