import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Center, Container, Flex, Heading ,Image, Spacer, Tag, TagLabel, Text } from "@chakra-ui/react";
import * as React from "react";
import { useParams } from "react-router-dom";
import CustomBox from "../../shared/CustomBox";
import { workshops } from "./data";

const WorkshopPage = ()=>{

    const { workshopid } = useParams<{workshopid : string}>();
    const today = new Date();
    const workshop  = workshops.filter((workshop)=>{
            if(workshop.id === workshopid){
                return true;
            }
    });

    return(
        <CustomBox>
            <Flex flexDirection={"column"} alignItems="center" paddingTop={'80px'} minHeight={"100vh"}>
            <Heading mb={4}>{workshop[0].name}</Heading>
             <Container maxWidth="6xl" alignItems="center" justifyContent='center'>
             <Flex flexDirection={['column','column','row']}>
             <Image
                h={['20%','20%',"auto"]}
                objectFit ={'cover'}
                src={workshop[0].imageUrl}
                p={4}
                rounded={["full","3xl"]}
                className="card-img"
            />
             <Flex
                direction={'column'}
                justifyContent={'space-between'}>
                <Text
                fontWeight={'medium'}
                fontSize={'20px'}
                p={4}>
                {workshop[0].description}
                </Text>
               
                <Flex p={3} flexDirection={["column","row"]} alignItems={'center'}>
                 <Flex p={3} flexDirection="row" alignItems={'center'}>
                  <Text
                    fontFamily={'Inter'}
                    fontWeight={'medium'}
                    >
                    DeadLine : <Tag variant="solid" 
                    colorScheme={(workshop[0].deadline.getFullYear() === today.getFullYear())&&(
                        workshop[0].deadline.getMonth() === today.getMonth()
                    )&&(workshop[0].deadline.getDate()-today.getDate()) <= 1 ? "red" : "teal"}
                    > <TagLabel>{workshop[0].deadline.toDateString()}</TagLabel></Tag>
                    </Text>
                    </Flex >
                    <Spacer />
                    <Flex float = "right">
                    <Button colorScheme="#6a6a85b6" variant="outline" border="2px solid"
                    isDisabled = { (workshop[0].deadline.getFullYear() === today.getFullYear())&&(
                        workshop[0].deadline.getMonth() === today.getMonth()
                    )&&(workshop[0].deadline.getDate()-today.getDate()) < 1 ? true : false }
                    size="sm" p={2} m={2}>
                        Register Now
                    </Button>
                    </Flex>
                 </Flex>
                </Flex>
                </Flex>
             </Container>
             <Container maxWidth="5xl">
             <Center>
             <Heading m={4}>FREQUENTLY ASKED QUESTIONS</Heading>
             </Center>
             {
                    workshop[0].faqs.map((faq)=>{
                        return(
                            <Box mb={2} key={faq.id}>
                                <Flex>
                                    <Box   p={'5'}  width={'100%'} backgroundColor={"#AACDBE"}>
                                       <Heading size = "md">{faq.question}</Heading>
                                    </Box>
                                </Flex>
                                <Flex>
                                    <Box p={'5'} borderColor={"#AACDBE"} backgroundColor={"#b4f0d6"}>
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

export default WorkshopPage;