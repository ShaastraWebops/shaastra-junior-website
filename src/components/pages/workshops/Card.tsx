import {  Flex, Text } from "@chakra-ui/layout";
import { Button,Heading, Image, Spacer, Tag, TagLabel } from "@chakra-ui/react";
import {useHistory } from "react-router-dom";
import * as React from "react";
import { workshop } from "./data";
interface props {
    data : workshop,
    type : string
}
const Card = ({data, type} : props) =>{
    const history = useHistory();
    const today = new Date();
    console.log(type)
    return(
            <Flex
            rounded={'xl'}
            p={3} m={3}
            width={['auto','85%']}
            alignItems={'center'}
            flexDirection={['column','column','row']}
            justifyContent={'space-between'}
            _hover={{boxShadow : 'lg',}}
            backgroundColor={'#6a6a85b6'}>
            <Image
                h={['20%','25%']}
                objectFit ={'fill'}
                src={data.imageUrl}
                rounded="3xl"
                className="card-img"
            />
            <Flex
                direction={'column'}
                justifyContent={['center','space-between']}
                width='full' m={2}>
                <Heading size="lg"  m={2}>{data.name}</Heading>
                <Text
                fontWeight={'medium'}
                fontSize={'15px'}
                p={3}>
                {data.description}
                </Text>
                  <Flex p={3} flexDirection={["column","column","row"]}>
                  <Text fontWeight={'medium'}>
                    DeadLine : 
                    <Tag variant="solid" 
                     p={2} mx={2}
                    colorScheme={(data.deadline.getFullYear() === today.getFullYear())&&(
                        data.deadline.getMonth() === today.getMonth()
                    )&&(data.deadline.getDate()-today.getDate()) <= 1 ? "red" : "teal"}
                    >
                        <TagLabel>{data.deadline.toDateString()}</TagLabel>
                        </Tag>
                    </Text>
                    <Spacer />
                    <Button colorScheme="#6a6a85b6" variant="outline" border="2px solid"
                    borderColor = "#222244d2"
                    size="sm" p={2} m={2}
                     onClick={() => {
                         if(type === "workshops"){
                            history.push(`/workshops/${data.id}`)
                         }else if(type === "competitions"){
                           
                            history.push(`/competitions/${data.id}`)
                         }
                     }} >
                        View Details
                    </Button>
                    <Button
                    colorScheme="#6a6a85b6" variant="outline" border="2px solid"
                    borderColor = "#6a6a85b6"
                    isDisabled = { (data.deadline.getFullYear() === today.getFullYear())&&(
                        data.deadline.getMonth() === today.getMonth()
                    )&&(data.deadline.getDate()-today.getDate()) < 1 ? true : false }
                     size="sm" p={2} m={2}>
                        Register Now
                    </Button>
                    </Flex>
                </Flex>
                
      </Flex>
    )


}

export default Card;