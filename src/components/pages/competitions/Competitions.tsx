import { Flex, Text, VStack, Stack, Center, Image, Heading, Avatar, Box, fromBox } from "@chakra-ui/react";
import * as React from "react";
import CustomBox from "../../shared/CustomBox";
import Card from "./card";

const Competitions = () => {

  return (
    <CustomBox>
      <Box width="100%" height="100%" bg="#3F5B78">
        <Box paddingTop="40px">
          <Flex flexWrap="wrap" width="100%" justifyContent="center">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </Flex>
        </Box>
      </Box>
    </CustomBox>
  );
};

export default Competitions;