import { Box, Button, Center, Container, Flex, Heading ,Image, Spacer, Tag, TagLabel, Text } from "@chakra-ui/react";
import * as React from "react";
import { useParams } from "react-router-dom";
import CustomBox from "../../shared/CustomBox";
import { competitions,workshops } from "../workshops/data";
import RegisterNow from "./RegisterNow";

const EventPage = ({type} : any)=>{
    const data = (type === "competitions" ? competitions : workshops) ;
    console.log(data)
    const { id } = useParams<{id : string}>();
    const today = new Date();
    const event  = data.filter((e)=>{
            if(e.id === id){
                return true;
            }
    });

    return(
        <CustomBox>
            <Flex flexDirection={"column"} alignItems="center" paddingTop={'80px'} minHeight={"100vh"}>
            <Heading mb={4}>{event[0].name}</Heading>
             <Container maxWidth="6xl" alignItems="center" justifyContent='center'>
             <Flex flexDirection={['column','column','row']}>
             <Image
                h={['2%',"300px","auto"]}
                width={'auto'}
                objectFit ={'contain'}
                src={event[0].imageUrl}
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
                {event[0].description}
                </Text>
               
                 <Flex p={3} flexDirection={["column","row"]} alignItems={'center'}>
                 <Flex p={3} flexDirection="row" alignItems={'center'}>
                  <Text
                    fontFamily={'Inter'}
                    fontWeight={'medium'}
                    >
                    DeadLine : <Tag variant="solid" 
                    colorScheme={(event[0].deadline.getFullYear() === today.getFullYear())&&(
                        event[0].deadline.getMonth() === today.getMonth()
                    )&&(event[0].deadline.getDate()-today.getDate()) <= 1 ? "red" : "teal"}
                    > <TagLabel>{event[0].deadline.toDateString()}</TagLabel></Tag>
                    </Text>
                    </Flex >
                    <Spacer />
                    <Flex float = "right">
                    <RegisterNow data={event[0]}/>
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
                    event[0].faqs.map((faq)=>{
                        return(
                            <Box mb={2} key={faq.id}>
                                <Flex>
                                    <Box p={'5'} width={"100%"} borderTopRadius={"lg"} backgroundColor={"#6a6a85b6"}>
                                       <Heading size = "md">{faq.question}</Heading>
                                    </Box>
                                </Flex>
                                <Flex>
                                    <Box p={'5'} backgroundColor={'#dbdbff'} borderBottomRadius={"lg"} >
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

export default EventPage;