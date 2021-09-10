import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Center, Container, Flex, Heading ,Image, Spacer, Tag, TagLabel, Text } from "@chakra-ui/react";
import * as React from "react";
import { useParams } from "react-router-dom";
import CustomBox from "../../shared/CustomBox";
import ppl1 from '../../../images/ppl1.svg';
import './ChampionShip.module.css';
import ppl10 from '../../../images/ppl10.svg';
import Slider3 from '../Slider3';
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetChampionshipQuery, Championship, useClearChampionshipMutation, SetChampionshipDocument, useSetChampionshipMutation, } from '../../../types/generated/generated';
import Loader from '../../shared/Loader';
import a1 from '../../../images/123.png';
import { useQuery } from '@apollo/react-hooks';
import { Usercontext } from '../signinUp/Context';

const Champ = ()=>{

    
    const today = new Date();

    return(
        <CustomBox>
            <Flex justifyContent="center" width="100" >
                <Text fontSize="4xl" fontWeight="650" paddingTop="20px" color="#fff">
                    RESULT
                </Text>
            </Flex>
               
           
        </CustomBox>
    )
}

export default Champ;