import { shows } from "./data";
import {Flex, Image, Text, Heading, Button} from "@chakra-ui/react"
import * as React from "react";
import { useHistory } from "react-router-dom";

interface props {
    data: shows,
    type: string
}

const Card = ({data, type}: props) => {

    const history = useHistory();

    return (
        <Flex
        backgroundColor=" #eff1d0c7" 
        rounded={'xl'}
        p={3} m={3}
        width={['auto', '85%']}
        alignItems={'center'}
        flexDirection={['column','column','row']}
        justifyContent={'space-between'}
        color="#1c1c2bc2"
        _hover={{boxShadow : 'lg',}}>
            <Image  h={['20%','25%']}
                objectFit ={'fill'}
                src={data.imageUrl}
                rounded="3xl"
                className="card-img"></Image>
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
                <Button variant="outline" border="2px solid"
                    borderColor = "#1c1c2bc2"
                    size="sm" p={2} m={2}
                    color="#1c1c2bc2"
                    width="fit-content"
                    alignSelf="flex-end"
                    backgroundColor="#b0dbbe"
                     onClick={() => {
                         history.push(`/shows/${data.id}`)
                     }} 
                     >
                        View Details
                    </Button>
            </Flex>
        </Flex>
    )

}

export default Card;