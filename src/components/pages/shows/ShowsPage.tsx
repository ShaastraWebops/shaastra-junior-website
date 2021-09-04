import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Center, Container, Flex, Heading ,Image, Spacer, Tag, TagLabel, Text } from "@chakra-ui/react";
import * as React from "react";
import { useParams } from "react-router-dom";
import CustomBox from "../../shared/CustomBox";
import { shows } from "./data";

const ShowPage = ()=>{

    const { showid } = useParams<{showid : string}>();
    console.log(showid)
    const show = shows.filter((el) => {
        if(el.id === showid) return true;
    })
    console.log(show)
    return(
        <CustomBox>
            <Flex flexDirection={"column"} alignItems="center" paddingTop={'80px'} minHeight={"100vh"} backgroundColor="#AACDBE">
            <Heading mb={4} fontSize="4.4vw" color="white" marginTop="4vh" marginBottom="4vh">{show[0].name}</Heading>
             <Container maxWidth="6xl" alignItems="center" justifyContent='center'>
             <Flex flexDirection={['column','column','row']}>
             <Image
                h={['20%','20%',"auto"]}
                objectFit ={'cover'}
                src={show[0].imageUrl}
                p={4}
                rounded={["full","3xl"]}
                className="card-img"
            />
             <Flex
                direction={'column'}
                alignSelf="center"
                color="#1c1c2bc2"
                justifyContent={'space-between'}>
                <Text
                fontWeight={'medium'}
                fontSize={'20px'}
                p={4}>
                {show[0].description}
                </Text>
{/*                
                <Flex p={3} flexDirection={["column","row"]} alignItems={'center'}>
                    <Flex float = "right">
                    <Button colorScheme="#6a6a85b6" variant="outline" border="2px solid"
                    isDisabled = { (workshop[0].deadline.getFullYear() === today.getFullYear())&&(
                        workshop[0].deadline.getMonth() === today.getMonth()
                    )&&(workshop[0].deadline.getDate()-today.getDate()) < 1 ? true : false }
                    size="sm" p={2} m={2}>
                        Register Now
                    </Button>
                    </Flex>
                 </Flex> */}
                </Flex>
                </Flex>
             </Container>
             <Container maxWidth="5xl" marginBottom="15vh">
             <Center>
             <Heading m={4} padding="0 0.75vw" paddingBottom="2vh" borderBottom="2px solid #1c1c2bc2">FREQUENTLY ASKED QUESTIONS</Heading>
             </Center>
             {
                    show[0].faqs.map((faq)=>{
                        return(
                            <Box mb={2} key={faq.id}>
                                <Flex>
                                    <Box   p={'5'}  width={'100%'}  color="#1c1c2bc2">
                                       <Heading size = "md">{faq.question}</Heading>
                                    </Box>
                                </Flex>
                                <Flex>
                                    <Box p={'5'} color="black" borderColor={"#AACDBE"} backgroundColor={"#eff1d0c7"}>
                                    {faq.answer}
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

export default ShowPage;