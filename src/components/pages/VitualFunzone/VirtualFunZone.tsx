import React from 'react';
import redball from '../../../images/Virtualfunzone/Redball.png';
import SheepItUp from '../../../images/Virtualfunzone/SheepItUp.png';
import WarriorFox from '../../../images/Virtualfunzone/Warriorfox.png';
import MelonMince from '../../../images/Virtualfunzone/MelonMince.png';
import { Box, Center, Container, Flex, Heading , SimpleGrid,Text} from '@chakra-ui/layout';
import Card from './Card';
import './Virtualzone.css';
import { Alert, AlertDescription, AlertIcon } from '@chakra-ui/alert';
import { useDisclosure } from '@chakra-ui/hooks';
import {Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay} from '@chakra-ui/react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import {Icon } from "@chakra-ui/react";
import Footer from "../../shared/Footer";
import LightsOut from '../../../images/Virtualfunzone/LightsOut.png';
import  DodgeTheSword from '../../../images/Virtualfunzone/DodgeTheSword.png';

interface game{
    image : string,
    description : string,
    title : string,
    color : string,
    link ?: string
}

const data : game[] = [
    {
        image : redball,
        description : "Fling  the  red  balls  to  get  rid  of  the  boring  blue  ones!",
        title : "Red Ball",
        color : "rgb(255,100,100,0.8)",
        link :"https://sjvirtualzone.s3.ap-south-1.amazonaws.com/Redball/index.html"

    },{
        image : SheepItUp,
        description : "Beep beep you’re a sheep we said beep-beep-you’re-a-sheep!",
        title : "Sheep It Up ",
        color : "rgb(100,100,100,0.4)",
        link : "https://sjvirtualzoneg3.s3.ap-south-1.amazonaws.com/SheepItUp/index.html"

    },{
        image : WarriorFox,
        description : "An  epic  quest  to  fulfil  a  little  fox’s  dream! ",
        title : "WarriorFox",
        color : "rgb(240, 190, 10,0.8)",
        link: "https://sjvirtualzoneg4.s3.ap-south-1.amazonaws.com/WarriorFox/index.html"

    },{
        image : MelonMince,
        description : "Someone’s  throwing  melons  in  the  air.  We  have  a  sword.  Hmm…",
        title : "Melon Mince",
        color : "rgb(70,200,70,0.8)",
        link : "https://sjvirtualzoneg2.s3.ap-south-1.amazonaws.com/MelonMince/index.html"

    },{
        image : DodgeTheSword,
        description : "Zombies  with  swords  vs  you  (with  sword)!",
        title  :"DodgeTheSword",
        color : "rgba(255, 165, 0, 0.4)",
        link : "https://sjvirtualzoneg6.s3.ap-south-1.amazonaws.com/Dodge+The+Sword/index.html"
    },{
        image : LightsOut,
        description : "Get to the other end of the house. But beware, there are ghosts, and your only pal is a little flashlight.",
        title  :"Lights Out",
        color : "rgba(0,0,0,0.7)",
        link : "https://sjvirtualzoneg7.s3.ap-south-1.amazonaws.com/Lights+Out/index.html"
    }

]

const VirtualFunZone = () =>{
    const [alert,setAlert] = React.useState(false);

    let { onClose } = useDisclosure();
    if (alert) {
        onClose = () => {
            window.location.reload()
        }
        return (<Modal isOpen={true} onClose={onClose} size={'3xl'}>
            <ModalOverlay></ModalOverlay>
            <ModalContent backgroundColor="#ffffff" color="#222244" mx={5}>
                <ModalCloseButton onClick={onClose}></ModalCloseButton>
                <ModalHeader
                 borderRadius={'xl'} paddingTop="4vh" p={5}  margin="0 1vw" textAlign="center">
                    <br />
                     <h1>
                     A mouse and a keyboard are required to play the game.
                     <br />Please open the website on your desktop/laptop
                     </h1>
                    <br />
                </ModalHeader>
            </ModalContent>
        </Modal>
        )
    }

    return (
       <Flex 
       flexDirection={"column"}
       alignItems="center"
       paddingTop={["20px", "20px"]}
       minHeight={"100vh"}
       className="virtualzone">
        <Center>
        <Box width={'100%'}>
        <Text as={'h1'} fontSize={'35px'}  width={['auto']} className={'vtitle'} float={['none','none','inline-start']}>
            VIRTUAL FUNZONE
        </Text>
        </Box>
        </Center>
       
         <Container maxWidth={'7xl'} className="vhome"  p={2} alignContent = {'center'} justifyContent={'center'}>
          {
              alert ? ( <Center>
                  <Alert status="info" width={'90%'}>
              <AlertIcon />
              A mouse and a keyboard are required to play the game.Please open the website on your desktop/laptop
          </Alert>
              </Center>) : null
          }
            <Center>
            <SimpleGrid columns={[1,1,2,3,4]} p={2} m={2} spacingX="40px" spacingY="20px">
            {
                data.map(game => {
                    return(
                        <Card key={game.title} data = {game} setAlert = {setAlert}/>
                    )
                })
            }
        </SimpleGrid>
            </Center>
            {/* <Alert 
                aligncontents={'center'} 
                justifyContent = {'center'}
                textAlign= {'center'}
                width={'auto'}
                status="info" height = "75px"   rounded={'xl'}
                p={2} m={5}>
                <Center>
                <AlertIcon boxSize="40px" m={2}/>
                <Box >
                <AlertDescription display="flex">
                <Heading as={"h2"} size={"lg"} textColor={'#244f3b'}> More games are coming soon</Heading>
                </AlertDescription>
                </Box>
                </Center>
            </Alert> */}

       </Container>
       </Flex>
    )
}

export default VirtualFunZone;
