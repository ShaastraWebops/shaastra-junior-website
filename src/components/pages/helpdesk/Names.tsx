import React, { useState } from 'react'
import JSONdata from './data.json'
import {IconContext} from 'react-icons'
import {FiPlus,FiMinus} from 'react-icons/fi'
import { Box, Text, Center, ChakraProvider, Container, Heading, HStack, Wrap, SlideFade, useDisclosure, Input, Collapse, Flex } from '@chakra-ui/react'


function Names() {
  const [click,setClick ] = useState(false)
  const [searchTerm,setSearchTerm] = useState("")


  const toggle = (index:  any) =>{
      if(click===index){
          return setClick(false)
      }
      setClick(index)
  }






  return (
    <IconContext.Provider value={{color:'#ffff',size:'25px'}}>
    <Flex mb ="75px"  flexDirection={"column"} justifyContent="center" alignItems="center" >

        <Input  width = "840px"  placeholder = "Search in existing answers" onChange ={event =>{setSearchTerm(event.target.value)}}></Input>
    {JSONdata.filter((item)=>{
        if(searchTerm  == ""){
            return item
        } else if(item.question.toLocaleLowerCase().includes(searchTerm)){
             return item
        } else if (!item.question.toLocaleLowerCase().includes(searchTerm)) {
            
        }
    }).map((item,index) =>{

        return(
            <>
            
            <div m= "5" spacing = "3" onClick = {()=>toggle(index)}  key = {index}>

            <Box   p="3" mb={2} >
                                <Flex>
                                    <Box p={'5'} width={"100%"} backgroundColor={"#6a6a85b6"}>
                                       <Heading size = "md">Question</Heading>
                                    </Box>
                                </Flex>
                                <Flex>
                                    <Box width ="850px" p={'5'} backgroundColor={'#dbdbff'} >
                                    <Text fontWeight={"semibold"}>{item.question}</Text>
                                    </Box>
                                </Flex>
                            </Box>
                
             
             </div>
             
             
             <Collapse in={click===index} animateOpacity>
                    <Box
                        
                     w = {"850px"}
                     p="40px"
                     color="white"
                     mt="4"
                     backgroundColor={"#6a6a85b6"}
                     rounded="md"
                     shadow="md"
                     >
                 {item.answer}
                 </Box>
                  </Collapse>
               
             
            </>
        )

    })}
    </Flex>
    
 </IconContext.Provider>
  )
}

export default Names
