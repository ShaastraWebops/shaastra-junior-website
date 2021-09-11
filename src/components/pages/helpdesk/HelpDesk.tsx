import React, { useState } from 'react'
import CustomBox from '../../shared/CustomBox'
import { Flex, Heading } from '@chakra-ui/layout';
import { Input, Button, FormControl, Container, Box } from '@chakra-ui/react';
import Names from './Names';
import { useCreateFaqMutation } from '../../../types/generated/generated';
import '../../../App.css'




function HelpDesk() {



  const [question, setQuestion] = useState("")

  const [createFaqMutation, { data, loading, error }] = useCreateFaqMutation({
    variables: {
      createFaqQuestion: question
    },
  });


  const handelSubmit = () => {
    console.log(question)
    createFaqMutation().then(() => {
      console.log("query subitted ")
      console.log(error)
    }

    ).catch((err) => {
      console.log(err)
    })


  }




  return (
    // <ApolloProvider client={client}>
    <>
      
    
      <CustomBox>
        

      
        <Flex flexDirection={"column"} justifyContent="center" alignItems="center" paddingTop={'100px'}>
          
          <Heading >Helpdesk</Heading>
          <Box width = "100%" justifyContent="center" alignItems="center" >

          <Flex width = "100%" mb="75px" w="max" pl = "300" flexDirection={"column"} justifyContent="center" alignItems="center"  >
            
            <Names />
            
          </Flex>
          </Box>
          
         </Flex>
        </CustomBox>
        
       
        
      

      <FormControl bg="#222244d2" bottom ="0" position="fixed" padding="10">
          <Flex flexDirection={"row"}  justifyContent="center" alignItems= "center" mx = "300px" px="10">
          <Input  value = {question} onChange = {(e)=>{setQuestion(e.target.value)}}  placeholder="Post your question here"></Input>
            <Button onClick = {handelSubmit} m= "1"  type="submit">Submit</Button>
          </Flex>
          
        </FormControl>
        
      </>
    
    
      // </ApolloProvider>
  )
}

export default HelpDesk
