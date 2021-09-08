import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Center, Container, Flex, Heading ,HStack,Image, Spacer, Tag, TagLabel, Text } from "@chakra-ui/react";
import * as React from "react";
import { useParams } from "react-router-dom";
import Img from "../../../images/Img.svg";
import CustomBox from "../../shared/CustomBox";
import { competitions } from "../workshops/data";

const CompetitionPage = ()=>{

    const { competitionid } = useParams<{competitionid : string}>();
    const today = new Date();
    const competition  = competitions.filter((competition)=>{
            if(competition.id === competitionid){
                return true;
            }
    });

    return(
        <CustomBox>
            <Flex flexDirection={"column"} alignItems="center" paddingTop={'80px'} minHeight={"100vh"}>
            <Heading mb={4}>{competition[0].name}</Heading>
             <Container maxWidth="6xl" alignItems="center" justifyContent='center'>
             <Flex flexDirection={['column','column','row']}>
             <Image
                h={['5%','2%',"auto"]}
                objectFit ={'cover'}
                src={competition[0].imageUrl}
                p={4}
                rounded={["3xl","3xl"]}
                className="card-img"
            />
             <Flex
                direction={'column'}
                justifyContent={'space-between'}>
                <Text
                fontWeight={'medium'}
                fontSize={'20px'}
                p={4}>
                {competition[0].description}
                </Text>
               
                 <Flex p={3} flexDirection={["column","row"]} alignItems={'center'}>
                 <Flex p={3} flexDirection="row" alignItems={'center'}>
                  <Text
                    fontFamily={'Inter'}
                    fontWeight={'medium'}
                    >
                    DeadLine : <Tag variant="solid" 
                    colorScheme={(competition[0].deadline.getFullYear() === today.getFullYear())&&(
                        competition[0].deadline.getMonth() === today.getMonth()
                    )&&(competition[0].deadline.getDate()-today.getDate()) <= 1 ? "red" : "teal"}
                    > <TagLabel>{competition[0].deadline.toDateString()}</TagLabel></Tag>
                    </Text>
                    </Flex >
                    <Spacer />
                    <Flex float = "right">
                    <Button colorScheme="#6a6a85b6" variant="outline" border="2px solid"
                    isDisabled = { (competition[0].deadline.getFullYear() === today.getFullYear())&&(
                        competition[0].deadline.getMonth() === today.getMonth()
                    )&&(competition[0].deadline.getDate()-today.getDate()) < 1 ? true : false }
                       size="sm" p={2} m={2}>
                        Register Now
                    </Button>
                    </Flex>
                 </Flex>
                </Flex>
             </Flex>
             </Container>
             <Container maxWidth="5xl">
             <Center textAlign={"center"}>
             <Heading size={'lg'} m={4}>FREQUENTLY ASKED QUESTIONS</Heading>
             </Center>
                {
                    competition[0].faqs.map((faq)=>{
                        return(
                            <Box mb={2} key={faq.id}>
                                <Flex>
                                    <Box p={'5'} width={"100%"} backgroundColor={"#6a6a85b6"}>
                                       <Heading size = "md">{faq.question}</Heading>
                                    </Box>
                                </Flex>
                                <Flex>
                                    <Box p={'5'} backgroundColor={'#dbdbff'} >
                                    <Text fontWeight={"semibold"}>{faq.answer}</Text>
                                    </Box>
                                </Flex>
                            </Box>

                        )
                    })
                }
             </Container>

         </Flex>
           
        </CustomBox>
    )
}

export default CompetitionPage;