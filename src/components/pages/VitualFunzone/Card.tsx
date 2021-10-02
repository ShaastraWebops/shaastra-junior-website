import {   Flex, Text } from "@chakra-ui/layout";
import { Center,Box,Button,FormControl,FormLabel,Heading, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Tag, TagLabel, useDisclosure } from "@chakra-ui/react";
import {  useHistory } from "react-router-dom";
import * as React from "react";
import {Link  , Icon } from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";

var MobileDetect = require('mobile-detect');


const Card = ({data,setAlert} : any) =>{
    const [useragent , setUseragent] = React.useState(navigator.userAgent);
    const [width , setWidth] = React.useState<any>();

    const handlewidth = () =>{
        setWidth(window.innerWidth)
    }
    React.useEffect(()=>{
        setUseragent(navigator.userAgent)
    },[width])
    
    window.addEventListener('resize', handlewidth)
   
    var md = new MobileDetect(useragent);


    const handleview = () =>{
        setAlert(true);
    }
    return(
            <Box key={data.title}>
            <Flex
            backgroundColor={data.color}
            color={"white"}
            rounded={'3xl'}
            p={2} m={3}
            width = {'275px'}
            alignItems={'center'}
            flexDirection={'column'}
            justifyContent={'space-between'}
            boxShadow = {'md'}
            _hover={{boxShadow : 'lg',}}
            height = {["full" ,"425px"]}
            >
            {
                md.mobile() === null ? (<Link href={data.link}>
                    <Image
                       
                        // h={['15%','200px']}
                        // width ={['300px']}
                        borderRadius = {'50px'}
                        objectFit ={'contain'}
                        src={data.image}
                        m={3}
                        alt = "Display-Image"
                    />
                   </Link>) : (
            <Image
               
                // h={['15%','200px']}
                // width ={['300px']}
                onClick = {handleview}
                borderRadius = {'50px'}
                objectFit ={'contain'}
                src={data.image}
                m={3}
                alt = "Display-Image"
            />
           )
            }
            <Flex
                direction={'column'}
                justifyContent={['center','space-between']}
                width='full' m={2}>
                <Heading size="lg"  m={2}>{data.title}</Heading>
                <Text
                fontWeight={'medium'}
                fontSize={'15px'}
                p={2}>
                {
                  data.description
                }
                </Text>
                { md!.mobile() === null? ( <Link href={data.link} >
                <Button  variant="solid" width={'100%'} borderRadius={"1000px"}
                _hover={{backgroundColor : "rgb(255,255,255,0.1)"}}
                className={'playbutton'}
                 boxShadow={"md"} backgroundColor ={"rgb(255,255,255,0.1)"} >
                     
                    <Icon as = {FaPlay} boxSize={5} m={2}  color="black.500"/> Play now
                  
                </Button>
                </Link>) : (<Button  variant="solid" width={'100%'} borderRadius={"1000px"}
                className={'playbutton'}
                onClick = {handleview}
                _hover={{backgroundColor : "rgb(255,255,255,0.1)"}}
                 boxShadow={"md"} backgroundColor ={"rgb(255,255,255,0.1)"} >
                     
                    <Icon as = {FaPlay} boxSize={5} m={2}  color="black.500"/> Play now
                  
                </Button>)

              }
                </Flex>
                </Flex>
            </Box>
    )


}

export default Card;