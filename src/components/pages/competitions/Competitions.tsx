import { Flex, Text, VStack } from "@chakra-ui/react";
import * as React from "react";
import CustomBox from "../../shared/CustomBox";


const Competitions = () => {
   
    return (
      <CustomBox>
        <Flex flexDirection={"column"} justifyContent="center" alignItems="center" minH="100vh" p={3}>
          <VStack spacing={8}>
        
            <Text>
               This is Competitons page
            </Text>
          </VStack>
        </Flex>
      </CustomBox>
    );
  };
  
  export default Competitions;