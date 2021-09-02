import * as React from "react";
import { Text, useColorModeValue, Flex, Stack, Image, Box } from "@chakra-ui/react";
import { ReactComponent as DiceOutlineDarkAnimated } from "./../../images/logo/animated/non-looped/Text_Outline_Dark_animated.svg";
import { ReactComponent as DiceOutlineLightAnimated } from "./../../images/logo/animated/non-looped/Text_Outline_Light_animated.svg";
import ppl2 from '../../images/ppl2.svg';
import ppl5 from '../../images/ppl5.svg';
import ppl8 from '../../images/ppl8.svg';
import CustomBox from "../shared/CustomBox";
import Particle from 'react-particles-js';
import ShaastraLOGO from '../../images/ShaastraLOGO.svg';
import { Swiper, SwiperSlide } from "swiper/react";
import '../../styles/home.css';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import Slider2 from "./Slider2";
import SwiperCore, { Pagination } from 'swiper/core';
import Navbar from '../pages/navbar/navbar';
import Footer from '../pages/footer/footer';
interface Props { }

SwiperCore.use([Pagination]);
const Home = (props: Props) => {
  const Logo = useColorModeValue(
    DiceOutlineDarkAnimated,
    DiceOutlineLightAnimated
  );

  return (
    // <CustomBox>
    <Box className="mainn" color="#FFE5E5" width="100%" height="100%">
        <Stack>
          <Navbar />
          <Box display="flex" justifyContent="flex-end" className="boxxx" width="100%" height="100vh">
          </Box>

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

          <Box bg="#F4F7C5" width="100%">
            <div className="flx1">
              <h2 className="text1">
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

          <Box bg="#F4F7C5" width="100%">
            <Flex justifyContent="center">
              <Text p={10} fontSize="50px" color="#474768" fontWeight="650">PREVIOUS YEAR</Text>
            </Flex>
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
            <Flex justifyContent="center">
              <Text fontSize="40px" p={10} color="#fff" fontWeight="650">
                TESTIMONIALS
              </Text>
            </Flex>

            <Flex flexDirection="row" justifyContent="flex-start">
              <Swiper spaceBetween={30} pagination={{ "clickable": true }} className="mySwiper">
                <SwiperSlide><Slider2 /></SwiperSlide>
                <SwiperSlide><Slider2 /></SwiperSlide>
                <SwiperSlide><Slider2 /></SwiperSlide>
              </Swiper>
              <Image src={ppl5} className="img22" alt=""></Image>
            </Flex>

            <Box width="100%" height="150px" className="spons" borderRadius="3px">
              <Text className="sponstxt" color="#474768">SPONSORS</Text>
            </Box>
            <Flex width="100%" bg="#F4F7C5" borderRadius="2px" flexWrap="wrap" justifyContent="center">
              <Image src={ppl8} p={8} alt=""></Image>
              <Image src={ppl8} p={8} alt=""></Image>
              <Image src={ppl8} p={8} alt=""></Image>
              <Image src={ppl8} p={8} alt=""></Image>
              <Image src={ppl8} p={8} alt=""></Image>
              <Image src={ppl8} p={8} alt=""></Image>
            </Flex>
          </Box>

          <Footer/>
        </Stack>
    </Box>
    // </CustomBox>
  );
};

export default Home;
