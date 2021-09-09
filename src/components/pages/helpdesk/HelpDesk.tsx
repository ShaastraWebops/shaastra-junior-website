import React from 'react'
import CustomBox from '../../shared/CustomBox'
import { Flex, Heading } from '@chakra-ui/layout';
import {  Input, Button, FormControl } from '@chakra-ui/react';
import Names from './Names';



function HelpDesk() {

  

  return (
    // <ApolloProvider client={client}>
    <CustomBox >
      <Flex  flexDirection={"column"} justifyContent="center" alignItems="center" paddingTop={'100px'}>
            <Heading >Helpdesk</Heading>
        <Flex mb = "75px" w="max" flexDirection={"column"} justifyContent="center" alignItems="center" p={3} >
          
          <Names/>
             
             </Flex>
            
        <FormControl bg="#222244d2" bottom ="0" position="fixed" padding="10">
          <Flex flexDirection={"row"}  justifyContent="center" alignItems= "center" mx = "300px" px="10">
          <Input placeholder="Post your question here"></Input>
            <Button m= "1"  type="submit">Submit</Button>
            </Flex>
             </FormControl>

      
         </Flex>
      </CustomBox>
      // </ApolloProvider>
  )
}

export default HelpDesk
